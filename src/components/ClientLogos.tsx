export default function ClientLogos() {
  const clients = [
    {
      name: "UEGCL",
      subtitle: "Uganda Electricity Generation",
      style: "serif" as const,
    },
    {
      name: "UNICAF",
      subtitle: "University",
      style: "sans" as const,
    },
    {
      name: "KCB",
      subtitle: "Bank Group",
      style: "sans" as const,
    },
    {
      name: "HIMA",
      subtitle: "by LafargeHolcim",
      style: "sans" as const,
    },
    {
      name: "Bloomberg",
      subtitle: "Philanthropies",
      style: "serif" as const,
    },
    {
      name: "MAAD",
      subtitle: "McCann",
      style: "sans" as const,
    },
  ];

  return (
    <section className="py-16 bg-cream-dark" aria-label="Trusted by leading organizations">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-muted text-sm font-body uppercase tracking-[0.2em] mb-10">
          Trusted by Leading Organizations
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="h-20 flex items-center justify-center rounded-lg bg-cream opacity-40 hover:opacity-100 transition-opacity duration-500 cursor-default"
            >
              <svg
                viewBox="0 0 160 60"
                className="w-full h-full px-3"
                role="img"
                aria-label={`${client.name} ${client.subtitle}`}
              >
                <text
                  x="80"
                  y={client.subtitle ? "24" : "34"}
                  textAnchor="middle"
                  className={
                    client.style === "serif"
                      ? "font-heading"
                      : "font-body"
                  }
                  style={{
                    fontFamily:
                      client.style === "serif"
                        ? "'Playfair Display', serif"
                        : "'Inter', sans-serif",
                    fontWeight: client.style === "serif" ? 700 : 800,
                    fontSize:
                      client.name.length > 8
                        ? "14px"
                        : client.name.length > 5
                          ? "16px"
                          : "20px",
                    letterSpacing:
                      client.style === "sans" ? "0.12em" : "0.04em",
                    fill: "#1A1A1A",
                  }}
                >
                  {client.name}
                </text>
                {client.subtitle && (
                  <text
                    x="80"
                    y="42"
                    textAnchor="middle"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: "8px",
                      letterSpacing: "0.08em",
                      fill: "#5F6570",
                    }}
                  >
                    {client.subtitle}
                  </text>
                )}
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
