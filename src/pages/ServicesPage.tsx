import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Database,
  LineChart,
  Zap,
  Bot,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Bot,
    title: "AI Agents & Automation",
    description:
      "Intelligent agents that automate complex workflows, handle customer interactions, and streamline operations 24/7.",
    features: [
      "Conversational AI",
      "Process automation",
      "Intelligent routing",
      "24/7 availability",
    ],
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Build robust data pipelines and infrastructure that transform raw data into actionable insights at scale.",
    features: [
      "ETL pipelines",
      "Data warehousing",
      "Real-time streaming",
      "Data governance",
    ],
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description:
      "Forecast trends, identify patterns, and make data-driven decisions with advanced statistical modeling.",
    features: [
      "Demand forecasting",
      "Risk analysis",
      "Customer behavior",
      "Market trends",
    ],
  },
  {
    icon: Zap,
    title: "LLM Integration",
    description:
      "Harness the power of large language models. Custom fine-tuning, RAG systems, and seamless API integrations.",
    features: [
      "Custom fine-tuning",
      "RAG systems",
      "Prompt engineering",
      "API integration",
    ],
  },
  {
    icon: Shield,
    title: "AI Security & Compliance",
    description:
      "Ensure your AI solutions are secure, ethical, and compliant with industry regulations and best practices.",
    features: [
      "Bias detection",
      "Model auditing",
      "GDPR compliance",
      "Ethical AI",
    ],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Custom ML models tailored to your business needs. From prediction to classification, we build solutions that learn and adapt.",
    features: [
      "Custom model development",
      "Model optimization",
      "Transfer learning",
      "AutoML solutions",
    ],
  },
];

const ServicesPage = () => {
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
                  Comprehensive AI Solutions
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-white">
                Our Services
              </h1>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                End-to-end AI solutions that transform how you work with data.
                From concept to production, we're with you every step of the
                way.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid -  Layout */}
        <section className="py-20">
          <div className="container px-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`mb-20 flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
              >
                {/* Text Content */}
                <div className="flex-1">
                  <div className="w-12 h-12 rounded-xl bg-[#1F514C]/10 flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-[#1F514C]" />
                  </div>
                  <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-base"
                      >
                        <CheckCircle className="w-5 h-5 text-[#1F514C] flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-[#0f4f47] text-white hover:bg-[#154f47] group">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Image Content */}
                <div className="flex-1">
                  <div className="relative">
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={`/images/service-${index + 1}.jpg`}
                        alt={service.title}
                        className="w-full h-96 object-cover"
                      />
                    </div>
                    {/* Decorative accent */}
                    <div
                      className={`absolute ${
                        index % 2 === 0
                          ? "-bottom-6 -right-6"
                          : "-bottom-6 -left-6"
                      } w-24 h-24 bg-[#1F514C]/10 rounded-lg`}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        {/* <section className="py-20">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Our Process
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                A proven methodology that delivers results consistently.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    step: "01",
                    title: "Discover",
                    desc: "Understand your challenges and goals",
                  },
                  {
                    step: "02",
                    title: "Design",
                    desc: "Architect the optimal solution",
                  },
                  {
                    step: "03",
                    title: "Develop",
                    desc: "Build and iterate rapidly",
                  },
                  {
                    step: "04",
                    title: "Deploy",
                    desc: "Launch and monitor performance",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="font-heading text-4xl font-bold text-teal-800/80 mb-3">
                      {item.step}
                    </div>
                    <h3 className="font-heading text-lg font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        {/* <section className="py-20 bg-secondary/30">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's discuss how we can help you achieve your AI goals. Our team is ready 
                to answer your questions.
              </p>
              <Link to="/contact">
                <Button size="lg" className="group">
                  Contact Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
