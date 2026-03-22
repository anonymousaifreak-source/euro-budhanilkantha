import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sparkles, Heart, ShieldCheck, Smile,
  TreePine, BookOpen, Palette, Monitor,
} from "lucide-react";
import Layout from "@/components/Layout";
import PlayfulCard from "@/components/PlayfulCard";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-kids.jpg";
import branchHeadImg from "@/assets/branch-head.jpg";

const highlights = [
  { title: "Fun Learning", icon: Sparkles, color: "yellow" as const, desc: "Interactive, hands-on activities that spark curiosity and joy." },
  { title: "Creative Play", icon: Heart, color: "red" as const, desc: "Art, music, and imaginative play to nurture creativity." },
  { title: "Safe Environment", icon: ShieldCheck, color: "green" as const, desc: "CCTV-monitored, child-proofed spaces with trained staff." },
  { title: "Happy Kids", icon: Smile, color: "blue" as const, desc: "Confident, socially skilled, and emotionally balanced children." },
];

const programs = [
  { age: "2–3 Years", name: "Playgroup", desc: "Sensory exploration, music, and social interaction through guided play.", color: "yellow" as const },
  { age: "3–4 Years", name: "Nursery", desc: "Language development, motor skills, and early literacy foundations.", color: "red" as const },
  { age: "4–5 Years", name: "Junior KG", desc: "Math concepts, science exploration, and creative arts.", color: "green" as const },
  { age: "5–6 Years", name: "Senior KG", desc: "Reading fluency, problem-solving, and school readiness.", color: "blue" as const },
];

const facilities = [
  { title: "Playground", icon: TreePine, desc: "Safe outdoor space with slides, swings, and sandpit." },
  { title: "Library", icon: BookOpen, desc: "Curated collection of age-appropriate books and stories." },
  { title: "Art Room", icon: Palette, desc: "A vibrant space for painting, crafts, and creative expression." },
  { title: "Computer Lab", icon: Monitor, desc: "Age-appropriate digital learning with guided sessions." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="z-10"
            >
              <span className="inline-block px-4 py-1.5 mb-6 font-bold tracking-wider uppercase rounded-full bg-primary text-primary-foreground text-xs">
                Budhanilkantha Branch
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-[1.1] text-brand-ink">
                Where{" "}
                <span className="text-brand-red">Curiosity</span> Meets
                Discovery.
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-[45ch]">
                Fun & creative learning for ages 2–6. Empowering children through the world-renowned Montessori method.
              </p>
              <div className="flex flex-wrap gap-4 mt-10">
                <Link to="/admissions">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 text-lg font-bold rounded-full bg-brand-red text-secondary-foreground shadow-lg shadow-brand-red/20"
                  >
                    Enroll Now
                  </motion.button>
                </Link>
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 text-lg font-bold rounded-full bg-card border-2 border-primary text-brand-ink hover:bg-primary/5"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary rounded-full blur-3xl opacity-20 animate-pulse" />
              <img
                src={heroImg}
                alt="Children learning together in a bright Montessori classroom"
                className="relative z-10 w-full h-auto rounded-4xl shadow-2xl rotate-2"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-card">
        <div className="container mx-auto max-w-7xl px-6">
          <SectionHeading
            title="Why Euro Kids?"
            subtitle="We create a nurturing environment where every child feels safe, valued, and inspired."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, i) => (
              <PlayfulCard key={i} color={item.color} delay={i * 0.1} className="text-center flex flex-col items-center">
                <item.icon className="w-12 h-12 mb-4 text-brand-ink" />
                <h3 className="text-xl font-display font-bold text-brand-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </PlayfulCard>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <SectionHeading
            title="Our Programs"
            subtitle="Tailored learning experiences for every stage of early childhood development."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((prog, i) => (
              <PlayfulCard key={i} color={prog.color} delay={i * 0.1} className="border-b-4 border-brand-yellow bg-card">
                <span className="text-sm font-bold text-brand-red">{prog.age}</span>
                <h3 className="text-2xl font-display font-bold text-brand-ink mt-2 mb-3">
                  {prog.name}
                </h3>
                <p className="text-sm text-muted-foreground">{prog.desc}</p>
              </PlayfulCard>
            ))}
          </div>
        </div>
      </section>

      {/* Branch Head */}
      <section className="py-20 bg-card">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={branchHeadImg}
                alt="Branch Head of Euro Kids Budhanilkantha"
                className="w-64 h-64 mx-auto lg:mx-0 rounded-4xl object-cover shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-sm font-bold text-brand-red uppercase tracking-wider">
                Message from Our Branch Head
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mt-3 mb-6">
                "Every Child is a Unique Learner"
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Welcome to Euro Kids Budhanilkantha! We believe that the early years of a child's life
                are the most precious. Our Montessori-inspired approach ensures that your child
                learns through exploration, creativity, and play.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We don't just teach; we provide the environment for your child to teach themselves.
                I look forward to welcoming your family to our learning community.
              </p>
              <p className="mt-6 font-display font-bold text-brand-ink">— Ms. Anita Sharma</p>
              <p className="text-sm text-muted-foreground">Branch Head, Budhanilkantha</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <SectionHeading
            title="Our Facilities"
            subtitle="Designed to inspire wonder, creativity, and growth in every child."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((f, i) => (
              <PlayfulCard key={i} color={i % 2 === 0 ? "green" : "blue"} delay={i * 0.1} className="text-center flex flex-col items-center">
                <f.icon className="w-10 h-10 mb-4 text-brand-ink" />
                <h3 className="text-lg font-display font-bold text-brand-ink">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </PlayfulCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-red/5">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mb-6">
              Ready to Start the Journey?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Give your child the gift of joyful learning. Schedule a visit or enroll today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/admissions">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 text-lg font-bold rounded-full bg-brand-red text-secondary-foreground shadow-lg shadow-brand-red/20"
                >
                  Start Enrollment
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 text-lg font-bold rounded-full bg-card border-2 border-primary text-brand-ink"
                >
                  Let's Talk
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
