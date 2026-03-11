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
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          {/* Greeting */}
          <p
            className="text-sm font-display text-primary tracking-widest uppercase animate-fade-in"
          >
            Welcome to PinessTech Studio
          </p>

          {/* Main heading */}
          <h1
            className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight animate-fade-in"
          >
            Engineering digital platforms.
            <br />
            Exploring how technology works
            <br />
            <span className="text-gradient">behind the hood.</span>
          </h1>

          {/* Subtitle — warm, personal */}
          <p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            I build modern websites, develop scalable web applications,
            engineer backend systems, help startups launch digital platforms
            — and explain how it all works so others can learn too.
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
              Explore Engineering Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollTo("contact")}
              className="font-display text-base"
            >
              Let's Build Something
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
              Join the Learning Community
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
