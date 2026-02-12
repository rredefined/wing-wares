import { motion } from "framer-motion";
import { Terminal, Puzzle, BarChart3 } from "lucide-react";

const experiences = [
  {
    icon: Terminal,
    title: "Shell Access",
    description: "Full console access to manage your servers with SFTP and SSH support.",
    preview: (
      <div className="rounded-lg bg-background/80 p-4 font-mono text-xs text-muted-foreground">
        <div><span className="text-primary">root@server</span>:~$ systemctl status minecraft</div>
        <div style={{ color: "hsl(142, 71%, 45%)" }}>● minecraft.service - active (running)</div>
        <div><span className="text-primary">root@server</span>:~$ _</div>
      </div>
    ),
  },
  {
    icon: Puzzle,
    title: "Plugin Manager",
    description: "One-click plugin installation and management for your game servers.",
    preview: (
      <div className="space-y-2">
        {["EssentialsX", "WorldEdit", "LuckPerms"].map((p) => (
          <div key={p} className="flex items-center justify-between rounded-lg bg-background/80 px-4 py-2 text-sm">
            <span>{p}</span>
            <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs text-primary">Installed</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Real-time performance monitoring with CPU, RAM, and network graphs.",
    preview: (
      <div className="space-y-2">
        {[
          { label: "CPU", value: "34%", width: "34%" },
          { label: "RAM", value: "2.1 / 4 GB", width: "52%" },
          { label: "Disk", value: "8.2 / 20 GB", width: "41%" },
        ].map((m) => (
          <div key={m.label} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">{m.label}</span>
              <span>{m.value}</span>
            </div>
            <div className="h-1.5 rounded-full bg-border">
              <div className="h-full rounded-full bg-primary" style={{ width: m.width }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

const PlatformSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl font-bold">
            Platform <span className="text-primary">Experience</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Powerful tools at your fingertips.</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border/50 bg-card/50 p-6"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <exp.icon size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold">{exp.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{exp.description}</p>
              <div className="mt-6">{exp.preview}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
