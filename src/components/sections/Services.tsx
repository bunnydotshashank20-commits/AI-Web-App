import { Brain, Database, LineChart, Zap, Bot, Shield, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
    y: 40,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Our Expertise
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                y: -4, 
                transition: { duration: 0.2 } 
              }}
              className="group glass-card p-8 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-coral/10 flex items-center justify-center mb-6 group-hover:bg-accent-coral transition-colors">
                <service.icon className="w-6 h-6 text-accent-coral group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link to="/services">
            <Button variant="outline" className="group">
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
