import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import avatarImg from "@/assets/1752184730238.jpg";
import {
  ArrowRight,
  Box,
  CreditCard,
  Zap,
  Link2,
  Briefcase,
  Target,
  Database,
  LayoutDashboard,
  Shield,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";

const services = [
  {
    icon: Box,
    title: "Custom Digital Products",
    problem:
      "\"I have a unique business idea, but standard website builders (Wix/WordPress) can't handle the complex logic I need.\"",
    solution:
      "I build your entire product from the database to the \"Buy Now\" button. You get a finished, polished site that is ready to launch.",
  },
  {
    icon: CreditCard,
    title: "Seamless Payment Integrations",
    problem:
      "\"I'm losing revenue because my checkout process is buggy, and I'm worried about the security of my customers' financial data.\"",
    solution:
      "I build rock-solid payment flows that handle taxes, receipts, and subscriptions automatically. Your customers get a \"one-click\" experience, and you get paid without the technical drama.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    problem:
      "\"Your site feels sluggish, and customers are leaving before the page loads.\"",
    solution:
      "I find the bottlenecks in your code and database and optimize performance so your site loads quickly and keeps visitors engaged.",
  },
  {
    icon: Link2,
    title: "App & Tool Integration",
    problem:
      "\"You're wasting hours manually moving data between your website, Stripe, and your CRM.\"",
    solution:
      "I write the API connections that allow your systems to communicate automatically.",
  },
  {
    icon: Briefcase,
    title: "High-End Portfolio Websites",
    problem:
      "\"You have the skills to land high-ticket clients but your online presence doesn't reflect your authority.\"",
    solution:
      "I build high-end custom portfolios that act as a 24/7 digital salesperson.",
  },
  {
    icon: Target,
    title: "High-Conversion Landing Pages",
    problem:
      "\"Your ads get clicks but your landing page fails to capture leads.\"",
    solution:
      "I build high-performance landing pages with robust backend systems that capture every lead reliably.",
  },
  {
    icon: Database,
    title: "Database Cleanup & Migration",
    problem:
      "\"Your data is disorganized or trapped in outdated systems.\"",
    solution:
      "I restructure and migrate your data into a clean, modern backend system.",
  },
  {
    icon: LayoutDashboard,
    title: "Custom Admin Dashboards",
    problem:
      "\"You cannot easily track users, sales, or activity.\"",
    solution:
      "I build private dashboards where you control everything without touching code.",
  },
  {
    icon: Shield,
    title: "Security & Reliability",
    problem:
      "\"Fear of being hacked or losing user data.\"",
    solution:
      "Industry-standard encryption, security practices, and backups — so your users' data stays safe and your platform stays online.",
  },
];

const Services = () => (
  <PageLayout>
    <section className="pt-32 pb-24 md:pb-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <img
              src={avatarImg}
              alt="Happiness Adam – Software Engineer building scalable web systems"
              className="w-20 h-20 rounded-full object-cover mx-auto mb-4 ring-2 ring-primary/20"
              loading="lazy"
            />
            <p className="text-sm font-display text-primary tracking-widest uppercase mb-2">
              How I Can Help You Build
            </p>
            <h1 className="text-3xl md:text-4xl font-display font-bold">
              Solutions & Services
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
              Every service starts with a real business problem. I don't just
              build features — I solve the challenges that are holding your
              product back.
            </p>
          </div>

          <div className="space-y-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group glass glass-hover rounded-xl p-6 md:p-8 space-y-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h2 className="font-display text-lg font-semibold text-foreground">
                      {s.title}
                    </h2>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground leading-relaxed italic">
                        {s.problem}
                      </p>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {s.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 space-y-4">
            <h3 className="text-xl font-display font-semibold text-foreground">
              Have a project in mind?
            </h3>
            <Button size="lg" asChild className="font-display text-base gap-2 group">
              <Link to="/contact">
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Services;
