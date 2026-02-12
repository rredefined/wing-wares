import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="font-display text-sm font-bold text-primary-foreground">R</span>
              </div>
              <span className="font-display text-xl font-bold">
                Render<span className="text-primary">Byte</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Premium hosting solutions for gamers and developers.
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
          © {new Date().getFullYear()} RenderByte. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
