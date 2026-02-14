import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How do I get started with game server hosting?", a: "Simply create an account, choose your desired game server plan, and your server will be deployed within 60 seconds. Our automated system handles all the setup for you." },
  { q: "What kind of support do you provide?", a: "We provide 24/7 support via our ticket system. Our expert team is always ready to help with any issues or questions you may have." },
  { q: "Can I modify server settings and configurations?", a: "Yes! You have full control over your server through our control panel. You can modify configurations, install plugins/mods, and manage everything from one place." },
  { q: "What payment methods do you accept?", a: "We accept UPI, credit/debit cards, net banking, and other popular Indian payment methods. All prices are in INR (₹)." },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold leading-tight">
              Frequently Asked{" "}
              <br />
              <span className="text-primary">Questions</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Find answers to common questions about our game server hosting services.
            </p>
          </motion.div>

          {/* Right side: FAQ items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-xl border border-border/50 bg-card/50 px-6 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left font-display font-semibold hover:no-underline">
                    <span className="flex items-center gap-3">
                      <span className="text-primary font-mono text-sm">{String(i + 1).padStart(2, "0")}</span>
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pl-9">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
