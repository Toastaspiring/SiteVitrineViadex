
import { Link } from "react-router-dom";

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Diagnostic IA", path: "/services" },
        { name: "Accompagnement stratégique", path: "/services" },
        { name: "Formations IA", path: "/services" },
        { name: "Veille IA", path: "/services" }
      ],
    },
    {
      title: "Entreprise",
      links: [
        { name: "À Propos", path: "/a-propos" },
        { name: "Notre Mission", path: "/a-propos" },
        { name: "Équipe", path: "/a-propos" },
        { name: "Contact", path: "/contact" }
      ],
    },
    {
      title: "Ressources",
      links: [
        { name: "Blog", path: "/blog" },
        { name: "Études de cas", path: "/blog" },
        { name: "FAQ", path: "/pourquoi-viadex" },
        { name: "Glossaire IA", path: "/blog" }
      ],
    },
    {
      title: "Mentions Légales",
      links: [
        { name: "Confidentialité", path: "/confidentialité" },
        { name: "Conditions d'utilisation", path: "/conditions-d'utilisation" },
        { name: "Mentions légales", path: "/mentions-légales" },
        { name: "Cookies", path: "/cookies" }
      ],
    },
  ];

  return (
    <footer className="bg-primary text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            © 2024 Viadex. Tous droits réservés.
          </p>
          <div className="flex items-center space-x-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
              Twitter
            </a>
            <Link to="/contact" className="text-white/70 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
