import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BriefcaseBusiness,
  Landmark,
  Phone,
  TrendingUp,
  Building2,
  BadgeCheck,
  Users,
  ArrowRight,
  Globe2,
} from "lucide-react";

const services = [
  {
    title: "Insurance Broking",
    icon: <ShieldCheck size={34} />,
    desc: "Corporate and retail insurance advisory with personalized policy solutions for health, life, motor, property, marine, and liability insurance.",
  },
  {
    title: "Risk Management",
    icon: <BriefcaseBusiness size={34} />,
    desc: "Advanced financial and operational risk planning for SMEs, enterprises, and high-growth businesses across India.",
  },
  {
    title: "Capital Advisory",
    icon: <Landmark size={34} />,
    desc: "Investment structuring, strategic wealth protection, and long-term financial planning guidance.",
  },
  {
    title: "Wealth Management",
    icon: <TrendingUp size={34} />,
    desc: "Comprehensive portfolio advisory, retirement planning, and wealth creation strategies tailored for modern investors.",
  },
  {
    title: "Corporate Solutions",
    icon: <Building2 size={34} />,
    desc: "Customized employee benefit programs, group insurance, and business continuity planning for organizations.",
  },
  {
    title: "Claims Assistance",
    icon: <BadgeCheck size={34} />,
    desc: "Dedicated claims support team ensuring smooth coordination, faster processing, and transparent assistance.",
  },
];

const stats = [
  { number: "500+", label: "Clients Across India" },
  { number: "₹100Cr+", label: "Assets & Risk Covered" },
  { number: "25+", label: "Industry Partnerships" },
  { number: "98%", label: "Client Satisfaction" },
];

const whyChoose = [
  "Trusted advisory-driven approach",
  "Personalized financial strategies",
  "Strong network with leading insurers",
  "Dedicated claims support",
  "Transparent and ethical practices",
  "Modern digital-first client experience",
];

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div>
          <h1 className="text-2xl font-black gradient-text">
            Eleven 11 Capital
          </h1>
          <p className="text-xs text-slate-500 tracking-widest uppercase">
            Insurance & Capital Broking
          </p>
        </div>

        <div className="flex gap-8 text-slate-300 font-medium">
          <Link className="hover:text-cyan-400 transition" to="/">
            Home
          </Link>
          <Link className="hover:text-cyan-400 transition" to="/services">
            Services
          </Link>
          <Link className="hover:text-cyan-400 transition" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-6">
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 blur-3xl rounded-full bottom-10 right-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl text-center relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300">
          <Globe2 size={16} />
          Trusted Capital & Insurance Broking Solutions
        </div>

        <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6">
          Building Financial <span className="gradient-text">Confidence</span>{" "}
          For Modern India
        </h1>

        <p className="text-slate-300 text-xl leading-relaxed max-w-4xl mx-auto mb-10">
          Eleven 11 Capital Broking delivers strategic insurance, wealth
          protection, investment planning, and risk management solutions for
          individuals, startups, SMEs, and enterprises across India.
        </p>

        <div className="flex justify-center gap-5 flex-wrap">
          <Link
            to="/services"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 font-semibold shadow-2xl shadow-blue-500/30 hover:scale-105 transition flex items-center gap-2"
          >
            Explore Services <ArrowRight size={18} />
          </Link>

          <Link
            to="/contact"
            className="px-8 py-4 rounded-2xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800 transition"
          >
            Contact Us
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg"
            >
              <h3 className="text-3xl font-black gradient-text mb-2">
                {item.number}
              </h3>
              <p className="text-slate-400 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-24 bg-slate-950 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div>
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-300 mb-5">
            About Our Company
          </div>

          <h2 className="text-5xl font-black mb-8">
            About <span className="gradient-text">Eleven 11</span>
          </h2>

          <p className="text-slate-400 leading-8 text-lg mb-6">
            Eleven 11 Capital Broking is a next-generation insurance and
            financial advisory firm focused on helping clients secure their
            future through intelligent risk planning and wealth protection
            strategies.
          </p>

          <p className="text-slate-400 leading-8 text-lg mb-6">
            With a client-first approach and strong partnerships with leading
            insurance providers and financial institutions, we deliver
            customized solutions designed for India’s evolving economic
            landscape.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          {services.slice(0, 3).map((service, index) => (
            <motion.div
              whileHover={{ y: -6 }}
              key={index}
              className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-blue-950 border border-blue-900 shadow-2xl"
            >
              <div className="text-cyan-400 mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-7">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 mb-5">
            What We Offer
          </div>

          <h2 className="text-5xl font-black mb-5">
            Comprehensive Financial Services
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-8">
            We provide integrated insurance and financial solutions designed to
            help businesses and individuals build stability, growth, and
            long-term financial confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={index}
              className="p-8 rounded-3xl bg-gradient-to-br from-blue-950 to-slate-900 border border-blue-800 shadow-xl"
            >
              <div className="text-cyan-400 mb-5">{service.icon}</div>

              <h2 className="text-3xl font-bold mb-4">{service.title}</h2>

              <p className="text-slate-400 leading-7 mb-6">{service.desc}</p>

              <button className="flex items-center gap-2 text-cyan-400 font-semibold hover:gap-3 transition-all">
                Learn More <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="py-24 bg-slate-950 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl font-black mb-8">
            Why Businesses Trust{" "}
            <span className="gradient-text">Eleven 11</span>
          </h2>

          <p className="text-slate-400 text-lg leading-8 mb-8">
            We combine deep market understanding, strategic financial planning,
            and strong insurer relationships to deliver value-driven solutions
            that protect businesses and empower growth.
          </p>

          <div className="space-y-5">
            <div className="flex gap-4">
              <Users className="text-cyan-400 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-1">
                  Client-Centric Advisory
                </h3>
                <p className="text-slate-400">
                  Every solution is customized according to your goals, risk
                  profile, and industry requirements.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <ShieldCheck className="text-cyan-400 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-1">Trusted Protection</h3>
                <p className="text-slate-400">
                  Strong partnerships with reputed insurers ensure reliable and
                  comprehensive coverage options.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <TrendingUp className="text-cyan-400 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-1">
                  Long-Term Growth Focus
                </h3>
                <p className="text-slate-400">
                  We help clients achieve sustainable financial growth while
                  minimizing uncertainty and risk exposure.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

          <div className="relative p-10 rounded-[32px] border border-blue-800 bg-gradient-to-br from-blue-950 to-slate-900 shadow-2xl">
            <h3 className="text-3xl font-black mb-8">Our Mission & Vision</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-cyan-400 text-xl font-bold mb-2">
                  Mission
                </h4>

                <p className="text-slate-400 leading-7">
                  To simplify financial security and insurance planning through
                  trusted advisory, innovation, and transparency.
                </p>
              </div>

              <div>
                <h4 className="text-cyan-400 text-xl font-bold mb-2">Vision</h4>

                <p className="text-slate-400 leading-7">
                  To become one of India’s most trusted modern capital and
                  insurance broking firms by empowering clients with confidence
                  and financial clarity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesPreview />
      <WhyUs />
      <Footer />
    </div>
  );
}

function Services() {
  return (
    <section className="min-h-screen bg-slate-950 pt-36 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black mb-5 gradient-text">
            Our Services
          </h1>

          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-8">
            End-to-end financial, insurance, and risk advisory services tailored
            for modern businesses, entrepreneurs, and families across India.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={index}
              className="p-8 rounded-3xl bg-gradient-to-br from-blue-950 to-slate-900 border border-blue-800 shadow-xl"
            >
              <div className="text-cyan-400 mb-5">{service.icon}</div>

              <h2 className="text-3xl font-bold mb-4">{service.title}</h2>

              <p className="text-slate-400 leading-7 mb-6">{service.desc}</p>

              <button className="text-cyan-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Explore Service <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 pt-36 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">
        <div>
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 mb-5">
            Get In Touch
          </div>

          <h1 className="text-6xl font-black mb-6 gradient-text">Contact Us</h1>

          <p className="text-slate-300 text-lg leading-8 mb-10">
            Connect with Eleven 11 Capital Broking for personalized insurance,
            wealth management, and strategic financial solutions tailored to
            your needs.
          </p>

          <div className="space-y-6 text-slate-300">
            <div className="flex items-center gap-4 text-lg">
              <Phone className="text-cyan-400" />
              +91 98765 43210
            </div>

            <div className="text-lg">info@eleven11capitalbroking.com</div>

            <div className="text-lg">Mumbai, Maharashtra, India</div>
          </div>

          <div className="mt-12 p-8 rounded-3xl border border-blue-900 bg-slate-900/70">
            <h3 className="text-2xl font-bold mb-4">Business Hours</h3>

            <div className="space-y-3 text-slate-400">
              <p>Monday - Friday : 9:30 AM - 6:30 PM</p>
              <p>Saturday : 10:00 AM - 2:00 PM</p>
              <p>Sunday : Closed</p>
            </div>
          </div>
        </div>

        <form className="bg-slate-900/80 border border-blue-900 rounded-3xl p-8 space-y-6 backdrop-blur-lg shadow-2xl">
          <div>
            <label className="block mb-2 text-slate-300">Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-4 rounded-xl bg-slate-950 border border-slate-700 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-slate-300">Email Address</label>

            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-4 rounded-xl bg-slate-950 border border-slate-700 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-slate-300">Phone Number</label>

            <input
              type="text"
              placeholder="Enter your phone number"
              className="w-full p-4 rounded-xl bg-slate-950 border border-slate-700 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-slate-300">Your Message</label>

            <textarea
              rows="5"
              placeholder="Tell us about your requirement..."
              className="w-full p-4 rounded-xl bg-slate-950 border border-slate-700 outline-none focus:border-cyan-400"
            ></textarea>
          </div>

          <button className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 font-bold text-lg hover:scale-[1.02] transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
        <div>
          <h2 className="text-3xl font-black gradient-text mb-4">
            Eleven 11 Capital
          </h2>

          <p className="text-slate-500 leading-7">
            Modern insurance and capital broking solutions empowering businesses
            and individuals across India.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-5">Quick Links</h3>

          <div className="space-y-3 text-slate-500">
            <p>Home</p>
            <p>Services</p>
            <p>Contact</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-5">Services</h3>

          <div className="space-y-3 text-slate-500">
            <p>Insurance Broking</p>
            <p>Risk Management</p>
            <p>Capital Advisory</p>
            <p>Wealth Management</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-5">Contact</h3>

          <div className="space-y-3 text-slate-500">
            <p>Mumbai, Maharashtra</p>
            <p>+91 98765 43210</p>
            <p>info@eleven11capitalbroking.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-6 text-center text-slate-500">
        © 2026 Eleven 11 Capital Broking. All Rights Reserved.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
