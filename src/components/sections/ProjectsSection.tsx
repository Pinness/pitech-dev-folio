import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Github,
  ExternalLink,
  Server,
  Shield,
  Globe,
  Database,
  Layers,
  ArrowRight,
} from "lucide-react";

const projects = [
  {
    id: "dexgen",
    title: "Dexgen Electricals",
    subtitle: "Full-Stack Business Platform",
    category: "web",
    overview:
      "A complete digital platform for an electrical services company — designed to establish online presence, manage service listings, and enable customer engagement through a modern, responsive interface.",
    problem:
      "The client had no digital presence. Customers couldn't discover services, request quotes, or learn about the company online. The business needed a professional platform that could scale with CMS capabilities for non-technical team members.",
    architecture:
      "Built as a React SPA with TypeScript and Tailwind CSS, integrated with Supabase for backend services. The architecture separates concerns with a component-driven frontend, Supabase Edge Functions for server logic, and a real-time CMS for content management. Admin authentication was implemented with a dedicated login system.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    challenges: [
      "Designed a CMS integration allowing non-technical staff to update content in real-time without developer intervention",
      "Implemented admin authentication with secure login flows",
      "Resolved client-side routing issues on Vercel deployment (SPA fallback configuration)",
      "Optimized Open Graph meta tags for social sharing and SEO",
    ],
    lessons:
      "Building for non-technical users requires empathy-driven UX. The CMS architecture taught me to think about content as data — decoupling presentation from content management enables faster iterations and reduces maintenance overhead.",
    github: "https://github.com/Pinness/DexgenElectricals_frontend",
    icon: Globe,
  },
  {
    id: "auth",
    title: "User Authentication System",
    subtitle: "FastAPI Security Architecture",
    category: "backend",
    overview:
      "A production-grade authentication microservice built with FastAPI, implementing secure user registration, login, and JWT token management — designed to be consumed by frontend applications or other microservices.",
    problem:
      "Modern applications need robust identity management. This project addresses the need for a reusable, async-first authentication module that handles user identity with security best practices — password hashing, token-based auth, and proper session management.",
    architecture:
      "The service follows a clean layered architecture: Routes → Service → Models. FastAPI handles request routing and validation via Pydantic schemas. SQLModel (built on SQLAlchemy) manages database models with MySQL. Alembic handles schema migrations. The auth flow issues dual JWT tokens (access + refresh) signed with a secret key, and passwords are hashed with bcrypt before storage.",
    techStack: [
      "Python",
      "FastAPI",
      "MySQL",
      "SQLModel",
      "Alembic",
      "PyJWT",
      "Bcrypt",
      "Pydantic",
    ],
    challenges: [
      "Implemented async database sessions with asyncmy for non-blocking I/O operations",
      "Designed a dual-token strategy (access + refresh) for secure session management",
      "Structured the codebase with separation of concerns: routes, services, schemas, and utilities",
      "Managed database migrations with Alembic for schema evolution without data loss",
    ],
    lessons:
      "Authentication is never 'simple.' Every decision — token expiry, password hashing algorithm, session strategy — has security implications. Building this from scratch deepened my understanding of how identity systems work behind the hood, from bcrypt rounds to JWT claims and token rotation patterns.",
    github: "https://github.com/Pinness/UserAuthentication_fastapi",
    icon: Shield,
  },
  {
    id: "tally",
    title: "Tally Connect",
    subtitle: "Hackathon Backend Architecture",
    category: "backend",
    overview:
      "A modern backend architecture built during a hackathon, demonstrating rapid API development with FastAPI and clean architectural patterns for a fintech-adjacent data platform.",
    problem:
      "Hackathon challenge requiring a functional backend within tight time constraints. The system needed to handle data connections, user management, and API integrations with a well-structured codebase that could scale beyond the hackathon.",
    architecture:
      "Leveraged FastAPI's dependency injection system for clean route composition. Structured with modular service layers, database models, and configuration management. Designed for rapid iteration while maintaining clean separation between business logic and transport layers.",
    techStack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Pydantic",
      "Docker",
    ],
    challenges: [
      "Delivered a production-quality architecture within hackathon time constraints",
      "Designed modular service patterns that could scale beyond the initial prototype",
      "Implemented clean API contracts with comprehensive Pydantic validation",
      "Set up containerized deployment for consistent development environments",
    ],
    lessons:
      "Hackathons test your ability to make quick architectural decisions. The key insight: good patterns don't slow you down — they accelerate you. Starting with clean separation pays off even under time pressure.",
    github: "https://github.com/Pinness/tally-connect",
    icon: Database,
  },
];

const filters = [
  { key: "all", label: "All" },
  { key: "web", label: "Web Development" },
  { key: "backend", label: "Backend Systems" },
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
              Case Studies
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Engineering Stories
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Not just what I built — but the thinking, architecture, and
              decisions behind each project.
            </p>
          </div>

          {/* Filters */}
          <div className="flex justify-center gap-3 mb-12">
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
          <div className="space-y-8">
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
                      <div className="flex flex-wrap gap-2">
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

                  {/* Expanded content */}
                  {isOpen && (
                    <div className="px-6 md:px-8 pb-8 space-y-8 border-t border-border/30 pt-6 animate-fade-in">
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Problem */}
                        <div className="space-y-3">
                          <h4 className="font-display font-semibold text-primary text-sm uppercase tracking-wider">
                            The Problem
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {project.problem}
                          </p>
                        </div>

                        {/* Architecture */}
                        <div className="space-y-3">
                          <h4 className="font-display font-semibold text-primary text-sm uppercase tracking-wider">
                            Architecture
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {project.architecture}
                          </p>
                        </div>
                      </div>

                      {/* Challenges */}
                      <div className="space-y-3">
                        <h4 className="font-display font-semibold text-primary text-sm uppercase tracking-wider">
                          Engineering Challenges & Solutions
                        </h4>
                        <ul className="grid md:grid-cols-2 gap-3">
                          {project.challenges.map((c, i) => (
                            <li
                              key={i}
                              className="flex gap-3 text-sm text-muted-foreground"
                            >
                              <Layers className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech stack full */}
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

                      {/* Lessons */}
                      <div className="space-y-3">
                        <h4 className="font-display font-semibold text-primary text-sm uppercase tracking-wider">
                          Lessons Learned
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed italic border-l-2 border-primary/30 pl-4">
                          {project.lessons}
                        </p>
                      </div>

                      {/* Link */}
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
