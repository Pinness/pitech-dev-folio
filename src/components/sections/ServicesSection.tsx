import { Globe, Layout, Server, Rocket, Target } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Business websites, startup platforms, and modern responsive web experiences that tell your brand's story.",
    items: ["Business Websites", "Startup Platforms", "Responsive Design"],
  },
  {
    icon: Layout,
    title: "Web Applications",
    description:
      "Custom dashboards, SaaS platforms, and internal tools engineered for performance and scalability.",
    items: ["Dashboards", "SaaS Platforms", "Custom Tools"],
  },
  {
    icon: Server,
    title: "Backend Engineering",
    description:
      "API systems, authentication architecture, and scalable backend infrastructure built for production.",
    items: ["API Systems", "Auth Architecture", "Scalable Infrastructure"],
  },
  {
    icon: Target,
    title: "Landing Pages & Funnels",
    description:
      "High-converting product launch pages and marketing landing pages designed to drive results.",
    items: ["Product Launches", "Marketing Pages", "Conversion Optimization"],
  },
  {
    icon: Rocket,
    title: "Startup MVP Development",
    description:
      "Rapid product development with solid backend architecture and database design from day one.",
    items: ["Rapid Prototyping", "Backend Architecture", "Database Design"],
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
            Services & Capabilities
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
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
