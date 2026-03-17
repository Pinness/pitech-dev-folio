import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import avatarImg from "@/assets/1752184730238.jpg";
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
import PageLayout from "@/components/PageLayout";

const projects = [
  {
    id: "dexgen",
    title: "Dexgen Engineering Solutions",
    subtitle: "Building a High-Performance Digital Gateway for Engineering Services",
    category: "web",
    overview:
      "A complete digital platform for an engineering services company — professional web presence with CMS, admin authentication, and SEO optimization built from the ground up.",
    challenge:
      "The client had zero online presence — no way for customers to discover services, request quotes, or learn about the business. Standard website builders couldn't handle the content management requirements.",
    solution:
      "I designed and built a professional platform where non-technical team members could manage content independently, SEO and social sharing worked out of the box, and the architecture could grow with the business.",
    architecture:
      "React SPA with TypeScript, Tailwind CSS for design, and Supabase for backend services. The CMS integration allows real-time content updates. Admin authentication with dedicated login flows. Deployed on Vercel with SPA fallback routing.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    highlights: [
      "Designed a CMS that non-technical staff could use to update content in real-time",
      "Built admin authentication with secure login flows",
      "Resolved SPA routing issues on Vercel deployment",
      "Optimized Open Graph meta tags for social sharing and SEO",
    ],
    outcome:
      "The platform transformed the client's business visibility — they went from zero digital presence to a professional, searchable, shareable web platform that the team manages independently.",
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
    challenge:
      "Public health education often relies on static, uninspiring content. People avoid engaging with sensitive topics like HIV because the delivery feels clinical and impersonal.",
    solution:
      "I built a quiz engine that gamifies learning — categories, progress tracking, achievements, and scoring make health education feel rewarding rather than obligatory.",
    architecture:
      "Flask application with SQLAlchemy ORM and Jinja2 for server-side rendering. Dynamic question routing by category, progress tracking per session, and a scoring layer. MySQL handles persistent storage.",
    techStack: ["Python", "Flask", "SQLAlchemy", "MySQL", "Jinja2", "Bootstrap"],
    highlights: [
      "Engineered dynamic quiz logic with category-based question routing",
      "Built a gamification system with scoring and achievement tracking",
      "Designed modular architecture for future extensibility",
      "Prioritized inclusive UX across diverse user demographics",
    ],
    outcome:
      "The platform demonstrated that gamification significantly increases engagement with health education content — users completed more quizzes and retained more information.",
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
    challenge:
      "AI conversation platforms often tightly couple frontend and backend. The challenge was building a pure API backend that any frontend could consume while keeping clean service boundaries between character management, conversation lifecycle, and LLM integration.",
    solution:
      "Modular FastAPI architecture with a PlatformService that composes domain services. LLM stub mode enables development without external API costs.",
    architecture:
      "Modular FastAPI: api/ (routes), service/ (CharacterService, ConversationService, LLMService, PlatformService orchestrator), model/ (Pydantic schemas), core/ (config, logging).",
    techStack: ["Python", "FastAPI", "Pydantic", "Groq API", "Pytest"],
    highlights: [
      "Designed a PlatformService orchestrator composing character, conversation, and LLM services",
      "Implemented LLM stub mode for offline development and testing",
      "Built comprehensive test coverage with Pytest",
      "Structured predefined characters via JSON data files",
    ],
    outcome:
      "Clean architecture enabled rapid iteration — the service composition pattern made it trivial to swap LLM providers, add new character types, and extend conversation features.",
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
      "A full-stack expense tracker with dashboards, budget management, and real-time analytics. Built collaboratively — I contributed as a backend developer.",
    challenge:
      "The team needed someone to build the authentication system, design API contracts, and implement budget logic. When multiple developers build against the same backend, contracts become critical infrastructure.",
    solution:
      "I built JWT authentication, comprehensive API documentation, budget logic with real-time analytics, and adaptive dashboards — ensuring the frontend team could integrate without friction.",
    architecture:
      "Django backend with React frontend. JWT authentication secures all endpoints. Auth context manages sessions on the frontend, while global state handles transactions and budgets. PostgreSQL for persistent storage.",
    techStack: ["Django", "React", "JavaScript", "PostgreSQL", "JWT", "REST APIs"],
    highlights: [
      "Implemented JWT authentication with secure token management",
      "Built comprehensive API documentation for frontend integration",
      "Engineered budget logic with real-time analytics",
      "Designed adaptive dashboards for new vs returning users",
    ],
    outcome:
      "Contributing to someone else's codebase taught things solo projects never will — especially about API contracts, documentation discipline, and building systems that other developers can trust.",
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
    challenge:
      "Understanding authentication at a fundamental level — not just using a library, but designing the entire flow from password hashing to token signing to session management.",
    solution:
      "Clean layered architecture: Routes → Service → Models. Dual JWT tokens (access + refresh) signed with secrets. Passwords hashed with bcrypt. Async database sessions for non-blocking I/O.",
    architecture:
      "FastAPI for routing, Pydantic for validation, SQLModel (on SQLAlchemy) for database models with MySQL. Alembic for schema migrations.",
    techStack: ["Python", "FastAPI", "MySQL", "SQLModel", "Alembic", "PyJWT", "Bcrypt", "Pydantic"],
    highlights: [
      "Implemented async database sessions with asyncmy for non-blocking I/O",
      "Designed dual-token strategy (access + refresh) for session management",
      "Structured codebase with clean separation: routes, services, schemas, utilities",
      "Managed migrations with Alembic for schema evolution without data loss",
    ],
    outcome:
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
    challenge:
      "Hackathons test your ability to make quick architectural decisions under pressure. The question: can you ship production-quality patterns within time constraints?",
    solution:
      "FastAPI with dependency injection, modular service layers, SQLAlchemy models, and comprehensive Pydantic validation. Containerized with Docker for consistent deployment.",
    architecture:
      "FastAPI with dependency injection for clean route composition. Modular service layers and configuration management. Designed for rapid iteration while maintaining clean separation between business logic and transport layers.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Pydantic", "Docker"],
    highlights: [
      "Delivered production-quality architecture within hackathon time constraints",
      "Designed modular patterns that could scale beyond the prototype",
      "Implemented clean API contracts with comprehensive Pydantic validation",
      "Set up containerized deployment for consistent environments",
    ],
    outcome:
      "The key insight: good patterns don't slow you down — they accelerate you. Structure is speed when the pressure is real.",
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

const Projects = () => {
  const [active, setActive] = useState("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <PageLayout>
      <section className="pt-32 pb-24 md:pb-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-display text-primary tracking-widest uppercase mb-2">
                Engineering Stories
              </p>
              <h1 className="text-3xl md:text-4xl font-display font-bold">
                Projects I've Built
              </h1>
              <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
                Not just what I built — but why, how, and what I learned along
                the way. Click any project to read the full case study.
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
                          <h2 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h2>
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

                    {/* Expanded case study */}
                    {isOpen && (
                      <div className="px-6 md:px-8 pb-8 space-y-8 border-t border-border/30 pt-6 animate-fade-in">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <h3 className="font-display font-semibold text-primary text-sm uppercase tracking-wider">
                              The Challenge
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {project.challenge}
                            </p>
                          </div>
                          <div className="space-y-3">
                            <h3 className="font-display font-semibold text-primary text-sm uppercase tracking-wider">
                              The Solution
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {project.solution}
                            </p>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <h3 className="font-display font-semibold text-primary text-sm uppercase tracking-wider">
                              Architecture
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {project.architecture}
                            </p>
                          </div>
                          <div className="space-y-3">
                            <h3 className="font-display font-semibold text-primary text-sm uppercase tracking-wider">
                              My Role
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {project.role}
                            </p>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="space-y-3">
                          <h3 className="font-display font-semibold text-primary text-sm uppercase tracking-wider">
                            Key Features & Highlights
                          </h3>
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
                          <h3 className="font-display font-semibold text-primary text-sm uppercase tracking-wider">
                            Technical Stack
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Outcome */}
                        <div className="space-y-3">
                          <h3 className="font-display font-semibold text-primary text-sm uppercase tracking-wider">
                            Outcome
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed italic border-l-2 border-primary/30 pl-4">
                            {project.outcome}
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
    </PageLayout>
  );
};

export default Projects;
