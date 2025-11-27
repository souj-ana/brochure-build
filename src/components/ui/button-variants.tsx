import { Button } from "@/components/ui/button";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface HeroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const HeroButton = forwardRef<HTMLButtonElement, HeroButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        size="lg"
        className={cn(
          "bg-gradient-hero hover:shadow-elegant transition-all duration-500 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl hover:scale-105",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

HeroButton.displayName = "HeroButton";

export const SecondaryButton = forwardRef<HTMLButtonElement, HeroButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="outline"
        size="lg"
        className={cn(
          "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-500",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

SecondaryButton.displayName = "SecondaryButton";
