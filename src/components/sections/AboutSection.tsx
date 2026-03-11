import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatarImg from "@/assets/1752184730238.jpg";

const AboutSection = () => (
  <section id="about" className="py-24 md:py-32 relative">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-16 items-center">
        {/* Image */}
        <div className="lg:col-span-2 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-accent rounded-2xl opacity-20 blur group-hover:opacity-30 transition-opacity duration-500" />
            <img
              src={avatarImg}
              alt="Happiness Adam — PinessTech Studio founder"
              className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl object-cover shadow-card"
            />
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3 space-y-6">
          <div>
            <p className="text-sm font-display text-primary tracking-widest uppercase mb-2">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight">
              The Engineer Behind{" "}
              <span className="text-gradient">PinessTech Studio</span>
            </h2>
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm Happiness Adam — a software engineer passionate about building
              systems that work beautifully on the surface and are robust behind
              the hood. PinessTech Studio is the home for that mission: engineering
              modern digital products, helping businesses and startups build
              reliable platforms, and explaining the technology that powers them.
            </p>
            <p>
              With a foundation in Economics and full-stack software engineering,
              I bring analytical thinking to every architecture decision. I've
              designed secure authentication systems, built scalable APIs with
              FastAPI and Django, engineered real-time backends, and delivered
              complete web platforms — always with an eye on clean code, security,
              and the end user's experience.
            </p>
            <p>
              Beyond building, I'm deeply committed to teaching technology. I
              break down complex systems — authentication flows, API architecture,
              backend infrastructure — so that aspiring engineers and curious
              minds can understand how things truly work behind the scenes.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="/HAPPINESS ADAM-Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-display text-sm font-medium hover:shadow-glow transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Download Résumé
            </a>
            <Button
              variant="outline"
              onClick={() =>
                window.open("https://www.linkedin.com/in/pinessjw-adam", "_blank")
              }
              className="gap-2 font-display"
            >
              <ExternalLink className="w-4 h-4" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
