import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Eye, ClipboardList, CheckCircle, FileText } from "lucide-react";
import Layout from "@/components/Layout";
import PlayfulCard from "@/components/PlayfulCard";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  { step: 1, title: "Submit Inquiry", desc: "Fill out our simple online inquiry form or visit us in person to express your interest.", icon: Search, color: "yellow" as const },
  { step: 2, title: "Visit Our Branch", desc: "Schedule a campus tour to meet our teachers, see our facilities, and learn about our programs.", icon: Eye, color: "red" as const },
  { step: 3, title: "Complete Application", desc: "Submit the application form along with required documents. Our team will guide you through every step.", icon: ClipboardList, color: "green" as const },
  { step: 4, title: "Admission Confirmed!", desc: "Receive your confirmation letter and welcome kit. Your child's learning adventure begins!", icon: CheckCircle, color: "blue" as const },
];

const documents = [
  "Birth certificate (photocopy)",
  "Passport-size photos (4 copies)",
  "Parent/Guardian ID (photocopy)",
  "Immunization records",
  "Previous school records (if applicable)",
  "Transfer certificate (if applicable)",
];

const Admissions = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 mb-6 font-bold tracking-wider uppercase rounded-full bg-brand-blue/20 text-brand-ink text-xs">
              Admissions Open
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-brand-ink leading-[1.1]">
              Start Your Child's <span className="text-brand-blue">Journey</span> Today
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our enrollment process is simple and friendly. We're here to help you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-card">
        <div className="container mx-auto max-w-7xl px-6">
          <SectionHeading title="How to Enroll" subtitle="Four simple steps to join our learning community." />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <PlayfulCard key={i} color={s.color} delay={i * 0.12} className="relative text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4 text-2xl font-display font-bold text-primary-foreground">
                  {s.step}
                </div>
                <s.icon className="w-10 h-10 mb-3 text-brand-ink" />
                <h3 className="text-lg font-display font-bold text-brand-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </PlayfulCard>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <SectionHeading title="Required Documents" subtitle="Please have the following ready when you apply." align="left" />
              <ul className="space-y-4">
                {documents.map((doc, i) => (
                  <motion.li
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <FileText className="w-5 h-5 text-brand-green flex-shrink-0" />
                    <span className="text-muted-foreground">{doc}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <PlayfulCard color="yellow" className="bg-card">
              <h3 className="text-2xl font-display font-bold text-brand-ink mb-4">Important Dates</h3>
              <div className="space-y-4 text-sm">
                {[
                  { label: "Inquiry Period", date: "January – March" },
                  { label: "Campus Tours", date: "February – April" },
                  { label: "Application Deadline", date: "April 30" },
                  { label: "Classes Begin", date: "Mid-April" },
                ].map((d, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-border pb-3 last:border-0">
                    <span className="font-semibold text-brand-ink">{d.label}</span>
                    <span className="text-muted-foreground">{d.date}</span>
                  </div>
                ))}
              </div>
            </PlayfulCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-blue/5">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mb-6">
              Have Questions About Admissions?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Our admissions team is happy to help. Reach out anytime.
            </p>
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 text-lg font-bold rounded-full bg-brand-blue text-secondary-foreground shadow-lg shadow-brand-blue/20">
                Let's Talk
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Admissions;
