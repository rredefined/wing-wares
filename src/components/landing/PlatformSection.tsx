import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Puzzle, Wrench, BarChart3 } from "lucide-react";

const tabs = [
  {
    id: "shell",
    icon: Terminal,
    label: "Shell Access",
    description: "Manage your server directly via our own custom made Shell system. No need for any third party tools!",
    preview: (
      <div className="rounded-xl border border-border/50 bg-background/80 p-6 font-mono text-sm text-muted-foreground">
        <div><span className="text-primary">root@axytehost</span>:<span className="text-muted-foreground">~$</span> systemctl status minecraft</div>
        <div className="mt-1" style={{ color: "hsl(142, 71%, 45%)" }}>● minecraft.service - active (running)</div>
        <div className="mt-1"><span className="text-primary">root@axytehost</span>:<span className="text-muted-foreground">~$</span> <span className="animate-pulse">_</span></div>
      </div>
    ),
  },
  {
    id: "plugins",
    icon: Puzzle,
    label: "Plugin Manager",
    description: "Install plugins in a single click. Our developers worked hard to bring you the best experience.",
    preview: (
      <div className="space-y-2">
        {["EssentialsX", "WorldEdit", "LuckPerms", "Vault"].map((p) => (
          <div key={p} className="flex items-center justify-between rounded-lg border border-border/50 bg-background/80 px-4 py-3 text-sm">
            <span>{p}</span>
            <span className="rounded-full bg-primary/20 px-3 py-0.5 text-xs font-medium text-primary">Installed</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "mods",
    icon: Wrench,
    label: "Mod Manager",
    description: "Install mods in a single click with our streamlined mod management system.",
    preview: (
      <div className="space-y-2">
        {["OptiFine", "Fabric API", "Sodium", "Lithium"].map((m) => (
          <div key={m} className="flex items-center justify-between rounded-lg border border-border/50 bg-background/80 px-4 py-3 text-sm">
            <span>{m}</span>
            <span className="rounded-full bg-primary/20 px-3 py-0.5 text-xs font-medium text-primary">Active</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
    description: "View your server analytics in real-time with detailed logs and charts.",
    preview: (
      <div className="space-y-4 rounded-xl border border-border/50 bg-background/80 p-6">
        {[
          { label: "CPU", value: "34%", width: "34%" },
          { label: "RAM", value: "2.1 / 4 GB", width: "52%" },
          { label: "Disk", value: "8.2 / 20 GB", width: "41%" },
          { label: "Network", value: "125 Mbps", width: "25%" },
        ].map((m) => (
          <div key={m.label} className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">{m.label}</span>
              <span>{m.value}</span>
            </div>
            <div className="h-2 rounded-full bg-border">
              <div className="h-full rounded-full bg-primary transition-all" style={{ width: m.width }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

const PlatformSection = () => {
  const [activeTab, setActiveTab] = useState("shell");
  const activeContent = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Our Panel
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h2 className="font-display text-4xl font-bold">
            Experience Our <span className="text-primary">Platform</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl text-muted-foreground"
        >
          Discover the powerful features that make our platform the perfect choice for your needs.
        </motion.p>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Tabs */}
          <div className="space-y-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex w-full items-start gap-4 rounded-xl border p-5 text-left transition-all ${
                  activeTab === tab.id
                    ? "border-primary/30 bg-card"
                    : "border-border/50 bg-card/30 hover:border-border"
                }`}
              >
                <div className={`shrink-0 rounded-lg p-2.5 ${activeTab === tab.id ? "bg-primary/20 text-primary" : "bg-card text-muted-foreground"}`}>
                  <tab.icon size={20} />
                </div>
                <div>
                  <h3 className="font-display font-bold">{tab.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{tab.description}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Preview */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-4 font-display text-xl font-bold">{activeContent.label}</h3>
            <p className="mb-6 text-sm text-muted-foreground">{activeContent.description}</p>
            {activeContent.preview}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
