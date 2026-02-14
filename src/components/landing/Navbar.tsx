import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#pricing" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="AxyteHost" className="h-8 w-8" />
          <span className="font-display text-xl font-bold text-foreground">
            Axyte<span className="text-primary">Host</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <div className="flex items-center gap-1 rounded-full border border-border/50 bg-card/50 px-2 py-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="https://discord.gg/axyte" target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="rounded-full px-6">Sign Up</Button>
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden"
        >
          <div className="container mx-auto flex flex-col gap-4 px-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <a href="https://discord.gg/axyte" target="_blank" rel="noopener noreferrer">
                <Button className="w-full rounded-full">Sign Up</Button>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
