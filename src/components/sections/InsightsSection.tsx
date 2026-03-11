import { Lock, Wifi, Server, Database, Layers } from "lucide-react";

const insights = [
  {
    icon: Lock,
    title: "What Happens When You Log Into a Website?",
    description:
      "Your password gets hashed with bcrypt, compared against a stored hash, and if valid, the server issues a JWT — a signed token that proves your identity on every subsequent request. No password is ever stored in plain text.",
    tags: ["Authentication", "JWT", "Security"],
  },
  {
    icon: Wifi,
    title: "How APIs Power Modern Applications",
    description:
      "Every button click, data load, and notification in a modern app talks to a REST API. The frontend sends structured requests, the backend validates, processes, and responds with JSON — creating a clean contract between what users see and what systems do.",
    tags: ["REST APIs", "Architecture", "Backend"],
  },
  {
    icon: Server,
    title: "How Backend Systems Are Structured",
    description:
      "Production backends follow layered architecture: routes handle HTTP, services contain business logic, models define data, and schemas validate input/output. This separation makes systems testable, maintainable, and scalable.",
    tags: ["Architecture", "Clean Code", "Patterns"],
  },
  {
    icon: Database,
    title: "How Databases Handle Your Queries",
    description:
      "When you click 'save,' your data travels through an ORM, gets translated to SQL, hits an optimized query planner, writes to disk with ACID guarantees, and returns a confirmation — all in milliseconds. Understanding this pipeline is key to building performant applications.",
    tags: ["PostgreSQL", "ORM", "Performance"],
  },
  {
    icon: Layers,
    title: "How Scalable Systems Are Designed",
    description:
      "Scalability isn't about handling more traffic — it's about designing systems that grow gracefully. From connection pooling and caching layers to service decomposition and async processing, every architectural decision shapes how a system performs under pressure.",
    tags: ["Scalability", "System Design", "Architecture"],
  },
];

const InsightsSection = () => (
  <section id="insights" className="py-24 md:py-32 relative">
    <div className="absolute inset-0 bg-gradient-section" />
    <div className="container mx-auto px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-display text-primary tracking-widest uppercase mb-2">
            Behind the Hood
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Engineering Insights
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            I believe in explaining technology — not just building it. Here's
            how the systems you use every day actually work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight) => (
            <div
              key={insight.title}
              className="glass glass-hover rounded-xl p-6 space-y-4 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <insight.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-semibold text-foreground">
                {insight.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {insight.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {insight.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default InsightsSection;
