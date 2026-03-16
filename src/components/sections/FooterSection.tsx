import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter } from "lucide-react";

const links = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Mentorship", href: "/mentorship" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/pinessjw-adam", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Pinness", label: "GitHub" },
  { icon: Twitter, href: "https://x.com/LadyPiness", label: "Twitter" },
];

const FooterSection = () => (
  <footer className="border-t border-border/30 py-12">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-display font-bold">
            <span className="text-gradient">Piness</span>
            <span className="text-foreground">Tech</span>
          </Link>
          <div className="hidden md:flex gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={s.label}
            >
              <s.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-border/20 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} PinessTech Studio. All rights reserved.
      </div>
    </div>
  </footer>
);

export default FooterSection;
