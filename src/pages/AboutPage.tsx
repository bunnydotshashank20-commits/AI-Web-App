import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Target, Lightbulb, Users, Award, Clock, Globe } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every solution we build is designed with measurable outcomes in mind.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We stay at the forefront of AI technology to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "Your success is our success. We work as an extension of your team.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards in every project we undertake.",
  },
  {
    icon: Clock,
    title: "Agility",
    description:
      "Fast iteration and rapid deployment without compromising quality.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description:
      "Solutions that scale across borders and industries worldwide.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "25+", label: "Team Members" },
  { value: "10+", label: "Industries Served" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden bg-black">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 bg-[#0f4f47]/30 border border-[#1F514C] rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#1F514C]"></div>
                <span className="text-sm text-[#eefffd] font-medium">
                  Our Story
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-white">
                About Deep Data Xperts
              </h1>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                We're a team of data scientists, ML engineers, and AI
                strategists obsessed with turning complex data challenges into
                competitive advantages.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                    Our Mission
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    To democratize AI and empower businesses of all sizes to
                    harness the transformative power of intelligent systems.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe that AI should be accessible, understandable, and
                    impactful. Our approach combines deep technical expertise
                    with a commitment to transparent, ethical AI practices.
                  </p>
                </div>
                <div className="glass-card p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="text-center"
                      >
                        <div className="font-heading text-3xl font-bold gradient-text mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                The principles that guide every decision and every line of code
                we write.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="glass-card p-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-teal-800/60" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
