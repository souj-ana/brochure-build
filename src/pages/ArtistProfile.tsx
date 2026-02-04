import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExternalLink, Award, Calendar, Star, Palette, MapPin, Brush, CheckCircle, XCircle } from "lucide-react";

// Mock data for the artist profile
const mockArtist = {
  name: "Elena Rodriguez",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  location: "Santa Fe, New Mexico",
  styles: ["Abstract Expressionism", "Contemporary", "Mixed Media"],
  mediums: ["Oil on Canvas", "Acrylic", "Watercolor", "Collage"],
  acceptsCommissions: true,
  hostsWorkshops: true,
  introduction: `Elena Rodriguez is a contemporary artist whose work explores the intersection of emotion and landscape. Born in Mexico City and now based in Santa Fe, her paintings are deeply influenced by the vibrant colors and textures of the Southwest.

With over 15 years of experience, Elena has developed a distinctive style that blends abstract expressionism with elements of traditional Mexican folk art. Her work often features bold, sweeping brushstrokes and a rich, earthy palette that evokes the desert landscapes she calls home.

Elena believes that art should be an emotional experience, inviting viewers to connect with their own feelings and memories through color and form.`,
  portfolioUrl: "/portfolio/elena-rodriguez",
  exhibits: [
    {
      title: "Colors of the Desert",
      venue: "Santa Fe Art Museum",
      date: "2024",
      type: "Solo Exhibition"
    },
    {
      title: "Contemporary Voices",
      venue: "Albuquerque Museum of Art",
      date: "2023",
      type: "Group Exhibition"
    },
    {
      title: "New Mexico Emerging Artists",
      venue: "Taos Art Center",
      date: "2022",
      type: "Group Exhibition"
    },
    {
      title: "Abstract Journeys",
      venue: "Phoenix Art Gallery",
      date: "2021",
      type: "Solo Exhibition"
    }
  ],
  awards: [
    {
      title: "Best in Show",
      organization: "Santa Fe Art Festival",
      year: "2024"
    },
    {
      title: "Emerging Artist Award",
      organization: "New Mexico Arts Council",
      year: "2022"
    },
    {
      title: "People's Choice Award",
      organization: "Southwest Art Competition",
      year: "2021"
    }
  ],
  reviews: [
    {
      text: "Elena's work captures the soul of the Southwest in ways I've never seen before. Her use of color is nothing short of breathtaking.",
      author: "Art Collector Magazine",
      rating: 5
    },
    {
      text: "A true visionary. Her paintings have a way of stopping you in your tracks and making you feel something profound.",
      author: "Sarah Mitchell, Art Curator",
      rating: 5
    },
    {
      text: "Rodriguez's latest collection demonstrates remarkable growth and artistic maturity. A must-see for any serious collector.",
      author: "Southwest Arts Review",
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
              
              <Button 
                size="lg" 
                className="bg-gradient-hero hover:shadow-elegant transition-all duration-300"
                onClick={() => window.location.href = mockArtist.portfolioUrl}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View Portfolio & Shop
              </Button>
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
                    className="w-full bg-gradient-hero hover:shadow-elegant transition-all duration-300"
                    onClick={() => window.location.href = mockArtist.portfolioUrl}
                  >
                    View Portfolio & Shop
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
