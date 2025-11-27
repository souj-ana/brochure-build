import { useState } from "react";
import { Header } from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { HeroButton } from "@/components/ui/button-variants";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

const Signup = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    instagram_handle: "",
    qualifications: "",
    years_of_experience: "",
    art_shows_participation: "",
    minimum_price: "",
    accepts_commissioned_work: "no",
    hosts_workshops: "no",
    privacy_accepted: false,
    marketing_consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacy_accepted) {
      toast.error("Please accept the data processing terms to continue");
      return;
    }
    
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-artist-application', {
        body: {
          name: formData.name,
          email: formData.email,
          phone_number: formData.phone_number || null,
          instagram_handle: formData.instagram_handle,
          qualifications: formData.qualifications || null,
          years_of_experience: parseInt(formData.years_of_experience),
          minimum_price: formData.minimum_price,
          art_shows_participation: formData.art_shows_participation || null,
          accepts_commissioned_work: formData.accepts_commissioned_work === "yes",
          hosts_workshops: formData.hosts_workshops === "yes",
          marketing_consent: formData.marketing_consent,
        },
      });

      if (error) throw error;

      if (data?.error) {
        if (data.error.includes('Too many submissions')) {
          toast.error("You've submitted too many applications. Please try again later.");
        } else if (data.error.includes('Validation failed')) {
          toast.error("Please check your form and try again.");
        } else {
          toast.error(data.error);
        }
      } else {
        setIsSubmitted(true);
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to submit. Please try again.");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-24 px-6">
          <div className="container mx-auto max-w-2xl text-center">
            <div className="bg-card p-12 rounded-2xl shadow-elegant animate-fade-in">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-accent/20 rounded-full">
                  <CheckCircle2 className="w-16 h-16 text-accent" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Thank You for Signing Up!
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We're excited to have you join the Vault community. Our team will be in touch with you soon to discuss the next steps.
              </p>
              <p className="text-muted-foreground">
                Keep an eye on your inbox for updates and exclusive artist opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Artist Signup
            </h1>
            <p className="text-xl text-muted-foreground">
              Tell us more about yourself and your art
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card p-8 md:p-12 rounded-2xl shadow-card animate-slide-up">
            <div className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-base">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 h-12 border-2"
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-base">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 h-12 border-2"
                />
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone_number" className="text-base">Phone Number (Optional)</Label>
                <Input
                  id="phone_number"
                  name="phone_number"
                  type="tel"
                  value={formData.phone_number}
                  onChange={handleChange}
                  className="mt-2 h-12 border-2"
                />
              </div>

              {/* Instagram */}
              <div>
                <Label htmlFor="instagram_handle" className="text-base">Instagram Handle *</Label>
                <Input
                  id="instagram_handle"
                  name="instagram_handle"
                  type="text"
                  placeholder="@yourhandle"
                  value={formData.instagram_handle}
                  onChange={handleChange}
                  required
                  className="mt-2 h-12 border-2"
                />
              </div>

              {/* Qualifications */}
              <div>
                <Label htmlFor="qualifications" className="text-base">Qualifications: Awards (Optional)</Label>
                <Textarea
                  id="qualifications"
                  name="qualifications"
                  value={formData.qualifications}
                  onChange={handleChange}
                  rows={3}
                  className="mt-2 border-2 resize-none"
                />
              </div>

              {/* Years of Experience */}
              <div>
                <Label htmlFor="years_of_experience" className="text-base">
                  How many years have you been working as an artist? *
                </Label>
                <Input
                  id="years_of_experience"
                  name="years_of_experience"
                  type="number"
                  min="0"
                  value={formData.years_of_experience}
                  onChange={handleChange}
                  required
                  className="mt-2 h-12 border-2"
                />
              </div>

              {/* Art Shows */}
              <div>
                <Label htmlFor="art_shows_participation" className="text-base">
                  Did you host or participate in any art shows? *
                </Label>
                <Textarea
                  id="art_shows_participation"
                  name="art_shows_participation"
                  value={formData.art_shows_participation}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="mt-2 border-2 resize-none"
                  placeholder="Please describe your art show experiences..."
                />
              </div>

              {/* Minimum Price */}
              <div>
                <Label htmlFor="minimum_price" className="text-base">
                  What is the amount your smallest piece sells for? *
                </Label>
                <p className="text-sm text-muted-foreground mt-1 mb-2">
                  We are aware that the complexity of the work determines the cost of painting and the same size painting would vary in price. We would like to know the minimum amount for estimation purposes. Also there is no obligation to list your work at that price. If you charge by sqft, you can mention that as well.
                </p>
                <Input
                  id="minimum_price"
                  name="minimum_price"
                  type="text"
                  value={formData.minimum_price}
                  onChange={handleChange}
                  required
                  placeholder="e.g., $500 or $50/sqft"
                  className="mt-2 h-12 border-2"
                />
              </div>

              {/* Commissioned Work */}
              <div>
                <Label className="text-base">Do you accept commissioned work? *</Label>
                <RadioGroup
                  value={formData.accepts_commissioned_work}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, accepts_commissioned_work: value }))}
                  className="mt-3 flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="commissioned-yes" />
                    <Label htmlFor="commissioned-yes" className="font-normal cursor-pointer">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="commissioned-no" />
                    <Label htmlFor="commissioned-no" className="font-normal cursor-pointer">No</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Workshops */}
              <div>
                <Label className="text-base">Do you host workshops or classes? *</Label>
                <RadioGroup
                  value={formData.hosts_workshops}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, hosts_workshops: value }))}
                  className="mt-3 flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="workshops-yes" />
                    <Label htmlFor="workshops-yes" className="font-normal cursor-pointer">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="workshops-no" />
                    <Label htmlFor="workshops-no" className="font-normal cursor-pointer">No</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* GDPR Consent - Data Processing (Required) */}
              <div className="space-y-4 mt-8 p-6 bg-muted/50 rounded-lg border border-border">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="privacy_accepted"
                    checked={formData.privacy_accepted}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, privacy_accepted: checked === true }))
                    }
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <Label htmlFor="privacy_accepted" className="text-sm font-medium cursor-pointer leading-relaxed">
                      Data Processing Agreement (Required) *
                    </Label>
                    <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                      I consent to Vault (data controller) processing my personal information (name, email, phone number, Instagram handle, qualifications, and portfolio details) for the purpose of reviewing my artist application and account setup. Legal basis: Consent (GDPR Art. 6(1)(a)). Data retention: Your data will be stored for 2 years or until you request deletion. You have the right to access, rectify, delete, or port your data, and to withdraw consent at any time by contacting <a href="mailto:artist@yourvault.art" className="text-primary hover:underline">artist@yourvault.art</a>. Withdrawal does not affect prior processing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pt-4 border-t border-border/50">
                  <Checkbox
                    id="marketing_consent"
                    checked={formData.marketing_consent}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, marketing_consent: checked === true }))
                    }
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <Label htmlFor="marketing_consent" className="text-sm font-medium cursor-pointer leading-relaxed">
                      Marketing Communications (Optional)
                    </Label>
                    <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                      I consent to receive marketing communications, platform updates, and information about future artist opportunities from Vault via email. You can withdraw this consent at any time by clicking unsubscribe in our emails or contacting <a href="mailto:artist@yourvault.art" className="text-primary hover:underline">artist@yourvault.art</a>.
                    </p>
                  </div>
                </div>
              </div>

              <HeroButton type="submit" disabled={isLoading} className="w-full mt-8">
                {isLoading ? "Submitting..." : "Complete Signup"}
              </HeroButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
