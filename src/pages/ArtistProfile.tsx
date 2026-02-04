import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, Calendar, Star, Palette, MapPin, Brush, CheckCircle, XCircle, Images, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

// Artist data from resume
const mockArtist = {
  name: "Yashpal Kamble",
  avatar: "", // No profile image provided
  location: "Panvel, Maharashtra, India",
  styles: ["Contemporary Painting", "Professional Art"],
  mediums: ["Oil Painting", "Acrylic", "Mixed Media"],
  acceptsCommissions: true,
  hostsWorkshops: true,
  education: [
    { degree: "M.F.A in Painting", institution: "Sir J.J. School of Art, Mumbai", year: "2012" },
    { degree: "B.F.A in Painting", institution: "Sir J.J. School of Art, Mumbai", year: "2010" },
    { degree: "A.T.D", institution: "Chitrakala Mahavidyalaya, Latur", year: "2003" }
  ],
  introduction: `Yashpal Kamble is a professional artist with a Master of Fine Arts in Painting from the prestigious Sir J.J. School of Art, Mumbai. With formal training in both traditional and contemporary art techniques, his work reflects a deep understanding of artistic principles combined with a unique personal vision.

As a CCRT Delhi Fellowship recipient (2016), Yashpal has demonstrated exceptional artistic merit and contribution to Indian art. His work has been exhibited at renowned venues including Jehangir Art Gallery, Taj Mahal Palace Hotel, and internationally at DUCTAC Gallery of Lights in Dubai.

Yashpal's artistic journey spans over two decades, marked by numerous awards and recognitions including the Best Poster Award for National Film Festival (2022) and multiple medals at prestigious art competitions.`,
  portfolioUrl: "/artist/yashpal-kamble/portfolio",
  fellowship: "CCRT Delhi Fellowship in Painting (2016)",
  exhibits: [
    { title: "Solo Exhibition", venue: "Jehangir Art Gallery, Mumbai", date: "2012", type: "Solo Exhibition" },
    { title: "Suchitra Art Gallery", venue: "Amritsar", date: "2025", type: "Group Exhibition" },
    { title: "Pradarshak Art Gallery", venue: "Mumbai", date: "2025", type: "Group Exhibition" },
    { title: "You.Art India Art Gallery", venue: "Mumbai", date: "2025", type: "Group Exhibition" },
    { title: "Artsobo Art Gallery", venue: "Goregaon, Mumbai", date: "2024", type: "Group Exhibition" },
    { title: "Taj Mahal Palace Exhibition", venue: "Taj Hotel, Mumbai", date: "2022", type: "Group Exhibition" },
    { title: "Mumbai Art Festival", venue: "Nehru Centre, Mumbai", date: "2022", type: "Group Exhibition" },
    { title: "Chitra Santhe", venue: "Bangalore", date: "2022", type: "Group Exhibition" },
    { title: "India Art Festival", venue: "Mumbai", date: "2019", type: "Group Exhibition" },
    { title: "DUCTAC Gallery of Lights", venue: "Emirates Mall, Dubai", date: "2016", type: "Group Exhibition" }
  ],
  awards: [
    { title: "Best Poster Award", organization: "National Film Festival", year: "2022" },
    { title: "CCRT Delhi Fellowship in Painting", organization: "CCRT Delhi", year: "2016" },
    { title: "Miss Dolly Cursetji First Drawing Award", organization: "J.J. School of Art", year: "2010" },
    { title: "Best Painting Award", organization: "Art Society of India", year: "2010" },
    { title: "Malhar Festival Painting Award", organization: "St. Xavier's College, Mumbai", year: "2008" },
    { title: "Best Painting Award", organization: "J.J. School of Art Annual Exhibition", year: "2008" }
  ],
  reviews: [
    {
      text: "Yashpal's work demonstrates exceptional mastery of technique combined with a deeply personal artistic vision that speaks to the contemporary Indian experience.",
      author: "Mumbai Art Festival Review",
      rating: 5
    },
    {
      text: "A CCRT Fellowship recipient whose work has graced prestigious venues from Jehangir Art Gallery to Dubai's DUCTAC. A rising star in Indian contemporary art.",
      author: "Indian Art Quarterly",
      rating: 5
    }
  ]
};

const ArtistProfile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
            <div className="flex-shrink-0">
              <Avatar className="h-48 w-48 border-4 border-primary/20 shadow-elegant">
                <AvatarImage src={mockArtist.avatar} alt={mockArtist.name} className="object-cover" />
                <AvatarFallback className="text-4xl bg-primary/10">
                  {mockArtist.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </div>
            
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {mockArtist.name}
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="h-4 w-4" />
                <span>{mockArtist.location}</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {mockArtist.styles.map((style) => (
                  <Badge key={style} variant="secondary" className="text-sm">
                    {style}
                  </Badge>
                ))}
              </div>

              {/* Services Available */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                  mockArtist.acceptsCommissions 
                    ? 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/30' 
                    : 'bg-muted text-muted-foreground border border-border'
                }`}>
                  {mockArtist.acceptsCommissions ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <XCircle className="h-4 w-4" />
                  )}
                  <Brush className="h-4 w-4" />
                  {mockArtist.acceptsCommissions ? 'Available for Commissions' : 'Not Taking Commissions'}
                </div>
                
                {mockArtist.hostsWorkshops && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30">
                    <CheckCircle className="h-4 w-4" />
                    Hosts Workshops
                  </div>
                )}
              </div>
              
              <div className="flex gap-3">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-gradient-hero hover:shadow-elegant transition-all duration-300"
                >
                  <Link to={mockArtist.portfolioUrl}>
                    <Images className="mr-2 h-5 w-5" />
                    View Portfolio
                  </Link>
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Link to={mockArtist.portfolioUrl}>
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Shop
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Introduction & Mediums */}
            <div className="lg:col-span-2 space-y-8">
              {/* Introduction */}
              <Card className="border-border/50 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    About the Artist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-neutral dark:prose-invert max-w-none">
                    {mockArtist.introduction.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Mediums */}
              <Card className="border-border/50 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Palette className="h-5 w-5 text-primary" />
                    Mediums & Techniques
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {mockArtist.mediums.map((medium) => (
                      <Badge 
                        key={medium} 
                        variant="outline" 
                        className="px-4 py-2 text-sm border-primary/30 text-foreground"
                      >
                        {medium}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Exhibition History */}
              <Card className="border-border/50 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Calendar className="h-5 w-5 text-primary" />
                    Exhibition History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockArtist.exhibits.map((exhibit, index) => (
                      <div key={index}>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div>
                            <h4 className="font-semibold text-foreground">{exhibit.title}</h4>
                            <p className="text-sm text-muted-foreground">{exhibit.venue}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {exhibit.type}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{exhibit.date}</span>
                          </div>
                        </div>
                        {index < mockArtist.exhibits.length - 1 && (
                          <Separator className="mt-4" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Awards & Reviews */}
            <div className="space-y-8">
              {/* Awards */}
              <Card className="border-border/50 shadow-sm bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Award className="h-5 w-5 text-primary" />
                    Awards & Recognition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockArtist.awards.map((award, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Award className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-sm">{award.title}</h4>
                          <p className="text-xs text-muted-foreground">{award.organization}</p>
                          <p className="text-xs text-muted-foreground">{award.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Reviews */}
              <Card className="border-border/50 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Star className="h-5 w-5 text-primary" />
                    Reviews
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {mockArtist.reviews.map((review, index) => (
                      <div key={index}>
                        <div className="flex gap-1 mb-2">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground italic mb-2">
                          "{review.text}"
                        </p>
                        <p className="text-xs font-medium text-foreground">
                          — {review.author}
                        </p>
                        {index < mockArtist.reviews.length - 1 && (
                          <Separator className="mt-4" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 shadow-sm">
                <CardContent className="pt-6 text-center">
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    Interested in this artist?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Browse their complete collection and purchase original artwork.
                  </p>
                  <Button 
                    asChild
                    className="w-full bg-gradient-hero hover:shadow-elegant transition-all duration-300"
                  >
                    <Link to={mockArtist.portfolioUrl}>
                      View Portfolio & Shop
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ArtistProfile;
