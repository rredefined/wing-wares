import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="AxyteHost" className="h-8 w-8" />
              <span className="font-display text-xl font-bold">
                Axyte<span className="text-primary">Host</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Premium hosting solutions for gamers and developers in India.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold">Product</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground">Features</a></li>
              <li><a href="#pricing" className="hover:text-foreground">Pricing</a></li>
              <li><a href="#locations" className="hover:text-foreground">Locations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">About</a></li>
              <li><a href="#" className="hover:text-foreground">Blog</a></li>
              <li><a href="#" className="hover:text-foreground">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold">Support</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
              <li><Link to="/login" className="hover:text-foreground">Contact</Link></li>
              <li><a href="#" className="hover:text-foreground">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} AxyteHost. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
