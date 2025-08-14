import emailjs from "emailjs-com";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  Download,
  ExternalLink,
  Code,
  Database,
  Server,
  Globe,
  Users,
  Target,
  ChevronDown,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Briefcase,
} from "lucide-react";
import heroBackground from "@/assets/1752184730238.jpg";
import avatarPlaceholder from "@/assets/1752184730238.jpg";
import pitechLogo from "@/assets/pitech-logo.jpg";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const skills = {
    technical: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Flask",
      "Django",
      "React",
      "Firebase",
      "PostgreSQL",
      "Redis",
      "REST APIs",
      "JWT Auth",
      "Git",
      "CI/CD",
      "Unit Testing",
      "Agile",
    ],
    professional: [
      "Analytic Thinking",
      "Adaptability",
      "Team Collaboration",
      "Attention to Detail",
      "User-Centric Mindset",
      "Problem Solving",
    ],
  };

  const projects = [
    {
      id: 1,
      title: "HealthQuest",
      subtitle: "Interactive HIV & Public Health Quiz Web App",
      role: "Solo Developer",
      stack: ["Flask", "SQLAlchemy", "Bootstrap", "Jinja2", "Python"],
      category: "web-app",
      github: "https://github.com/Pinness/Health_Quest",
      highlights: [
        "REST API Development",
        "Full-Stack Implementation",
        "Gamification",
        "User-Centered Design",
      ],
      description:
        "Led the end-to-end development of HealthQuest, an interactive web application for public health education. Architected the backend using Flask and SQLAlchemy, implemented dynamic quiz logic, and designed the full-stack user experience with Bootstrap and Jinja2. Prioritized modularity, scalability, and accessibility, ensuring the platform could support diverse user needs and future feature expansion.",
    },
    {
      id: 2,
      title: "Fyenance",
      subtitle: "Personal Expense Tracker Web App",
      role: "Backend Developer",
      stack: ["Django", "React", "JavaScript", "PostgreSQL", "JWT"],
      category: "backend",
      github: "https://github.com/STARR44/fyenance",
      highlights: [
        "Secure Authentication",
        "REST APIs",
        "Financial Data Management",
        "Documentation",
      ],
      description:
        "Built user authentication (JWT), robust backend logic, and comprehensive API documentation. Enabled real-time analytics, currency updates, and seamless frontend-backend integration.",
    },
    {
      id: 3,
      title: "JechSpace",
      subtitle: "Workspace Management System",
      role: "Backend Engineer",
      stack: ["Django", "MySQL", "JWT Auth", "Celery", "Redis", "Twilio"],
      category: "backend",
      github: "https://github.com/orgs/JechSpace",
      highlights: [
        "JWT Authentication",
        "RBAC",
        "Notifications",
        "Agile Collaboration",
      ],
      description:
        "Developed and maintained key backend components for JechSpace, a workspace management system. Implemented advanced authentication mechanisms (JWT, RBAC), architected Redis-driven booking workflows, and integrated Twilio for automated notifications. Played a central role in Agile team collaboration, ensuring timely delivery of features and scalable, production-ready infrastructure..",
    },
  ];

  const experience = [
    {
      title: "Backend Developer",
      company: "JechSpace",
      location: "Remote",
      period: "Mar 2025 – Present",
      description:
        "JWT authentication, RBAC implementation, Twilio integration, booking logic optimization, and Agile sprint collaboration.",
      technologies: ["Django", "MySQL", "JWT", "Celery", "Redis", "Twilio"],
    },
    {
      title: "Full Stack Developer",
      company: "HealthQuest (ALX Capstone)",
      location: "Remote",
      period: "Jul – Aug 2024",
      description:
        "Flask application development, SQLAlchemy integration, gamified quiz system design, modular architecture, and inclusive UX implementation.",
      technologies: ["Flask", "SQLAlchemy", "Bootstrap", "Jinja2"],
    },
    {
      title: "Backend Contributor",
      company: "Fyenance",
      location: "Remote",
      period: "Nov 2024 – Jan 2025",
      description:
        "Django JWT implementation, analytics development, comprehensive API documentation, and budget logic optimization.",
      technologies: ["Django", "React", "PostgreSQL", "JWT"],
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    setSent(false);

    const serviceID = "service_vgr8hln";
    const templateID = "template_8brao6m";
    const userID = "OsVg5fLUdBewTe41Q";

    try {
      await emailjs.send(serviceID, templateID, form, userID);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Please try again.");
    }
    setSending(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
              Happiness Adam
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Software Engineer & Web Developer
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              I craft web solutions that resonate, empower, and make a
              difference. Let’s build something remarkable together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="animate-slide-up"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="animate-slide-up"
              >
                Let’s Connect & Collaborate!
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown
            className="w-8 h-8 text-muted-foreground cursor-pointer hover:text-primary transition-colors"
            onClick={() => scrollToSection("about")}
          />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-20 bg-gradient-section ${
          isVisible.about ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                The Person Behind the Solution
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="text-lg text-muted-foreground leading-relaxed">
                  <p>
                    👋 Hi, I’m Happiness Adam, a Fullstack Developer passionate
                    about helping businesses and startups grow with smart,
                    reliable, and easy-to-use web solutions.
                  </p>
                  <p className="mt-4 font-semibold">Here’s what I do best:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      Create custom websites and web apps that truly tell your
                      brand’s story.
                    </li>
                    <li>
                      Build secure login systems for data and user protection.
                    </li>
                    <li>
                      Develop powerful APIs for seamless growth and integration.
                    </li>
                    <li>
                      Set up real-time analytics, notifications, and automation
                      to keep you ahead.
                    </li>
                    <li>
                      Make everything easy to use, scalable, and future-ready.
                    </li>
                  </ul>
                  <p className="mt-4">
                    Partnering with me means less worry about tech
                    headaches—just solutions that help your business goals
                    become reality.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  {/* Download Resume Button */}
                  <a
                    href="/resume.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg shadow-elegant hover:shadow-glow transition-all"
                    style={{ textDecoration: "none" }}
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>

                  {/* View LinkedIn Button */}
                  <Button
                    variant="outline"
                    className="flex items-center gap-2"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/pinessjw-adam",
                        "_blank"
                      )
                    }
                  >
                    <ExternalLink className="w-4 h-4" />
                    View LinkedIn
                  </Button>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src={avatarPlaceholder}
                    alt="Happiness Adam"
                    className="w-80 h-80 rounded-2xl shadow-elegant object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-20 ${
          isVisible.skills ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Skills & Technologies
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Code className="w-6 h-6 text-primary" />
                    Technical Stack
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {skills.technical.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Users className="w-6 h-6 text-primary" />
                    Professional Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {skills.professional.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-sm py-2 px-4 hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 bg-gradient-section ${
          isVisible.projects ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>

              {/* Project Filters */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {[
                  { key: "all", label: "All Projects" },
                  { key: "web-app", label: "Web Applications" },
                  { key: "backend", label: "Backend Systems" },
                ].map((filter) => (
                  <Button
                    key={filter.key}
                    variant={
                      activeFilter === filter.key ? "default" : "outline"
                    }
                    onClick={() => setActiveFilter(filter.key)}
                    className="transition-all duration-300"
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="group shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div className="space-y-1">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-sm font-medium">
                          {project.subtitle}
                        </CardDescription>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => window.open(project.github, "_blank")}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {project.role}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold mb-2">
                          Tech Stack:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold mb-2">
                          Key Highlights:
                        </h4>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {project.highlights.map(
                            (highlight, highlightIndex) => (
                              <li
                                key={highlightIndex}
                                className="flex items-center gap-2"
                              >
                                <Target className="w-3 h-3 text-primary flex-shrink-0" />
                                {highlight}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full mt-4"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`py-20 ${
          isVisible.experience ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Experience & Education
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Experience */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-primary" />
                  Professional Experience
                </h3>
                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <Card
                      key={index}
                      className="shadow-card hover:shadow-elegant transition-all duration-300"
                    >
                      <CardHeader>
                        <div className="flex justify-between items-start flex-wrap gap-2">
                          <div>
                            <CardTitle className="text-lg">
                              {exp.title}
                            </CardTitle>
                            <CardDescription className="text-primary font-medium">
                              {exp.company}
                            </CardDescription>
                          </div>
                          <div className="text-right text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1 mt-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-primary" />
                  Education & Certifications
                </h3>
                <div className="space-y-8">
                  <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        ALX Software Engineering Program
                      </CardTitle>
                      <CardDescription>2024 – 2025</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        Comprehensive full-stack development program covering
                        API engineering, authentication systems, scalable
                        architecture, and Agile methodologies.
                      </p>
                      <div className="flex items-center gap-2 text-primary">
                        <Award className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          Software Engineering Certificate
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Bachelor's Degree in Economics
                      </CardTitle>
                      <CardDescription>
                        University of Uyo • 2009 – 2016
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        Strong foundation in analytical thinking, data analysis,
                        and economic modeling, providing valuable perspective
                        for technology solutions.
                      </p>
                      <div className="flex items-center gap-2 text-primary">
                        <Award className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          Bachelor's Degree
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 bg-gradient-section ${
          isVisible.contact ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Let's Connect
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto mb-4"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Say Hello!
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="w-5 h-5" />
                      <span>+234 8104 947 058</span>
                    </div>
                    <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="w-5 h-5" />
                      <span>adamhappinessjw@gmail.com</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Kindly Follow Me
                  </h4>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/pinessjw-adam",
                          "_blank"
                        )
                      }
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        window.open("https://github.com/Pinness", "_blank")
                      }
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        window.open("https://x.com/LadyPiness", "_blank")
                      }
                    >
                      <Twitter className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>Send Me a Message</CardTitle>
                  <CardDescription>
                    I'd love to hear about your project ideas and collaboration
                    opportunities.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={sendEmail}>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground">
                          Name
                        </label>
                        <Input
                          name="name"
                          value={form.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground">
                          Email
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className="mt-1"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">
                        Subject
                      </label>
                      <Input
                        name="subject"
                        value={form.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        value={form.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or idea..."
                        rows={5}
                        className="mt-1"
                        required
                      />
                    </div>
                    <Button
                      variant="hero"
                      className="w-full"
                      type="submit"
                      disabled={sending}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {sending ? "Sending..." : "Send Message"}
                    </Button>
                    {sent && (
                      <div className="mt-4 text-green-600 text-center">
                        Message sent! I'll get back to you soon.
                      </div>
                    )}
                    {error && (
                      <div className="mt-4 text-red-600 text-center">
                        {error}
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={pitechLogo}
                    alt="PiTech Logo"
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="text-xl font-bold">PinsTech</span>
                </div>
                <p className="text-sm opacity-90">
                  Building inclusive technology that empowers communities and
                  drives meaningful impact.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2 text-sm">
                  <button
                    onClick={() => scrollToSection("about")}
                    className="block hover:text-primary transition-colors"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection("skills")}
                    className="block hover:text-primary transition-colors"
                  >
                    Skills
                  </button>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="block hover:text-primary transition-colors"
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="block hover:text-primary transition-colors"
                  >
                    Contact
                  </button>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <div className="space-y-2 text-sm">
                  <div>+234 8104 947 058</div>
                  <div>happiness@pitech.dev</div>
                  <div className="flex gap-3 mt-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/pinessjw-adam",
                          "_blank"
                        )
                      }
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        window.open("https://github.com/Pinness", "_blank")
                      }
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        window.open("https://x.com/LadyPiness", "_blank")
                      }
                    >
                      <Twitter className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="mb-8 opacity-20" />

            <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-90">
              <div>© 2025 Happiness Adam | PinsTech. All rights reserved.</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
