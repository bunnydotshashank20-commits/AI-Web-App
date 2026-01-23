import { Brain, Database, LineChart, Zap, Bot, Shield } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Custom ML models tailored to your business needs. From prediction to classification, we build solutions that learn and adapt.",
  },
  {
    icon: Bot,
    title: "AI Agents & Automation",
    description: "Intelligent agents that automate complex workflows, handle customer interactions, and streamline operations 24/7.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Build robust data pipelines and infrastructure that transform raw data into actionable insights at scale.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Forecast trends, identify patterns, and make data-driven decisions with advanced statistical modeling.",
  },
  {
    icon: Zap,
    title: "LLM Integration",
    description: "Harness the power of large language models. Custom fine-tuning, RAG systems, and seamless API integrations.",
  },
  {
    icon: Shield,
    title: "AI Security & Compliance",
    description: "Ensure your AI solutions are secure, ethical, and compliant with industry regulations and best practices.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const Services = () => {
  return (
    <section id="services" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative z-10 px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            End-to-end AI solutions that transform how you work with data
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 } 
              }}
              className="group glass-card p-8 hover:glow-box transition-shadow duration-500"
            >
              <motion.div 
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
              >
                <service.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="font-heading text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
