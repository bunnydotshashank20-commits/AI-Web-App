import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const openPositions = [
  {
    title: "Senior Machine Learning Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "Lead the development of cutting-edge ML models and drive our AI infrastructure forward.",
  },
  {
    title: "Data Scientist",
    department: "Data Science",
    location: "Remote",
    type: "Full-time",
    description:
      "Transform complex data into actionable insights and build predictive models for our clients.",
  },
  {
    title: "AI Solutions Architect",
    department: "Solutions",
    location: "New York, NY",
    type: "Full-time",
    description:
      "Design and implement end-to-end AI solutions for enterprise clients across industries.",
  },
  {
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Build beautiful, intuitive interfaces for our AI-powered products and client dashboards.",
  },
  {
    title: "Product Manager - AI",
    department: "Product",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "Shape the future of our AI products and work closely with engineering to deliver value.",
  },
];

const benefits = [
  "Competitive salary & equity",
  "Health, dental & vision",
  "Unlimited PTO",
  "Remote-first culture",
  "Learning budget",
  "Home office stipend",
];

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
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
                  We're Hiring
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-white">
                Join Our Team
              </h1>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Help us build the future of AI. We're looking for passionate
                individuals who want to make a real impact.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 bg-secondary/30">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                    Why Deep Data Xperts?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We're building a team of exceptional people who are
                    passionate about AI and its potential to transform
                    industries. Here, you'll work on challenging problems with
                    brilliant colleagues.
                  </p>
                  <ul className="grid grid-cols-2 gap-3">
                    {benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass-card p-8">
                  <div className="text-center">
                    <div className="font-heading text-5xl font-bold  text-teal-800/60 mb-2">
                      25+
                    </div>
                    <p className="text-muted-foreground mb-6">Team Members</p>
                    <div className="font-heading text-5xl  text-teal-800/60 font-bold mb-2">
                      12
                    </div>
                    <p className="text-muted-foreground mb-6">Countries</p>
                    <div className="font-heading text-5xl  text-teal-800/60 font-bold mb-2">
                      4.9
                    </div>
                    <p className="text-muted-foreground">Glassdoor Rating</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Open Positions */}
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
                Open Positions
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Find your next opportunity with us. We're always looking for
                talented people to join our growing team.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {openPositions.map((position) => (
                  <motion.div
                    key={position.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                    whileHover={{ translateY: -6 }}
                    className="bg-white dark:bg-[#0b0b0b] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-heading text-lg font-semibold mb-2">
                          {position.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {position.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="text-xs bg-[#EAF6EF] text-[#0f4f47] px-2 py-1 rounded-full">
                            {position.location}
                          </span>
                          <span className="text-xs bg-[#EAF6EF] text-[#0f4f47] px-2 py-1 rounded-full">
                            {position.type}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col items-start md:items-end gap-3">
                        {/* <a
                          href="#"
                          className="text-sm text-[#0f4f47] hover:underline"
                        >
                          Apply
                        </a> */}
                        <Button size="sm" className="hidden md:inline-flex">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Don't see a role that fits?
              </h2>
              <p className="text-muted-foreground mb-8">
                We're always interested in meeting talented people. Send us your
                resume and we'll keep you in mind for future opportunities.
              </p>
              <Button size="lg" variant="outline" className="group">
                Submit General Application
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;
