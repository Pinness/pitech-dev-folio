import { Globe, Layout, Server, Rocket, Target } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Professional websites that establish your brand's digital presence — built to load fast, look great on every device, and grow with your business.",
    items: ["Business & Startup Websites", "Modern Responsive Platforms", "Performance-Optimized Sites"],
  },
  {
    icon: Layout,
    title: "Web Applications",
    description:
      "Custom dashboards, SaaS platforms, and internal tools — engineered for real users with real workflows, not just demo screenshots.",
    items: ["Dashboards & Analytics", "SaaS Platforms", "Internal Business Tools"],
  },
  {
    icon: Server,
    title: "Backend Engineering",
    description:
      "The systems that power everything behind the scenes — APIs, authentication, data pipelines — built for security, speed, and reliability.",
    items: ["FastAPI & Django Systems", "API Architecture", "Authentication & Security"],
  },
  {
    icon: Target,
    title: "Landing Pages & Funnels",
    description:
      "Pages designed with one goal: convert visitors into customers. Clean design, clear messaging, fast loading — every detail optimized.",
    items: ["High-Converting Landing Pages", "Product Launch Campaigns", "Marketing Funnels"],
  },
  {
    icon: Rocket,
    title: "Startup MVP Development",
    description:
      "Going from idea to working product — fast. I help startups architect, build, and launch their first version without cutting corners on quality.",
    items: ["Product Architecture", "Backend & Database Design", "Launch & Deployment"],
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 md:py-32 relative">
    <div className="absolute inset-0 bg-gradient-section" />
    <div className="container mx-auto px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-display text-primary tracking-widest uppercase mb-2">
            How I Can Help You Build
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Solutions & Capabilities
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Whether you're launching a startup, scaling a platform, or need a
            reliable engineer to build something properly — here's how
            PinessTech Studio can help.
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
