import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-ink text-brand-cream/80">
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-display font-bold text-brand-cream mb-4">
              Euro<span className="text-brand-yellow">Kids</span>
            </h3>
            <p className="text-sm leading-relaxed">
              Nurturing curiosity through the Montessori method. Where every child discovers
              their unique potential.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-brand-cream mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Admissions", path: "/admissions" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-brand-yellow transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-brand-cream mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>Playgroup (2–3 yrs)</li>
              <li>Nursery (3–4 yrs)</li>
              <li>Junior KG (4–5 yrs)</li>
              <li>Senior KG (5–6 yrs)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-brand-cream mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-yellow flex-shrink-0" />
                Hattiban, Lalitpur, Nepal
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                +977-1-5000000
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                info@eurokids-Hattiban.edu.np
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Euro Kids Montessori – Hattiban. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-brand-red" /> for little learners
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
