import { Header } from "@/components/Header";
import { useNavigate } from "react-router-dom";
import { Palette, TrendingUp, Users } from "lucide-react";
import { HeroButton } from "@/components/ui/button-variants";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Palette className="w-12 h-12 text-primary" />,
      title: "Showcase Your Work",
      description: "Your own digital storefront, highlight your unique artistic style and attract the right audience."
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
            Join a vibrant community where artists thrive, sell their work, and connect with community who appreciate true creativity. Be part of something extraordinary.
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
          <div className="grid md:grid-cols-3 gap-8">
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
        </div>
      </footer>
    </div>
  );
};

export default Home;
