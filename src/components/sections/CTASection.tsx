import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

const CTASection = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-section" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
            Ready to build your{" "}
            <span className="text-gradient">next digital product?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            If you're building a startup, business platform, or digital product
            and want it engineered properly — PinessTech Studio can help you
            build it. From architecture to deployment, every detail matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollTo("contact")}
              className="font-display text-base gap-2 group"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollTo("contact")}
              className="font-display text-base gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Discuss Your Idea
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
