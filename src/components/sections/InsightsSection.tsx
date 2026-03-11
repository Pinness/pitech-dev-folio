import { Lock, Wifi, Server, Database, Layers, HelpCircle } from "lucide-react";

const questions = [
  {
    icon: Lock,
    question: "What happens when you click 'Login'?",
    answer:
      "Your password gets hashed, compared against a stored hash, and if valid, the server issues a signed JWT token — a small piece of proof that travels with every request you make. No password is ever stored in plain text. Understanding this flow changed how I think about every system I build.",
    tags: ["Authentication", "JWT", "Security"],
  },
  {
    icon: Wifi,
    question: "How do APIs connect different systems?",
    answer:
      "Every time you tap a button in an app, a structured request travels to a server, gets validated, processed, and a response comes back — usually in milliseconds. This invisible conversation between frontend and backend is what makes modern applications feel seamless.",
    tags: ["REST APIs", "Architecture", "Backend"],
  },
  {
    icon: Server,
    question: "Why does backend structure matter?",
    answer:
      "A well-structured backend separates routes, services, and data models into clean layers. It's the difference between code that works today and code that still works — and can be extended — six months from now. This pattern shows up in every serious project I build.",
    tags: ["Architecture", "Clean Code", "Patterns"],
  },
  {
    icon: Database,
    question: "How does a database find your data so fast?",
    answer:
      "When you click 'save,' your data travels through an ORM, gets translated to SQL, hits an optimized query planner, writes to disk with guarantees that nothing gets lost — all in milliseconds. Understanding this pipeline is the key to building applications that feel instant.",
    tags: ["PostgreSQL", "ORM", "Performance"],
  },
  {
    icon: Layers,
    question: "What makes a system 'scalable'?",
    answer:
      "Scalability isn't about handling more traffic — it's about designing systems that grow gracefully. Connection pooling, caching, async processing, clean service boundaries. Every architectural decision shapes how a system behaves under pressure.",
    tags: ["Scalability", "System Design", "Architecture"],
  },
];

const InsightsSection = () => (
  <section id="insights" className="py-24 md:py-32 relative">
    <div className="absolute inset-0 bg-gradient-section" />
    <div className="container mx-auto px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <p className="text-sm font-display text-primary tracking-widest uppercase mb-2">
            Curiosity & Exploration
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Behind the Hood
          </h2>
        </div>

        {/* Philosophy intro */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Technology becomes far more interesting when you start asking deeper
            questions. These are the kinds of questions I explore, build around,
            and explain through PinessTech Studio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {questions.map((q) => (
            <div
              key={q.question}
              className="glass glass-hover rounded-xl p-6 space-y-4 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <q.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-semibold text-foreground">
                {q.question}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {q.answer}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {q.tags.map((tag) => (
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
