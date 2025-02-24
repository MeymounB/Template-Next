export interface LegalArticle {
  title: string;
  content: {
    mainText?: string;
    bulletPoints?: string[];
    additionalText?: string[];
    contactInfo?: string;
  }[];
}

export const legalData: LegalArticle[] = [
  {
    title: "Mentions Légales",
    content: [
      {
        mainText:
          "Le présent site est édité et géré par Next Generation pour le compte d'Espace Cadet :",
      },
      {
        bulletPoints: [
          "Propriétaire et éditeur du site : Next Generation",
          "Contact éditeur : contact@next-generation.dev",
          "Entreprise représentée : Espace Cadet",
          "Statut juridique : Entreprise enregistrée sous le numéro SIREN 823760715, SIRET 82376071500016",
          "Adresse : 5 rue Marguerite de Rochechouart, 75009 Paris",
          "Contact : clementine@espacecadet.com",
          "Téléphone : 06 10 78 80 13",
          "Responsable de publication : Next Generation",
        ],
      },
      {
        additionalText: [
          "Espace Cadet est un espace de coworking situé au cœur de Paris, dédié aux professionnels recherchant un environnement de travail flexible et inspirant.",
          "Le site espacecadet.com est une vitrine des services proposés par Espace Cadet. Aucune transaction financière n'est effectuée sur le site.",
          "Pour toute problématique technique ou erreur constatée sur le site, contactez Next Generation : contact@next-generation.dev",
          "Pour toute information concernant les services d'Espace Cadet : clementine@espacecadet.com",
        ],
      },
    ],
  },
  {
    title: "Protection des Données (RGPD)",
    content: [
      {
        mainText:
          "Le site dispose d'un formulaire de contact qui collecte les informations suivantes : nom, email, téléphone (optionnel) et message. Ces données sont collectées et traitées par Next Generation uniquement pour :",
      },
      {
        bulletPoints: [
          "Transmettre vos demandes de contact à Espace Cadet via email",
          "Aucune donnée n'est stockée en base de données",
          "Les informations sont utilisées uniquement pour l'envoi du message et sont ensuite supprimées",
          "Aucun traitement ultérieur n'est effectué sur ces données",
        ],
      },
      {
        additionalText: [
          "Le formulaire de contact utilise un système de protection contre les spams (honeypot) qui n'affecte pas votre vie privée.",
          "Conformément au RGPD et à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez des droits suivants :",
          "Droit d'accès, de rectification et de suppression de vos données",
          "Droit d'opposition ou de limitation au traitement",
          "Droit à la portabilité de vos données",
        ],
      },
      {
        contactInfo: "Pour exercer vos droits : contact@next-generation.dev",
      },
      {
        mainText:
          "Cookies : Le site peut utiliser des cookies pour améliorer votre expérience. Vous pouvez les désactiver via les paramètres de votre navigateur.",
      },
    ],
  },
  {
    title: "Propriété Intellectuelle",
    content: [
      {
        mainText:
          "La structure du site, les textes, les designs et tout autre contenu sont la propriété exclusive de Next Generation, sauf mention contraire.",
      },
      {
        bulletPoints: [
          "Toute reproduction (totale ou partielle) est interdite sans autorisation écrite de Next Generation.",
          "Les marques et logos figurant sur ce site sont protégés et leur réutilisation non autorisée est passible de poursuites.",
        ],
      },
    ],
  },
  {
    title: "Conditions Générales d'Utilisation (CGU)",
    content: [
      {
        mainText: "En naviguant sur le site d'Espace Cadet, vous acceptez de :",
      },
      {
        bulletPoints: [
          "Respecter les lois en vigueur et les droits de propriété intellectuelle",
          "Utiliser le site uniquement pour des finalités légitimes (consultation, informations)",
          "Ne pas perturber le bon fonctionnement du site (virus, piratage, etc.)",
        ],
      },
      {
        additionalText: [
          "Responsabilités : Next Generation s'efforce d'assurer l'exactitude des informations techniques affichées. Toutefois, nous ne pouvons être tenus responsables en cas d'erreur ou de dysfonctionnement.",
        ],
      },
    ],
  },
  {
    title: "Acceptation",
    content: [
      {
        mainText:
          "En utilisant le site d'Espace Cadet, vous déclarez avoir lu et accepté l'ensemble de ces mentions légales et CGU.",
      },
    ],
  },
];
