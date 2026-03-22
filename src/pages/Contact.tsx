import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Layout from "@/components/Layout";
import PlayfulCard from "@/components/PlayfulCard";
import SectionHeading from "@/components/SectionHeading";
import { toast } from "sonner";

const contactInfo = [
  { icon: MapPin, title: "Address", detail: "hattiban, Lalitpur, Nepal", color: "yellow" as const },
  { icon: Phone, title: "Phone", detail: "+977-1-5000000", color: "red" as const },
  { icon: Mail, title: "Email", detail: "info@eurokids-hattiban.edu.np", color: "green" as const },
  { icon: Clock, title: "Hours", detail: "Sun–Fri: 8:00 AM – 4:00 PM", color: "blue" as const },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <span className="inline-block px-4 py-1.5 mb-6 font-bold tracking-wider uppercase rounded-full bg-brand-red/20 text-brand-ink text-xs">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-brand-ink leading-[1.1]">
              We'd <span className="text-brand-red">Love</span> to Hear From You
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a question, want to schedule a visit, or ready to enroll? Reach out anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-12">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((c, i) => (
              <PlayfulCard key={i} color={c.color} delay={i * 0.1} className="text-center flex flex-col items-center">
                <c.icon className="w-8 h-8 mb-3 text-brand-ink" />
                <h3 className="font-display font-bold text-brand-ink">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{c.detail}</p>
              </PlayfulCard>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20 bg-card">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <SectionHeading title="Send a Message" align="left" />
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-semibold text-brand-ink block mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-lg bg-background border border-input text-foreground focus:outline-none focus:ring-4 focus:ring-primary/30 transition"
                    placeholder="e.g. Sita Sharma"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-brand-ink block mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-lg bg-background border border-input text-foreground focus:outline-none focus:ring-4 focus:ring-primary/30 transition"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-brand-ink block mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-lg bg-background border border-input text-foreground focus:outline-none focus:ring-4 focus:ring-primary/30 transition resize-none"
                    placeholder="I'd like to know about..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-4 text-lg font-bold rounded-full bg-brand-red text-secondary-foreground shadow-lg shadow-brand-red/20"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <SectionHeading title="Find Us" align="left" />
              <div className="flex-1 rounded-4xl overflow-hidden shadow-xl min-h-[300px]">
                <iframe
                  title="Euro Kids hattiban Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.123456789!2d85.3112!3d27.6778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2shattiban%2C%20Lalitpur!5e0!3m2!1sen!2snp!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 400 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
