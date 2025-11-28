import { Header } from "@/components/Header";
import { useNavigate } from "react-router-dom";
import { Palette, TrendingUp, Users, Eye } from "lucide-react";
import { HeroButton } from "@/components/ui/button-variants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Palette className="w-12 h-12 text-primary" />,
      title: "Showcase Your Work",
      description: "Your own digital storefront, highlight your unique artistic style and attract the right audience."
    },
    {
      icon: <Eye className="w-12 h-12 text-primary" />,
      title: "Get Discovered",
      description: "Reach new audiences and collectors through our discovery designed to spotlight emerging talent according to buyers taste and need."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Grow Your Revenue",
      description: "Set your own prices, accept commissions, conduct workshops, and build a sustainable business on your terms."
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Connect with Collectors",
      description: "Marketing automations, Analytics, Promotions & spotlight features."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in leading-tight">
            Your Art. Your Story. <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">Your Price.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-slide-up">
            Join a vibrant community where artists thrive, get discovered, and connect with community who appreciate true creativity. Be part of something extraordinary.
          </p>
          <div className="flex justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <HeroButton onClick={() => navigate("/signup")} className="text-lg px-12 py-6">
              Get Started
            </HeroButton>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-secondary rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-border">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                Can I schedule and sell workshops through Vault?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Yes. We are working on feature to include workshops both virtual and realtime. Buyers can sign up and pay.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-border">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                Does Vault sell my paintings as well?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Yes. Buyers can go to yourvault.art and go through discovery steps and buy from the marketplace.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-border">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                Does Vault take commission from the sale of my paintings?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                We are an artist first company. We will add our platform & transaction fee to the price artist sets for the painting.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-border">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                How is Vault different from other marketplaces?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Vault is one shop stop, for all your needs. Manage your portfolio, sell your work, accept commissioned work and schedule workshops. In addition, you will have the benefit of buyers that vault attracts from Internet.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <p className="text-center text-muted-foreground mt-8">
            Have more questions? Reach out to <a href="mailto:artist@yourvault.art" className="text-primary hover:underline">artist@yourvault.art</a>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Share Your Art?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12">
            Join our waitlist and be among the first artists to launch on our platform.
          </p>
          <div className="flex justify-center">
            <HeroButton onClick={() => navigate("/signup")} className="text-lg px-12 py-6">
              Join Waitlist
            </HeroButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-card border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Vault. Empowering artists worldwide.</p>
          <p className="mt-2">Questions? Contact us at <a href="mailto:artist@yourvault.art" className="text-primary hover:underline">artist@yourvault.art</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
