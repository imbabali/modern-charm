export default function ClientLogos() {
  const clients = [
    { name: "UEGCL", subtitle: "Uganda Electricity Generation" },
    { name: "UNICAF", subtitle: "University" },
    { name: "KCB", subtitle: "Bank Group" },
    { name: "HIMA", subtitle: "by LafargeHolcim" },
    { name: "BLOOMBERG", subtitle: "Philanthropies" },
    { name: "MAAD", subtitle: "McCann" },
  ];

  return (
    <section
      className="py-20 bg-near-black text-cream overflow-hidden"
      aria-label="Trusted by leading organizations"
    >
      <div className="container-custom">
        <div className="flex items-center gap-6">
          <span className="label-mono text-accent/80 whitespace-nowrap">
            Trusted by / 01
          </span>
          <div className="hairline bg-cream flex-1" />
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center justify-center text-center opacity-60 hover:opacity-100 transition-opacity duration-500"
            >
              <span
                className="font-heading text-cream"
                style={{
                  fontSize: "clamp(1.125rem, 1.6vw, 1.5rem)",
                  letterSpacing: "0.02em",
                  lineHeight: 1,
                }}
              >
                {client.name}
              </span>
              <span className="mt-2 label-mono-sm text-cream/50">
                {client.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
