import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import avatarImg from "@/assets/1752184730238.jpg";
import TechStackSection from "@/components/sections/TechStackSection";

const About = () => (
  <PageLayout>
    <section className="pt-32 pb-24 md:pb-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-16 items-start">
          {/* Image */}
          <div className="lg:col-span-2 flex justify-center lg:sticky lg:top-32">
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
                The Journey
              </p>
              <h1 className="text-3xl md:text-4xl font-display font-bold leading-tight">
                The Engineer Behind{" "}
                <span className="text-gradient">PinessTech Studio</span>
              </h1>
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Technology has always fascinated me — not just using it, but
                understanding what really happens behind the scenes.
              </p>
              <p>
                When you open a website and it loads instantly… When you log
                into an application and it recognizes you… When two systems
                communicate seamlessly through APIs…
              </p>
              <p>
                Most people simply experience the result. I became curious
                about how it actually works.
              </p>
              <p>
                That curiosity slowly pulled me deeper into the world of
                software engineering. I started exploring how systems are
                structured, how databases retrieve information, how
                authentication works, and how modern applications scale to
                serve thousands — sometimes millions — of users.
              </p>
              <p>
                What began as curiosity soon turned into building real
                systems. Websites. Applications. Authentication systems.
                Backend architectures.
              </p>
              <p>
                Each project became an opportunity to understand technology
                not just at the surface level, but at the architectural level.
              </p>
              <p>
                Studying Economics gave me analytical thinking, and full-stack
                software engineering gave me the tools to build things that
                actually work. Over time, that curiosity turned into building
                real systems, experimenting with architectures, and helping
                others understand how technology truly works.
              </p>
              <p>
                That's what led to PinessTech Studio — a space where digital
                platforms are engineered, systems are built and tested, and
                technology is explained in ways that make sense.
              </p>
              <p>
                Beyond building, I'm deeply committed to teaching. I break
                down complex systems — authentication flows, API architecture,
                backend infrastructure — so that aspiring engineers and
                curious minds can understand how things truly work behind the
                hood.
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
                  window.open(
                    "https://www.linkedin.com/in/pinessjw-adam",
                    "_blank"
                  )
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

    {/* Tech Stack on About page */}
    <TechStackSection />
  </PageLayout>
);

export default About;
