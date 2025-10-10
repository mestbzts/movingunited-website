import { Link } from "react-router-dom";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/moving-united-logo.png";
import { useCallback } from "react";

const Footer = () => {
  // Scroll to top and then navigate
  const handleNavTop = useCallback((navigateTo: string) => {
    window.scrollTo(0, 0);
    // For <Link>, just scroll; navigation is handled by Link itself
  }, []);

  return (
    <footer className="bg-card border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4" onClick={() => handleNavTop("/")}>
              <img src={logo} alt="Moving United" className="h-12" />
            </Link>
            <p className="text-lg font-semibold mb-2">Your Move. Our Mission.</p>
            <p className="text-sm text-muted-foreground">
              Professional moving services you can trust. Making your move smooth and stress-free.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61580116989375"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/movingunited.ca/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => handleNavTop("/about")}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => handleNavTop("/services")}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => handleNavTop("/projects")}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => handleNavTop("/blog")}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Residential Moving</li>
              <li className="text-sm text-muted-foreground">Commercial Moving</li>
              <li className="text-sm text-muted-foreground">Office Relocation</li>
              <li className="text-sm text-muted-foreground">Staging</li>
              <li className="text-sm text-muted-foreground">Furniture Assembly</li>
              <li className="text-sm text-muted-foreground">Disposal Services</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              <Link to="/Contact" onClick={() => handleNavTop("/Contact")}> Contact Us</Link>
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>437-505-8275</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@movingunited.ca</span>
              </li>
              <li className="text-sm text-muted-foreground">
                Mon-Fri: 8am - 8pm<br />
                Sat: 8am - 7pm
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Moving United. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
