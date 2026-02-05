import {
  Brain,
  Database,
  LineChart,
  Zap,
  Bot,
  Shield,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const services = [
  {
    icon: Bot,
    title: "AI Agents & Automation",
    description:
      "Intelligent agents that automate complex workflows, handle customer interactions, and streamline operations 24/7.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Build robust data pipelines and infrastructure that transform raw data into actionable insights at scale.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description:
      "Forecast trends, identify patterns, and make data-driven decisions with advanced statistical modeling.",
  },
  {
    icon: Zap,
    title: "LLM Integration",
    description:
      "Harness the power of large language models. Custom fine-tuning, RAG systems, and seamless API integrations.",
  },
  {
    icon: Shield,
    title: "AI Security & Compliance",
    description:
      "Ensure your AI solutions are secure, ethical, and compliant with industry regulations and best practices.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Custom ML models tailored to your business needs. From prediction to classification, we build solutions that learn and adapt.",
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
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };
  const contactInfo = [
    { icon: Mail, label: "Email", value: "ak@deepdataxperts.com" },
    { icon: Phone, label: "Phone", value: "+1 833-553-2700" },
    { icon: MapPin, label: "Location", value: "Sterling, VA, United States" },
    { icon: Clock, label: "Hours", value: "Mon-Fri 9AM-6PM" },
  ];
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
                transition: { duration: 0.2 },
              }}
              className="group glass-card p-8 hover:shadow-md transition-shadow"
            >
              <div className="group w-12 h-12 rounded-xl bg-[#1F514C]/10 flex items-center justify-center mb-6 transition-all group-hover:bg-[#1F514C]">
                <service.icon className="w-6 h-6 text-[#1F514C] group-hover:text-white transition-colors" />
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

      {/* Process Section - Card Layout */}
      <section className="py-20">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              How we turn ideas into intelligent systems.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A proven methodology that delivers results consistently.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Discover",
                  desc: "Understand your challenges and goals",
                  bg: "bg-[#f2efe9]",
                  text: "text-foreground",
                },
                {
                  step: "02",
                  title: "Design",
                  desc: "Architect the optimal solution",
                  bg: "bg-[#dff3d9]",
                  text: "text-foreground",
                },
                {
                  step: "03",
                  title: "Develop",
                  desc: "Build and iterate rapidly",
                  bg: "bg-[#2b6bf6]",
                  text: "text-white",
                },
                {
                  step: "04",
                  title: "Deploy",
                  desc: "Launch and monitor performance",
                  bg: "bg-[#0b0b0b]",
                  text: "text-white",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className={`${item.bg} rounded-2xl p-6 sm:p-8 relative overflow-hidden h-full`}
                >
                  {/* Big faded step number */}
                  <span
                    className={`absolute right-4 top-3 font-heading font-bold text-[5.5rem] md:text-[7rem] leading-none opacity-8 select-none pointer-events-none ${item.text === "text-white" ? "text-white/10" : "text-foreground/10"}`}
                  >
                    {item.step}
                  </span>

                  <div className="relative z-10">
                    <div
                      className={`font-heading text-sm font-semibold mb-2 ${item.text}`}
                    >
                      {item.step}
                    </div>
                    <h3
                      className={`font-heading text-lg font-semibold mb-3 ${item.text}`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`${item.text === "text-white" ? "text-white/90" : "text-muted-foreground"} text-sm leading-relaxed`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-2">
              <h3 className="font-heading text-3xl font-bold mb-4">
                About DeepDataXperts
              </h3>
              <p className="text-muted-foreground mb-6">
                DeepDataXperts is an AI solutions company focused on turning
                complex data into practical, scalable intelligence. We partner
                with forward-thinking organizations to design, build, and deploy
                AI systems that deliver measurable impact.
              </p>

              <p className="text-muted-foreground mb-6">
                Our team of engineers, data scientists, and AI specialists bring
                years of experience across industries to help businesses unlock
                new opportunities through intelligent automation and data-driven
                insights.
              </p>

              <Link to="/about">
                <Button
                  variant="glow"
                  className="mt-2 bg-[#0f4f47] text-white hover:bg-[#154f47] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0f4f47]/60"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>

            <div className="order-1 lg:order-1 flex justify-center lg:justify-start">
              {/* Replace the placeholder image with your own image later */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg max-w-[520px] w-full">
                <img
                  src="/images/about.jpg"
                  alt="About placeholder"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-[#1F514C]/10 rounded-lg hidden md:block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-20">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="lg:pr-12">
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Careers at DeepDataXperts
              </h3>
              <p className="text-muted-foreground mb-6">
                Join a team of engineers, designers, and AI specialists solving
                real-world problems with cutting-edge technology. We value
                curiosity, ownership, and impact.
              </p>

              <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                <li>
                  • Work on impactful projects that solve real business
                  challenges
                </li>
                <li>• Continuous learning and growth opportunities</li>
                <li>• Collaborative and supportive culture</li>
              </ul>

              <Link to="/careers">
                <Button
                  variant="glow"
                  className="mt-2 bg-[#0f4f47] text-white hover:bg-[#154f47] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0f4f47]/60"
                >
                  View Open Roles
                </Button>
              </Link>
            </div>

            <div className="flex justify-center lg:justify-start">
              <div className="rounded-2xl overflow-hidden shadow-lg max-w-[520px] w-full">
                <img
                  src="/images/careers.jpg"
                  alt="Careers placeholder"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left - Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
                  Contact Us
                </h2>
                <p className="text-muted-foreground mb-10 leading-relaxed">
                  Have a project in mind or a challenge you'd like to discuss?
                  Get in touch with our team and let's explore how AI can work
                  for you.
                </p>

                <div className="space-y-6">
                  {contactInfo.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                        <Icon className="w-5 h-5 text-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{label}</p>
                        <p className="font-medium">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right - Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card p-8"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Name
                      </label>
                      <Input
                        placeholder="Your name"
                        required
                        className="bg-background border-border focus:border-foreground"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="you@company.com"
                        required
                        className="bg-background border-border focus:border-foreground"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Company
                    </label>
                    <Input
                      placeholder="Your company"
                      className="bg-background border-border focus:border-foreground"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us about your project..."
                      rows={5}
                      required
                      className="bg-background border-border focus:border-foreground resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#AEDA94] text-black hover:bg-[#96da6e] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0f4f47]/60 group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Get in Touch"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;
