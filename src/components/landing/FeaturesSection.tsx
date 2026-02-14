import { motion } from "framer-motion";
import { Cpu, Zap, Lock, RefreshCcw, Settings, TrendingUp, Globe, Network } from "lucide-react";

const advancedFeatures = [
  { icon: Cpu, title: "High Performance", description: "Powered by latest generation processors for performance" },
  { icon: Zap, title: "Low Latency", description: "Optimized network infrastructure for minimal lag and delay" },
  { icon: Lock, title: "Advanced Security", description: "Our system is protected by advanced, multi-layered security protocols designed to detect, isolate, and neutralize threats in real time." },
  { icon: RefreshCcw, title: "Auto Recovery", description: "Automatic server recovery and backup systems" },
  { icon: Settings, title: "Full Control", description: "Complete server control panel with advanced configuration options" },
  { icon: TrendingUp, title: "Resource Scaling", description: "Dynamic resource allocation based on server demands" },
  { icon: Globe, title: "Global Network", description: "Worldwide server locations for optimal connectivity" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            We Won't Disappoint
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h2 className="font-display text-4xl font-bold">
            Advanced <span className="text-primary">Features</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl text-muted-foreground"
        >
          Everything you need for professional game server hosting
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {advancedFeatures.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="group rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-card"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <f.icon size={22} />
              </div>
              <h3 className="font-display text-base font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
