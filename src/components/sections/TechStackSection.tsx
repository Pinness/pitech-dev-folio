const categories = [
  {
    label: "Frontend",
    color: "from-blue-500/20 to-cyan-500/20",
    techs: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Shadcn/UI", level: 85 },
    ],
  },
  {
    label: "Backend",
    color: "from-amber-500/20 to-orange-500/20",
    techs: [
      { name: "Python", level: 90 },
      { name: "FastAPI", level: 85 },
      { name: "Django", level: 80 },
      { name: "Flask", level: 80 },
    ],
  },
  {
    label: "Database",
    color: "from-emerald-500/20 to-green-500/20",
    techs: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Supabase", level: 85 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    label: "DevOps & Tools",
    color: "from-purple-500/20 to-pink-500/20",
    techs: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "Vercel", level: 85 },
      { name: "CI/CD", level: 70 },
    ],
  },
];

const TechStackSection = () => (
  <section id="stack" className="py-24 md:py-32 relative">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-display text-primary tracking-widest uppercase mb-2">
            Technology
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Tools & Stack
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div key={cat.label} className="glass rounded-xl p-6 space-y-5">
              <h3 className="font-display text-lg font-semibold text-foreground">
                {cat.label}
              </h3>
              <div className="space-y-4">
                {cat.techs.map((tech) => (
                  <div key={tech.name} className="space-y-1.5">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground font-medium">
                        {tech.name}
                      </span>
                      <span className="text-muted-foreground">{tech.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-accent transition-all duration-1000"
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TechStackSection;
