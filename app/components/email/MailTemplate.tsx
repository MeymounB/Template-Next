export const MailTemplate = ({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.6,
        color: "#000000",
        backgroundColor: "#FFF9F9",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            marginBottom: "24px",
            color: "#EF4444",
          }}
        >
          Nouveau message de contact
        </h2>
        <div
          style={{
            backgroundColor: "#FFFFFF",
            padding: "24px",
            borderRadius: "24px",
            border: "1px solid #EF4444",
            boxShadow: "0 4px 6px -1px rgba(239, 68, 68, 0.1)",
          }}
        >
          <div style={{ marginBottom: "16px" }}>
            <p style={{ fontSize: "16px", marginBottom: "8px" }}>
              <strong style={{ color: "#000000" }}>Nom:</strong>{" "}
              <span style={{ color: "#000000" }}>{name}</span>
            </p>
            <p style={{ fontSize: "16px", marginBottom: "8px" }}>
              <strong style={{ color: "#000000" }}>Email:</strong>{" "}
              <span style={{ color: "#000000" }}>{email}</span>
            </p>
            <p style={{ fontSize: "16px", marginBottom: "8px" }}>
              <strong style={{ color: "#000000" }}>Téléphone:</strong>{" "}
              <span style={{ color: "#000000" }}>
                {phone || "Non renseigné"}
              </span>
            </p>
          </div>
          <div
            style={{
              marginTop: "24px",
              paddingTop: "24px",
              borderTop: "1px solid #EF4444",
            }}
          >
            <p style={{ fontSize: "16px", marginBottom: "8px" }}>
              <strong style={{ color: "#000000" }}>Message:</strong>
            </p>
            <p
              style={{
                color: "#000000",
                backgroundColor: "#FFF9F9",
                padding: "16px",
                borderRadius: "12px",
                whiteSpace: "pre-wrap",
              }}
            >
              {message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
