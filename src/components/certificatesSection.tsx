import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Award,
  Code,
  Book,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { certificates } from "@/data/certificates";

const CertificatesSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: "all", label: "All" },
    { id: "technical", label: "Technical", icon: Code },
    { id: "professional", label: "Professional", icon: Award },
    { id: "academic", label: "Academic", icon: Book },
  ];

  const filteredCertificates = certificates.filter(
    (certificate) =>
      activeCategory === "all" || certificate.category === activeCategory
  );

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollContainerRef.current.scrollLeft - scrollAmount
            : scrollContainerRef.current.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="certificates" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold text-center mb-4">Certificates</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            Professional certifications and course completions that highlight my
            continuous learning journey.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => setActiveCategory(category.id)}
            >
              {category.icon && <category.icon className="h-4 w-4 mr-2" />}
              {category.label}
            </Button>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-end mb-4 space-x-2">
          <Button
            onClick={() => scroll("left")}
            variant="outline"
            size="icon"
            className="rounded-full"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            onClick={() => scroll("right")}
            variant="outline"
            size="icon"
            className="rounded-full"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Certificates Grid */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-6 gap-6 snap-x scrollbar-hidden"
        >
          {filteredCertificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              className="min-w-[320px] max-w-[320px] bg-card rounded-lg shadow-sm border border-border overflow-hidden flex flex-col snap-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.2 },
              }}
            >
              {/* Certificate Image */}
              <div className="h-40 bg-muted relative">
                {imageErrors[certificate.id] ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">
                      Certificate image unavailable
                    </p>
                  </div>
                ) : (
                  <img
                    src={certificate.imageUrl || "/api/placeholder/320/160"}
                    alt={`${certificate.title} certificate`}
                    className="w-full h-full object-cover object-center"
                    onError={() => handleImageError(certificate.id)}
                  />
                )}

                {/* Category Badge */}
                <div
                  className={cn(
                    "absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium",
                    certificate.category === "technical"
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300"
                      : certificate.category === "professional"
                      ? "bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300"
                      : "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300"
                  )}
                >
                  {certificate.category.charAt(0).toUpperCase() +
                    certificate.category.slice(1)}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex mb-3 items-center">
                  <div
                    className={cn(
                      "p-2 rounded-full mr-3",
                      certificate.category === "technical"
                        ? "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-300"
                        : certificate.category === "professional"
                        ? "bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-300"
                        : "bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-300"
                    )}
                  >
                    <certificate.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {certificate.issuer}
                    </p>
                    <h3 className="font-semibold text-lg">
                      {certificate.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {certificate.description}
                </p>

                <div className="mt-auto flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">
                    {certificate.date}
                  </span>

                  {certificate.credentialUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className=" h-auto p-3 hover:bg-transparent hover:text-primary"
                      asChild
                    >
                      <a
                        href={certificate.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-xs text-primary hover:underline-offset-4 hover:underline"
                      >
                        Verify <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  )}
                </div>

                {certificate.credentialId && (
                  <p className="text-xs text-muted-foreground mt-2">
                    ID: {certificate.credentialId}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
