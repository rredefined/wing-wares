import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="font-display text-4xl font-bold mb-8">
          Terms of <span className="text-primary">Service</span>
        </h1>
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p>By accessing or using AxyteHost services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-foreground">2. Services</h2>
            <p>AxyteHost provides hosting services including Bot Hosting, Minecraft Hosting, and VPS Hosting. Services are subject to availability and may be modified at our discretion.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-foreground">3. User Responsibilities</h2>
            <p>Users must not use our services for illegal activities, distribute malware, perform DDoS attacks, or violate any applicable laws. We reserve the right to suspend accounts that violate these terms.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-foreground">4. Payment & Refunds</h2>
            <p>All prices are listed in Indian Rupees (₹). Payments are non-refundable unless otherwise stated. We reserve the right to change pricing with prior notice.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-foreground">5. Service Availability</h2>
            <p>We strive for 99.9% uptime but do not guarantee uninterrupted service. Scheduled maintenance will be communicated in advance via our Discord server.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-foreground">6. Limitation of Liability</h2>
            <p>AxyteHost shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-foreground">7. Contact</h2>
            <p>For questions regarding these terms, reach out via Discord: <a href="https://discord.gg/axyte" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">discord.gg/axyte</a></p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
