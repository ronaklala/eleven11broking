export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>

          <p className="text-slate-300 mb-8 leading-7">
            Connect with our advisory team for insurance consultation, risk
            planning, and financial protection solutions.
          </p>

          <div className="space-y-4 text-slate-300">
            <p>Email: info@eleven11capitalbroking.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>India</p>
          </div>
        </div>

        <form className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 rounded-xl bg-slate-950 border border-slate-700"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-xl bg-slate-950 border border-slate-700"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 rounded-xl bg-slate-950 border border-slate-700"
          />

          <button className="bg-gold text-black px-8 py-4 rounded-xl font-semibold w-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
