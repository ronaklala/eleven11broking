export default function Services() {
  const services = [
    {
      title: "Corporate Insurance",
      desc: "Comprehensive risk coverage for businesses and enterprises.",
    },
    {
      title: "Health Insurance",
      desc: "Affordable and premium healthcare protection plans.",
    },
    {
      title: "Life Insurance",
      desc: "Financial security solutions for families and individuals.",
    },
    {
      title: "Risk Advisory",
      desc: "Strategic risk analysis and mitigation planning.",
    },
    {
      title: "Claims Assistance",
      desc: "Dedicated support for smooth and efficient claim settlements.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-12 text-center">Our Services</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-10"
          >
            <h2 className="text-3xl font-semibold mb-4 text-gold">
              {service.title}
            </h2>

            <p className="text-slate-300 leading-7">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
