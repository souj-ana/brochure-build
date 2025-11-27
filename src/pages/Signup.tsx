import { useState } from "react";
import { Header } from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { HeroButton } from "@/components/ui/button-variants";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from("artists_waitlist")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone_number: formData.phone_number || null,
            instagram_handle: formData.instagram_handle,
            qualifications: formData.qualifications || null,
            years_of_experience: parseInt(formData.years_of_experience),
            art_shows_participation: formData.art_shows_participation,
            minimum_price: formData.minimum_price,
            accepts_commissioned_work: formData.accepts_commissioned_work === "yes",
            hosts_workshops: formData.hosts_workshops === "yes",
          },
        ]);

      if (error) {
        if (error.code === '23505') {
          toast.error("This email is already registered");
        } else {
          toast.error("Something went wrong. Please try again.");
        }
        console.error("Error submitting form:", error);
      } else {
        setIsSubmitted(true);
      }
    } catch (error) {
      toast.error("Failed to submit. Please try again.");
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
