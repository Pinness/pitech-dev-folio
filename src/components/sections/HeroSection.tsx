import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-primary/3 blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="space-y-8">
          {/* Main heading */}
          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight animate-fade-in"
          >
            Engineering Modern Digital
            <br />
            Products That Work —
            <br />
            <span className="text-gradient">Inside and Behind the Hood.</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            PinessTech Studio builds modern websites, develops scalable web
            applications, engineers robust backend systems, helps startups
            launch digital platforms, and teaches how technology works behind
            the scenes.
          </p>

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            <Button
              size="lg"
              onClick={() => scrollTo("projects")}
              className="font-display text-base gap-2 group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollTo("contact")}
              className="font-display text-base"
            >
              Start a Project
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() =>
                window.open(
                  "https://chat.whatsapp.com/L8k7rTVTky66Bzev3KjVK0?mode=gi_t",
                  "_blank"
                )
              }
              className="font-display text-base text-primary hover:text-primary"
            >
              Join the Mentorship Community
            </Button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSection;
