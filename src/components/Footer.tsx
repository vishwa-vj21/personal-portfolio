import { Github, Linkedin, Mail } from "lucide-react";
import { Links } from "@/data/links";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12"
      style={{ backgroundColor: "var(--footer-background)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <span className="text-2xl font-bold text-primary">VS.</span>
            <p className="mt-2 text-muted-foreground max-w-md">
              Building elegant digital solutions with a focus on user experience
              and technical excellence.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href={Links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={Links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={Links.email}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            <div className="text-gray-400 text-sm text-right">
              <p>
                © {currentYear} Vishwajith S | Built with React and Tailwind
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
