import { useState } from "react";
import { Input } from "@/components/ui/input";
import { HeroButton } from "@/components/ui/button-variants";
import { toast } from "sonner";

interface WaitlistFormProps {
  onSuccess?: () => void;
  buttonText?: string;
  compact?: boolean;
}

export const WaitlistForm = ({ onSuccess, buttonText = "Join Waitlist", compact = false }: WaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call - in real implementation, this would save to database
    // For now, just show success message and navigate to signup
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Great! Let's get you signed up");
      if (onSuccess) {
        onSuccess();
      }
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className={compact ? "flex gap-3 max-w-md" : "flex gap-4 max-w-lg"}>
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={compact ? "flex-1 h-12 rounded-lg border-2 border-border focus:border-primary" : "flex-1 h-14 text-lg rounded-xl border-2 border-border focus:border-primary"}
        required
      />
      <HeroButton type="submit" disabled={isLoading} className={compact ? "h-12 px-6" : ""}>
        {isLoading ? "Processing..." : buttonText}
      </HeroButton>
    </form>
  );
};
