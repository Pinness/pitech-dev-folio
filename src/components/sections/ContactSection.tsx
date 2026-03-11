import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/pinessjw-adam",
    label: "LinkedIn",
  },
  { icon: Github, href: "https://github.com/Pinness", label: "GitHub" },
  { icon: Twitter, href: "https://x.com/LadyPiness", label: "Twitter / X" },
];

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    setSent(false);
    try {
      await emailjs.send("service_vgr8hln", "template_8brao6m", form, "OsVg5fLUdBewTe41Q");
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setError("Failed to send. Please try again.");
    }
    setSending(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-display text-primary tracking-widest uppercase mb-2">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Let's Build Something Together
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Have a project idea, need engineering help, or just want to talk
              technology? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <a
                  href="tel:+2348104947058"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  +234 8104 947 058
                </a>
                <a
                  href="mailto:adamhappinessjw@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  adamhappinessjw@gmail.com
                </a>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-muted-foreground font-display uppercase tracking-wider">
                  Connect
                </p>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg glass glass-hover flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                      aria-label={s.label}
                    >
                      <s.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-3 glass rounded-xl p-6 md:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <Input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What are you building?"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and what you're trying to achieve..."
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" disabled={sending} className="w-full font-display gap-2">
                <Mail className="w-4 h-4" />
                {sending ? "Sending..." : "Send Message"}
              </Button>
              {sent && (
                <p className="text-sm text-center text-emerald-400">
                  Message sent! I'll get back to you soon.
                </p>
              )}
              {error && (
                <p className="text-sm text-center text-destructive">{error}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
