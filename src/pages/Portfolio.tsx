import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ArrowLeft, ShoppingCart, Eye, X } from "lucide-react";
import { Link } from "react-router-dom";

import graceOfSavior from "@/assets/artwork/grace-of-savior.jpg";
import holdMyHand from "@/assets/artwork/hold-my-hand.jpg";
import lotusJourney from "@/assets/artwork/lotus-journey.jpg";
import freedom from "@/assets/artwork/freedom.jpg";

interface Artwork {
  id: string;
  title: string;
  image: string;
  size: string;
  medium: string;
  price: number | null;
  status: "available" | "sold";
  year: string;
}

const artworks: Artwork[] = [
  {
    id: "1",
    title: "The Grace of Savior",
    image: graceOfSavior,
    size: "3 × 4 feet",
    medium: "Mixed Media on Canvas",
    price: 96000,
    status: "available",
    year: "2024",
  },
  {
    id: "2",
    title: "Hold My Hand",
    image: holdMyHand,
    size: "3 × 4.5 feet",
    medium: "Acrylic on Canvas",
    price: null,
    status: "sold",
    year: "2023",
  },
  {
    id: "3",
    title: "Lotus Journey",
    image: lotusJourney,
    size: "34 × 48 inches",
    medium: "Acrylic on Canvas",
    price: null,
    status: "sold",
    year: "2023",
  },
  {
    id: "4",
    title: "Freedom",
    image: freedom,
    size: "3 × 4 feet",
    medium: "Acrylic on Canvas",
    price: null,
    status: "sold",
    year: "2023",
  },
];

const Portfolio = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [filter, setFilter] = useState<"all" | "available" | "sold">("all");

  const filteredArtworks = artworks.filter((art) => {
    if (filter === "all") return true;
    return art.status === filter;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Back Link */}
          <Link
            to="/artist/yashpal-kamble"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Artist Profile
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Yashpal Kamble
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Portfolio & Available Works
            </p>

            {/* Filter Tabs */}
            <div className="inline-flex gap-2 p-1 bg-muted rounded-xl">
              <Button
                variant={filter === "all" ? "default" : "ghost"}
                size="sm"
                onClick={() => setFilter("all")}
                className={filter === "all" ? "bg-gradient-hero text-primary-foreground" : ""}
              >
                All Works ({artworks.length})
              </Button>
              <Button
                variant={filter === "available" ? "default" : "ghost"}
                size="sm"
                onClick={() => setFilter("available")}
                className={filter === "available" ? "bg-gradient-hero text-primary-foreground" : ""}
              >
                Available ({artworks.filter((a) => a.status === "available").length})
              </Button>
              <Button
                variant={filter === "sold" ? "default" : "ghost"}
                size="sm"
                onClick={() => setFilter("sold")}
                className={filter === "sold" ? "bg-gradient-hero text-primary-foreground" : ""}
              >
                Sold ({artworks.filter((a) => a.status === "sold").length})
              </Button>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredArtworks.map((artwork) => (
              <div
                key={artwork.id}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-elegant transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedArtwork(artwork)}
              >
                {/* Image Container */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="w-full bg-white/90 text-foreground hover:bg-white"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <Badge
                    className={
                      artwork.status === "available"
                        ? "bg-green-500/90 text-white border-0"
                        : "bg-muted/90 text-muted-foreground border-0"
                    }
                  >
                    {artwork.status === "available" ? "Available" : "Sold"}
                  </Badge>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-1 truncate">
                    {artwork.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{artwork.medium}</p>
                  {artwork.status === "available" && artwork.price && (
                    <p className="text-lg font-bold text-primary">
                      {formatPrice(artwork.price)}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredArtworks.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No artworks found in this category.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedArtwork} onOpenChange={() => setSelectedArtwork(null)}>
        <DialogContent className="max-w-5xl w-full p-0 overflow-hidden bg-background border-border">
          <DialogTitle className="sr-only">
            {selectedArtwork?.title || "Artwork Details"}
          </DialogTitle>
          <DialogDescription className="sr-only">
            View details of {selectedArtwork?.title || "the artwork"}
          </DialogDescription>
          {selectedArtwork && (
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image */}
              <div className="relative bg-muted aspect-[3/4] md:aspect-auto">
                <img
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Details */}
              <div className="p-8 flex flex-col">
                <div className="flex-1">
                  <Badge
                    className={
                      selectedArtwork.status === "available"
                        ? "bg-green-500/20 text-green-600 border-green-500/30 mb-4"
                        : "bg-muted text-muted-foreground mb-4"
                    }
                  >
                    {selectedArtwork.status === "available" ? "Available for Purchase" : "Sold"}
                  </Badge>

                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    {selectedArtwork.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    by Yashpal Kamble
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Year</span>
                      <span className="font-medium text-foreground">{selectedArtwork.year}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Size</span>
                      <span className="font-medium text-foreground">{selectedArtwork.size}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Medium</span>
                      <span className="font-medium text-foreground">{selectedArtwork.medium}</span>
                    </div>
                    {selectedArtwork.status === "available" && selectedArtwork.price && (
                      <div className="flex justify-between py-3">
                        <span className="text-muted-foreground">Price</span>
                        <span className="text-2xl font-bold text-primary">
                          {formatPrice(selectedArtwork.price)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {selectedArtwork.status === "available" && (
                  <Button size="lg" className="w-full bg-gradient-hero hover:shadow-elegant transition-all duration-300">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Inquire to Purchase
                  </Button>
                )}

                {selectedArtwork.status === "sold" && (
                  <div className="text-center py-4 bg-muted rounded-lg">
                    <p className="text-muted-foreground">
                      This artwork has been sold. Contact the artist for similar commissioned works.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Portfolio;
