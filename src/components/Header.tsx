import { Link } from "react-router-dom";
import vaultLogo from "@/assets/vault-logo.jpg";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src={vaultLogo} alt="Vault" className="h-12 w-12 object-contain" />
          <span className="text-2xl font-bold text-primary">VAULT</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className="text-foreground hover:text-primary font-medium transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/signup" 
            className="px-6 py-2 bg-gradient-hero text-primary-foreground rounded-lg font-semibold hover:shadow-elegant transition-all duration-300 hover:scale-105"
          >
            Join Waitlist
          </Link>
        </nav>
      </div>
    </header>
  );
};
