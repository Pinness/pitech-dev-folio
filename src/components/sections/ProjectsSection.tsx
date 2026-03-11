import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Github,
  Server,
  Shield,
  Globe,
  Database,
  Layers,
  ArrowRight,
  Heart,
  MessageSquare,
  Wallet,
} from "lucide-react";

const projects = [
  {
    id: "dexgen",
    title: "Dexgen Electricals",
    subtitle: "Full-Stack Business Platform",
    category: "web",
    overview:
      "A complete digital platform for an electrical services company. The client had zero online presence — no way for customers to discover services, request quotes, or learn about the business. I built a professional platform from the ground up.",
    story:
      "This project started with a simple question: how do you take a traditional business and give it a modern digital identity? The answer wasn't just 'build a website' — it was designing a system where non-technical team members could manage content independently, where SEO and social sharing worked out of the box, and where the architecture could grow with the business.",
    architecture:
      "React SPA with TypeScript, Tailwind CSS for design, and Supabase for backend services. The CMS integration allows real-time content updates. Admin authentication was built with dedicated login flows. Deployed on Vercel with SPA fallback routing.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    highlights: [
      "Designed a CMS that non-technical staff could use to update content in real-time",
      "Built admin authentication with secure login flows",
      "Resolved SPA routing issues on Vercel deployment",
      "Optimized Open Graph meta tags for social sharing and SEO",
    ],
    reflection:
      "Building for non-technical users requires empathy. The CMS architecture taught me to think about content as data — decoupling presentation from management enables faster iterations and less maintenance.",
    github: "https://github.com/Pinness/DexgenElectricals_frontend",
    icon: Globe,
    role: "Solo Developer — designed, built, and deployed the entire platform.",
  },
  {
    id: "healthquest",
    title: "HealthQuest",
    subtitle: "Interactive Public Health Quiz Platform",
    category: "web",
    overview:
      "An interactive HIV and public health quiz platform that turns passive health education into active learning through gamification.",
    story:
      "Public health education often relies on static, uninspiring content. I wanted to explore whether gamification could make learning about HIV — a topic people often avoid — more accessible and memorable. The result was a quiz engine with categories, progress tracking, and achievements.",
    architecture:
      "Flask application with SQLAlchemy ORM and Jinja2 for server-side rendering. The quiz engine implements dynamic question routing by category, progress tracking per session, and a scoring layer. MySQL handles persistent storage.",
    techStack: ["Python", "Flask", "SQLAlchemy", "MySQL", "Jinja2", "Bootstrap"],
    highlights: [
      "Engineered dynamic quiz logic with category-based question routing",
      "Built a gamification system with scoring and achievement tracking",
      "Designed modular architecture for future extensibility",
      "Prioritized inclusive UX across diverse user demographics",
    ],
    reflection:
      "Gamification isn't just about points — it's about making learning feel rewarding. This project taught me how to structure dynamic content delivery and think about user motivation as an engineering concern.",
    github: "https://github.com/Pinness/Health_Quest",
    icon: Heart,
    role: "Solo Developer — designed the full MVP, quiz logic, database schema, and frontend.",
  },
  {
    id: "ai-character",
    title: "AI Character Conversation Platform",
    subtitle: "FastAPI AI Backend Architecture",
    category: "backend",
    overview:
      "An API-only backend that enables users to chat with AI-powered characters — built with clean layered architecture and a stub mode for offline development.",
    story:
      "AI conversation platforms often tightly couple frontend and backend. This project was about building a pure API backend that any frontend could consume. The key challenge: how do you design clean service boundaries between character management, conversation lifecycle, and LLM integration?",
    architecture:
      "Modular FastAPI architecture: api/ (routes), service/ (CharacterService, ConversationService, LLMService, PlatformService orchestrator), model/ (Pydantic schemas), core/ (config, logging). The PlatformService composes domain services. LLM stub mode enables development without external API costs.",
    techStack: ["Python", "FastAPI", "Pydantic", "Groq API", "Pytest"],
    highlights: [
      "Designed a PlatformService orchestrator composing character, conversation, and LLM services",
      "Implemented LLM stub mode for offline development and testing",
      "Built comprehensive test coverage with Pytest",
      "Structured predefined characters via JSON data files",
    ],
    reflection:
      "Clean architecture pays dividends even on smaller projects. The service composition pattern — where a PlatformService orchestrates domain services — is something I now reach for on every backend project.",
    github: "https://github.com/Algorithmia-SE/AI-Character-Conversation-Platform",
    icon: MessageSquare,
    role: "Backend Engineer — architected the service layer, API design, and testing infrastructure.",
  },
  {
    id: "fyenance",
    title: "Fyenance",
    subtitle: "Personal Expense Tracker — Collaborative Project",
    category: "fullstack",
    overview:
      "A full-stack expense tracker with dashboards, budget management, and real-time analytics. Built collaboratively with a team — I focused on the backend.",
    story:
      "This was a collaborative project where I contributed as a backend developer. The team needed someone to build the authentication system, design API contracts, and implement budget logic. Working on a shared codebase taught me the importance of clear documentation and consistent API schemas — when multiple developers build against the same backend, contracts become critical infrastructure.",
    architecture:
      "Django backend with React frontend. JWT authentication secures all endpoints. Auth context manages sessions on the frontend, while global state handles transactions and budgets. PostgreSQL for persistent storage.",
    techStack: ["Django", "React", "JavaScript", "PostgreSQL", "JWT", "REST APIs"],
    highlights: [
      "Implemented JWT authentication with secure token management",
      "Built comprehensive API documentation for frontend integration",
      "Engineered budget logic with real-time analytics",
      "Designed adaptive dashboards for new vs returning users",
    ],
    reflection:
      "Contributing to someone else's codebase teaches you things solo projects never will — especially about API contracts, documentation discipline, and building systems that other developers can trust.",
    github: "https://github.com/STARR44/fyenance",
    icon: Wallet,
    role: "Backend Contributor — built JWT auth, API endpoints, budget logic, and documentation.",
  },
  {
    id: "auth",
    title: "User Authentication System",
    subtitle: "FastAPI Security Microservice",
    category: "backend",
    overview:
      "A production-grade authentication microservice — user registration, login, and dual JWT token management, built from scratch to deeply understand identity systems.",
    story:
      "I built this because I wanted to understand authentication at a fundamental level — not just using a library, but designing the entire flow. What happens when a password is submitted? How are tokens signed? Why do we need both access and refresh tokens? Building it from scratch answered all of these questions.",
    architecture:
      "Clean layered architecture: Routes → Service → Models. FastAPI for routing, Pydantic for validation, SQLModel (on SQLAlchemy) for database models with MySQL. Alembic for schema migrations. Dual JWT tokens (access + refresh) signed with secrets. Passwords hashed with bcrypt.",
    techStack: ["Python", "FastAPI", "MySQL", "SQLModel", "Alembic", "PyJWT", "Bcrypt", "Pydantic"],
    highlights: [
      "Implemented async database sessions with asyncmy for non-blocking I/O",
      "Designed dual-token strategy (access + refresh) for session management",
      "Structured codebase with clean separation: routes, services, schemas, utilities",
      "Managed migrations with Alembic for schema evolution without data loss",
    ],
    reflection:
      "Authentication is never 'simple.' Every decision — token expiry, hashing algorithm, session strategy — has security implications. Building this from scratch deepened my understanding of how identity systems truly work.",
    github: "https://github.com/Pinness/UserAuthentication_fastapi",
    icon: Shield,
    role: "Solo Developer — designed and implemented the complete authentication system.",
  },
  {
    id: "tally",
    title: "Tally Connect",
    subtitle: "Hackathon Backend Architecture",
    category: "backend",
    overview:
      "A modern backend architecture built during a hackathon — demonstrating that good patterns don't slow you down, they accelerate you.",
    story:
      "Hackathons test your ability to make quick architectural decisions under pressure. When the clock is ticking, you learn which patterns actually matter and which are ceremony. This project proved that clean service layers, dependency injection, and Pydantic validation can be set up fast — and they pay for themselves immediately in debugging time saved.",
    architecture:
      "FastAPI with dependency injection for clean route composition. Modular service layers, SQLAlchemy models, and configuration management. Designed for rapid iteration while maintaining clean separation between business logic and transport layers. Containerized with Docker.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Pydantic", "Docker"],
    highlights: [
      "Delivered production-quality architecture within hackathon time constraints",
      "Designed modular patterns that could scale beyond the prototype",
      "Implemented clean API contracts with comprehensive Pydantic validation",
      "Set up containerized deployment for consistent environments",
    ],
    reflection:
      "The key insight from this hackathon: good patterns don't slow you down — they accelerate you. Structure is speed when the pressure is real.",
    github: "https://github.com/Pinness/tally-connect",
    icon: Database,
    role: "Solo Developer — built the entire backend architecture during the hackathon.",
  },
];

const filters = [
  { key: "all", label: "All Projects" },
  { key: "web", label: "Web" },
  { key: "backend", label: "Backend" },
  { key: "fullstack", label: "Full-Stack" },
];

const ProjectsSection = () => {
  const [active, setActive] = useState("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-display text-primary tracking-widest uppercase mb-2">
              Engineering Stories
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Projects I've Built
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Not just what I built — but why, how, and what I learned along
              the way. Click any project to read the full story.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`px-4 py-2 text-sm rounded-lg font-display transition-all duration-300 ${
                  active === f.key
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground glass"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Project cards */}
          <div className="space-y-6">
            {filtered.map((project) => {
              const isOpen = expanded === project.id;
              return (
                <div
                  key={project.id}
                  className="glass glass-hover rounded-xl overflow-hidden transition-all duration-500"
                >
                  {/* Header */}
                  <div
                    className="p-6 md:p-8 cursor-pointer group"
                    onClick={() => setExpanded(isOpen ? null : project.id)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <project.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {project.subtitle}
                        </p>
                      </div>
                      <div className="hidden sm:flex flex-wrap gap-2">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs border-border/50"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <ArrowRight
                        className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                      {project.overview}
                    </p>
                  </div>

                  {/* Expanded — the engineering story */}
                  {isOpen && (
                    <div className="px-6 md:px-8 pb-8 space-y-8 border-t border-border/30 pt-6 animate-fade-in">
                      {/* The Story */}
                      <div className="space-y-3">
                        <h4 className="font-display font-semibold text-primary text-sm uppercase tracking-wider">
                          The Story
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.story}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <h4 className="font-display font-semibold text-primary text-sm uppercase tracking-wider">
                            Architecture
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {project.architecture}
                          </p>
                        </div>
                        <div className="space-y-3">
                          <h4 className="font-display font-semibold text-primary text-sm uppercase tracking-wider">
                            My Role
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {project.role}
                          </p>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-3">
                        <h4 className="font-display font-semibold text-primary text-sm uppercase tracking-wider">
                          Engineering Highlights
                        </h4>
                        <ul className="grid md:grid-cols-2 gap-3">
                          {project.highlights.map((h, i) => (
                            <li
                              key={i}
                              className="flex gap-3 text-sm text-muted-foreground"
                            >
                              <Layers className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech stack */}
                      <div className="space-y-3">
                        <h4 className="font-display font-semibold text-primary text-sm uppercase tracking-wider">
                          Full Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Reflection */}
                      <div className="space-y-3">
                        <h4 className="font-display font-semibold text-primary text-sm uppercase tracking-wider">
                          Reflection
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed italic border-l-2 border-primary/30 pl-4">
                          {project.reflection}
                        </p>
                      </div>

                      <Button
                        variant="outline"
                        onClick={() => window.open(project.github, "_blank")}
                        className="gap-2 font-display"
                      >
                        <Github className="w-4 h-4" />
                        View on GitHub
                      </Button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
