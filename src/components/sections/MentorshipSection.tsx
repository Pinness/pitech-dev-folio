import { Button } from "@/components/ui/button";
import { Youtube, MessageCircle, BookOpen, Users, Lightbulb, ArrowRight } from "lucide-react";

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
      "The mentorship community is a space where aspiring engineers ask real questions, share progress, get honest feedback, and learn from each other's journeys — not just mine.",
  },
  {
    icon: Lightbulb,
    title: "Practical Lessons",
    description:
      "I don't teach theory in a vacuum. Every lesson comes from building real systems — the mistakes, the debugging sessions, the 'aha' moments that textbooks don't cover.",
  },
];

const MentorshipSection = () => (
  <section id="mentorship" className="py-24 md:py-32 relative">
    <div className="absolute inset-0 bg-gradient-section" />
    <div className="container mx-auto px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-display text-primary tracking-widest uppercase">
            Learn & Grow
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Mentorship & Learning
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            PinessTech Studio isn't just about building software — it's about
            helping people understand the technology they interact with every
            day. I believe the best engineers are the ones who can explain what
            they build, not just ship it.
          </p>
        </div>

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
        <div className="glass rounded-xl p-6 md:p-8 mb-10 max-w-3xl mx-auto text-center space-y-3">
          <p className="text-muted-foreground leading-relaxed text-sm italic">
            "I started sharing what I learn because I remember how confusing
            technology felt when I was figuring things out on my own. If
            something I explain helps one person understand how a system works,
            that's a win."
          </p>
          <p className="text-xs text-primary font-display">— Happiness Adam</p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
);

export default MentorshipSection;
