import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import rateLimit from "@/lib/rate-limit";

export const runtime = "nodejs";

const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500,
});

// Schéma adapté pour correspondre aux champs du formulaire de contact
const contactSchema = z.object({
  firstName: z
    .string()
    .min(2, "Le prénom doit contenir au moins 2 caractères")
    .max(50, "Le prénom ne peut pas dépasser 50 caractères"),
  lastName: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom ne peut pas dépasser 50 caractères"),
  name: z.string().min(2, "Le nom complet doit contenir au moins 2 caractères"),
  email: z
    .string()
    .email("Format d'email invalide")
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Format d'email invalide",
    ),
  phone: z
    .string()
    .regex(
      /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
      "Format de téléphone invalide",
    ),
  subject: z.string().min(2, "Le sujet est requis"),
  message: z
    .string()
    .min(5, "Le message doit contenir au moins 5 caractères")
    .max(1000, "Le message ne doit pas dépasser 1000 caractères"),
  honeypot: z.string().max(0).optional(),
  formType: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    if (
      !process.env.RESEND_API_KEY ||
      !process.env.MAIL_TO ||
      !process.env.MAIL_FROM
    ) {
      throw new Error(
        "Variables d'environnement manquantes pour l'envoi d'emails",
      );
    }

    // Initialisation de Resend à l'intérieur de la fonction
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Rate limiting
    try {
      await limiter.check(5, "CONTACT_RATE_LIMIT");
    } catch {
      return NextResponse.json(
        { error: "Trop de requêtes. Veuillez réessayer plus tard." },
        { status: 429 },
      );
    }

    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    if (validatedData.honeypot) {
      return NextResponse.json({ error: "Requête invalide" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: process.env.MAIL_FROM!,
      to: process.env.MAIL_TO!,
      replyTo: validatedData.email,
      subject: `Nouveau message: ${validatedData.subject}`,
      html: `
  <div style="font-family: 'Inter', 'Segoe UI', Roboto, sans-serif; line-height: 1.6; background-color: #EFE2D6; color: #341514; margin: 0; padding: 40px 20px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(52, 21, 20, 0.08);">
      <!-- En-tête -->
      <div style="background-color: #DFC3A8; padding: 40px 30px; text-align: center;">
        <h1 style="color: #341514; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.02em;">Nouveau Message</h1>
        <p style="color: #341514; margin: 10px 0 0; font-size: 16px;">
          Via le formulaire de contact
        </p>
      </div>
      
      <!-- Contenu principal -->
      <div style="padding: 40px 30px; background-color: #FFFFFF;">
        <div style="margin-bottom: 35px;">
          <h2 style="color: #341514; font-size: 20px; margin: 0 0 25px 0; font-weight: 600; border-bottom: 1px solid #DFC3A8; padding-bottom: 12px;">
            Informations de contact
          </h2>
          
          <div style="display: table; width: 100%;">
            <div style="display: table-row;">
              <div style="display: table-cell; padding: 12px 16px 12px 0; font-weight: 500; color: #C58C64; width: 120px;">Nom</div>
              <div style="display: table-cell; padding: 12px 0; color: #341514;">${validatedData.name}</div>
            </div>
            <div style="display: table-row;">
              <div style="display: table-cell; padding: 12px 16px 12px 0; font-weight: 500; color: #C58C64;">Email</div>
              <div style="display: table-cell; padding: 12px 0; color: #341514;">
                <a href="mailto:${validatedData.email}" style="color: #341514; text-decoration: none; font-weight: 500;">${validatedData.email}</a>
              </div>
            </div>
            <div style="display: table-row;">
              <div style="display: table-cell; padding: 12px 16px 12px 0; font-weight: 500; color: #C58C64;">Téléphone</div>
              <div style="display: table-cell; padding: 12px 0; color: #341514;">
                <a href="tel:${validatedData.phone}" style="color: #341514; text-decoration: none; font-weight: 500;">${validatedData.phone || "Non renseigné"}</a>
              </div>
            </div>
            <div style="display: table-row;">
              <div style="display: table-cell; padding: 12px 16px 12px 0; font-weight: 500; color: #C58C64;">Sujet</div>
              <div style="display: table-cell; padding: 12px 0; color: #341514; font-weight: 500;">${validatedData.subject}</div>
            </div>
          </div>
        </div>
        
        <div style="background-color: #EFE2D6; padding: 25px; border-radius: 12px; box-shadow: 0 2px 4px rgba(52, 21, 20, 0.04); margin-bottom: 30px;">
          <h3 style="color: #341514; font-size: 18px; margin-top: 0; margin-bottom: 16px; font-weight: 600;">Message</h3>
          <p style="color: #341514; margin: 0; line-height: 1.7; white-space: pre-wrap; font-size: 15px;">${validatedData.message}</p>
        </div>
      </div>
      
      <!-- Pied de page -->
      <div style="background-color: #DFC3A8; padding: 25px; text-align: center; color: #341514;">
        <p style="margin: 0; font-size: 14px;">
          Message reçu le ${new Date().toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" })} à ${new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
        </p>
      </div>
    </div>
  </div>
`,
    });

    if (error) {
      console.error("Erreur Resend détaillée:", JSON.stringify(error));
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email", details: error },
        { status: 500 },
      );
    }

    if (!data?.id) {
      return NextResponse.json(
        { error: "L'email n'a pas pu être envoyé" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Email envoyé avec succès",
      id: data.id,
    });
  } catch (error) {
    console.error("Erreur:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { error: "Erreur lors du traitement de la demande" },
      { status: 500 },
    );
  }
}
