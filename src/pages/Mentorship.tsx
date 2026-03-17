import { Button } from "@/components/ui/button";
import avatarImg from "@/assets/1752184730238.jpg";
import {
  Youtube,
  MessageCircle,
  BookOpen,
  Users,
  Lightbulb,
  ArrowRight,
  Lock,
  Wifi,
  Server,
  Database,
  Layers,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";

const pillars = [
  {
    icon: BookOpen,
    title: "Real Engineering Concepts",
    description:
      "I share insights from projects I've actually built — how authentication flows work, why APIs are structured a certain way, and what happens inside a backend when you click a button.",
  },
  {
    icon: Users,
    title: "Community Learning",
    description:
      "The mentorship community is a space where aspiring engineers ask real questions, share progress, get honest feedback, and learn from each other's journeys.",
  },
  {
    icon: Lightbulb,
    title: "Practical Lessons",
    description:
      "I don't teach theory in a vacuum. Every lesson comes from building real systems — the mistakes, the debugging sessions, the 'aha' moments that textbooks don't cover.",
  },
];

const insights = [
  {
    icon: Lock,
    question: "What happens when you click 'Login'?",
    answer:
      "Your password gets hashed, compared against a stored hash, and if valid, the server issues a signed JWT token. No password is ever stored in plain text.",
    tags: ["Authentication", "JWT", "Security"],
  },
  {
    icon: Wifi,
    question: "How do APIs connect different systems?",
    answer:
      "Every time you tap a button in an app, a structured request travels to a server, gets validated, processed, and a response comes back — usually in milliseconds.",
    tags: ["REST APIs", "Architecture", "Backend"],
  },
  {
    icon: Server,
    question: "Why does backend structure matter?",
    answer:
      "A well-structured backend separates routes, services, and data models into clean layers. It's the difference between code that works today and code that still works six months from now.",
    tags: ["Architecture", "Clean Code", "Patterns"],
  },
  {
    icon: Database,
    question: "How does a database find your data so fast?",
    answer:
      "Your data travels through an ORM, gets translated to SQL, hits an optimized query planner, writes to disk with guarantees that nothing gets lost — all in milliseconds.",
    tags: ["PostgreSQL", "ORM", "Performance"],
  },
  {
    icon: Layers,
    question: "What makes a system 'scalable'?",
    answer:
      "It's about designing systems that grow gracefully — connection pooling, caching, async processing, clean service boundaries.",
    tags: ["Scalability", "System Design", "Architecture"],
  },
];

const Mentorship = () => (
  <PageLayout>
    {/* Hero */}
    <section className="pt-32 pb-24 md:pb-32 relative">
      <div className="absolute inset-0 bg-gradient-section" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm font-display text-primary tracking-widest uppercase">
              Learn & Grow
            </p>
            <h1 className="text-3xl md:text-4xl font-display font-bold">
              Mentorship & Learning
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              PinessTech Studio isn't just about building software — it's about
              helping people understand the technology they interact with every
              day. I believe the best engineers are the ones who can explain
              what they build, not just ship it.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group glass glass-hover rounded-xl p-6 space-y-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <p.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

          {/* Personal note */}
          <div className="glass rounded-xl p-6 md:p-8 mb-14 max-w-3xl mx-auto text-center space-y-4">
            <img
              src={avatarImg}
              alt="Happiness Adam – Mentor and Software Engineer"
              className="w-20 h-20 rounded-full object-cover mx-auto ring-2 ring-primary/20"
              loading="lazy"
            />
            <p className="text-muted-foreground leading-relaxed text-sm italic">
              "I started sharing what I learn because I remember how confusing
              technology felt when I was figuring things out on my own. If
              something I explain helps one person understand how a system
              works, that's a win."
            </p>
            <p className="text-xs text-primary font-display">— Happiness Adam</p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-24">
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://youtube.com/@pinesstech?si=rpPNoK21VqtXP2rB",
                  "_blank"
                )
              }
              className="font-display text-base gap-2 group"
            >
              <Youtube className="w-5 h-5" />
              Follow on YouTube
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                window.open(
                  "https://chat.whatsapp.com/L8k7rTVTky66Bzev3KjVK0?mode=gi_t",
                  "_blank"
                )
              }
              className="font-display text-base gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Join the Learning Community
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Behind the Hood — Engineering Insights */}
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <p className="text-sm font-display text-primary tracking-widest uppercase mb-2">
              Curiosity & Exploration
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Behind the Hood
            </h2>
          </div>

          <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Technology becomes far more interesting when you start asking
              deeper questions. These are the kinds of questions I explore,
              build around, and explain through PinessTech Studio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((q) => (
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
  </PageLayout>
);

export default Mentorship;
