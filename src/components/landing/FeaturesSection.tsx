import { motion } from "framer-motion";
import { Zap, Shield, Clock, Headphones, Cpu, Globe, Lock, RefreshCcw, TrendingUp, Network } from "lucide-react";

const mainFeatures = [
  { icon: Zap, title: "Instant Setup", description: "Deploy your server in under 60 seconds with our automated provisioning system." },
  { icon: Shield, title: "DDoS Protection", description: "Enterprise-grade protection keeping your servers safe from attacks 24/7." },
  { icon: Clock, title: "99.9% Uptime", description: "Industry-leading reliability with redundant infrastructure and failover systems." },
  { icon: Headphones, title: "24/7 Support", description: "Expert support team available around the clock via tickets and live chat." },
];

const advancedFeatures = [
  { icon: Cpu, title: "High Performance", description: "Latest-gen AMD EPYC & Intel Xeon processors with NVMe storage." },
  { icon: Globe, title: "Low Latency", description: "Global network of data centers ensuring minimal latency worldwide." },
  { icon: Lock, title: "Security First", description: "Automated backups, encrypted connections, and isolated containers." },
  { icon: RefreshCcw, title: "Auto Recovery", description: "Automatic crash detection and restart to keep your services running." },
  { icon: TrendingUp, title: "Resource Scaling", description: "Upgrade your plan anytime to scale CPU, RAM, and storage on the fly." },
  { icon: Network, title: "Global Network", description: "Premium bandwidth with 10Gbps network ports across all locations." },
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
          className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl font-bold">
            Why Choose <span className="text-primary">RenderByte</span>?
          </h2>
          <p className="mt-4 text-muted-foreground">Everything you need for reliable, high-performance hosting.</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {mainFeatures.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="group rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-card"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <f.icon size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Advanced Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 mt-24 text-center"
        >
          <h2 className="font-display text-3xl font-bold">Advanced Features</h2>
          <p className="mt-4 text-muted-foreground">Built for performance, reliability, and scale.</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {advancedFeatures.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="flex items-start gap-4 rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-colors hover:border-primary/30"
            >
              <div className="shrink-0 rounded-lg bg-primary/10 p-2.5 text-primary">
                <f.icon size={20} />
              </div>
              <div>
                <h3 className="font-display font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
