export default function Home() {
  const services = [
    "Corporate Insurance",
    "Health Insurance",
    "Life Insurance",
    "Risk Advisory",
    "Employee Benefits",
    "Claims Assistance",
  ];

  return (
    <div>
      <section className="min-h-[90vh] flex items-center justify-center text-center px-6 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="max-w-4xl">
          <h1 className="text-6xl font-bold leading-tight mb-6">
            Protecting Wealth.
            <span className="text-gold"> Empowering Growth.</span>
          </h1>

          <p className="text-slate-300 text-lg mb-8">
            Premium insurance broking and risk management solutions designed for
            modern businesses and individuals in India.
          </p>

          <button className="bg-gold text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
            Explore Services
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>

        <p className="text-slate-300 text-lg leading-8 max-w-4xl">
          Eleven 11 Capital Insurance Broking is a modern financial protection
          and insurance advisory firm dedicated to helping individuals,
          startups, SMEs, and enterprises navigate risk with confidence.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-4xl font-bold mb-10">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-gold transition"
            >
              <h3 className="text-2xl font-semibold mb-3">{service}</h3>

              <p className="text-slate-400">
                Tailored insurance solutions built for long-term protection and
                growth.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
