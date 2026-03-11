import { Button } from "@/components/ui/button";
import { Youtube, MessageCircle, BookOpen, Users, ArrowRight } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Engineering Insights",
    description:
      "Deep dives into how real software systems work — from authentication flows to API design patterns and backend architecture.",
  },
  {
    icon: Users,
    title: "Mentorship Discussions",
    description:
      "Regular community discussions where aspiring engineers ask questions, share progress, and learn from real-world project experiences.",
  },
  {
    icon: MessageCircle,
    title: "Real System Breakdowns",
    description:
      "I explain the technology behind the products we use every day — not just the theory, but how things are actually built in production.",
  },
];

const MentorshipSection = () => (
  <section id="mentorship" className="py-24 md:py-32 relative">
    <div className="absolute inset-0 bg-gradient-section" />
    <div className="container mx-auto px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-display text-primary tracking-widest uppercase mb-2">
            Learn & Grow
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Mentorship & Learning
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            PinessTech Studio isn't just about building — it's about helping
            people understand how technology works behind the scenes and growing
            the next generation of engineers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group glass glass-hover rounded-xl p-6 space-y-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
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
            YouTube Channel
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
            Join the Mentorship Community
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default MentorshipSection;
