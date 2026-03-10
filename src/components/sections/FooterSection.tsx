import { Github, Linkedin, Twitter } from "lucide-react";

const FooterSection = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const links = [
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
    { label: "Insights", id: "insights" },
    { label: "Contact", id: "contact" },
  ];

  const socials = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/pinessjw-adam" },
    { icon: Github, href: "https://github.com/Pinness" },
    { icon: Twitter, href: "https://x.com/LadyPiness" },
  ];

  return (
    <footer className="border-t border-border/30 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="font-display font-bold">
              <span className="text-gradient">Piness</span>
              <span className="text-foreground">Tech</span>
            </span>
            <div className="hidden md:flex gap-4">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Social link"
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
};

export default FooterSection;
