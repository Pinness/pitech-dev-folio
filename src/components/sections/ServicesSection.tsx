import { Globe, Layout, Server, Rocket, Target } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Professional business websites, modern responsive platforms, and performance-optimized sites that establish your brand's digital presence and drive engagement.",
    items: ["Business Websites", "Modern Responsive Platforms", "Performance-Optimized Sites"],
  },
  {
    icon: Layout,
    title: "Web Applications",
    description:
      "Custom dashboards, SaaS platforms, and internal business tools engineered for performance, usability, and scalability.",
    items: ["Dashboards", "SaaS Platforms", "Internal Business Tools"],
  },
  {
    icon: Server,
    title: "Backend Engineering",
    description:
      "FastAPI and Django systems, RESTful API development, and authentication architecture built for security and production-grade reliability.",
    items: ["FastAPI Systems", "API Development", "Authentication Architecture"],
  },
  {
    icon: Target,
    title: "Landing Pages & Funnels",
    description:
      "High-converting landing pages, product launch campaigns, and marketing funnels designed to turn visitors into customers.",
    items: ["High-Converting Landing Pages", "Campaign Pages", "Marketing Funnels"],
  },
  {
    icon: Rocket,
    title: "Startup MVP Development",
    description:
      "Rapid product architecture, backend systems, database design, and deployment — everything a startup needs to go from idea to launch.",
    items: ["Product Architecture", "Backend Systems", "Database Design & Deployment"],
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 md:py-32 relative">
    <div className="absolute inset-0 bg-gradient-section" />
    <div className="container mx-auto px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-display text-primary tracking-widest uppercase mb-2">
            What I Build
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Solutions & Capabilities
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            From business websites to startup MVPs — engineered solutions that
            solve real problems and scale with your growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group glass glass-hover rounded-xl p-6 space-y-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-1.5">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
