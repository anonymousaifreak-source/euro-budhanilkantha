import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Eye, Target, Lightbulb,
  TreePine, BookOpen, Palette, Monitor, GraduationCap,
  Quote,
} from "lucide-react";
import Layout from "@/components/Layout";
import PlayfulCard from "@/components/PlayfulCard";
import SectionHeading from "@/components/SectionHeading";
import aboutImg from "@/assets/about-hero.jpg";

const values = [
  { title: "Our Vision", icon: Eye, desc: "To be the most trusted early learning center in Nepal, raising confident and curious young minds.", color: "yellow" as const },
  { title: "Our Mission", icon: Target, desc: "To provide a nurturing Montessori environment where children learn through exploration and play.", color: "red" as const },
  { title: "Our Philosophy", icon: Lightbulb, desc: "Every child is unique. We follow the child, not the curriculum — letting each learner blossom at their own pace.", color: "green" as const },
];

const facilities = [
  { title: "Playground", icon: TreePine, desc: "Safe outdoor play with climbing frames, slides, and sandbox." },
  { title: "Library", icon: BookOpen, desc: "Over 500 books curated for early readers and storytelling sessions." },
  { title: "Art Room", icon: Palette, desc: "Dedicated creative space with painting, clay, and craft supplies." },
  { title: "Computer Lab", icon: Monitor, desc: "Age-appropriate digital literacy with guided learning software." },
  { title: "Classrooms", icon: GraduationCap, desc: "Bright, airy rooms with Montessori materials and child-sized furniture." },
];

const testimonials = [
  { name: "Sita Devi", text: "My daughter loves going to school every day. The teachers are incredibly warm and skilled.", relation: "Parent of Nursery student" },
  { name: "Raj Shrestha", text: "Euro Kids has transformed my son's confidence. He comes home excited about what he learned.", relation: "Parent of Junior KG student" },
  { name: "Meera Tamang", text: "The Montessori approach here is authentic. I see real growth in my child's independence.", relation: "Parent of Senior KG student" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 font-bold tracking-wider uppercase rounded-full bg-brand-green/20 text-brand-ink text-xs">
                About Us
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] text-brand-ink">
                Nurturing <span className="text-brand-green">Little</span> Minds Since 2015
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-[50ch]">
                Euro Kids Hattiban is a vibrant Montessori preschool dedicated to helping children
                aged 2–6 discover the joy of learning in a safe, loving environment.
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img src={aboutImg} alt="Euro Kids Montessori school building" className="w-full rounded-4xl shadow-2xl -rotate-1" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((v, i) => (
              <PlayfulCard key={i} color={v.color} delay={i * 0.1} className="text-center flex flex-col items-center">
                <v.icon className="w-12 h-12 mb-4 text-brand-ink" />
                <h3 className="text-xl font-display font-bold text-brand-ink">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{v.desc}</p>
              </PlayfulCard>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <SectionHeading title="The Montessori Way" subtitle="Our curriculum is designed around the natural learning stages of early childhood." />
          <div className="grid gap-8 lg:grid-cols-2">
            <PlayfulCard color="yellow" className="bg-card">
              <h3 className="text-2xl font-display font-bold text-brand-ink mb-4">Child-Led Learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                In a Montessori classroom, children choose their own activities within a structured environment.
                This builds independence, decision-making skills, and intrinsic motivation. Our trained guides
                observe each child and introduce new materials at the right developmental moment.
              </p>
            </PlayfulCard>
            <PlayfulCard color="green" className="bg-card">
              <h3 className="text-2xl font-display font-bold text-brand-ink mb-4">Holistic Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                We focus on five key areas: Practical Life, Sensorial, Language, Mathematics, and Culture.
                Through hands-on materials and real-world experiences, children develop cognitive, social,
                emotional, and physical skills in an integrated, joyful way.
              </p>
            </PlayfulCard>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-card">
        <div className="container mx-auto max-w-7xl px-6">
          <SectionHeading title="Our Facilities" subtitle="Purpose-built spaces designed for exploration and growth." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f, i) => (
              <PlayfulCard key={i} color={["yellow", "red", "green", "blue", "yellow"][i] as any} delay={i * 0.08}>
                <div className="flex items-start gap-4">
                  <f.icon className="w-8 h-8 text-brand-ink flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-display font-bold text-brand-ink">{f.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              </PlayfulCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <SectionHeading title="What Parents Say" subtitle="Real stories from families in our community." />
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <PlayfulCard key={i} color={["yellow", "red", "green"][i] as any} delay={i * 0.1} className="bg-card">
                <Quote className="w-8 h-8 text-primary/50 mb-4" />
                <p className="text-muted-foreground italic leading-relaxed mb-6">"{t.text}"</p>
                <p className="font-display font-bold text-brand-ink">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.relation}</p>
              </PlayfulCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-green/5">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mb-6">Come See Us in Person</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Schedule a campus tour and experience the Euro Kids difference firsthand.
            </p>
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 text-lg font-bold rounded-full bg-brand-green text-accent-foreground shadow-lg shadow-brand-green/20">
                Schedule a Visit
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
