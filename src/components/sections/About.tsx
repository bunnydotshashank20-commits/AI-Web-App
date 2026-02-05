import { Target, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every solution we build is designed with measurable outcomes in mind.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay at the forefront of AI technology to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "Your success is our success. We work as an extension of your team.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-6">
        {/* Mission statement */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Why <span className="gradient-text">Deep Data Xperts</span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We're a team of data scientists, ML engineers, and AI strategists obsessed with 
            turning complex data challenges into competitive advantages. Our mission is to 
            democratize AI and empower businesses of all sizes to harness the transformative 
            power of intelligent systems.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass-card p-8 text-center hover:glow-box transition-shadow duration-500"
            >
              <motion.div 
                className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent-coral/20 to-accent-orange/20 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.3 } }}
              >
                <value.icon className="w-8 h-8 gradient-text" />
              </motion.div>
              <h3 className="font-heading text-xl font-semibold mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
