import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";

const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>{children}</main>
    <FooterSection />
  </div>
);

export default PageLayout;
