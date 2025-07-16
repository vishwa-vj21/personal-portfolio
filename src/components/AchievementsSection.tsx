import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Grip } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { achievements } from "@/data/achievements";

const AchievementsSection = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollPosition =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e) => {
    if (!scrollContainerRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);

    document.body.style.cursor = "grabbing";
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.cursor = "default";
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollContainerRef.current) return;

    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      document.body.style.cursor = "default";
    }
  };

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
    console.log(`Image failed to load for achievement ${id}`);
  };

  // return (
  //   <section id="achievements" className="pt-14 bg-background/50">
  //     <div className="section-container">
  //       <motion.div
  //         initial={{ opacity: 0, y: 20 }}
  //         whileInView={{ opacity: 1, y: 0 }}
  //         viewport={{ once: true, amount: 0.2 }}
  //         transition={{ duration: 0.5 }}
  //       >
  //         <h2 className="section-heading">Achievements</h2>
  //         <p className="text-muted-foreground max-w-2xl mb-12">
  //           A collection of my professional accomplishments and certifications
  //           earned throughout my journey.
  //         </p>
  //       </motion.div>

  //       <div className="flex justify-between mb-6 space-x-2">
  //         <div className="flex items-center text-muted-foreground">
  //           <Grip className="h-4 w-4 mr-2" />
  //           <span className="text-sm hidden md:inline">Drag to explore</span>
  //           <span className="text-sm md:hidden">Swipe to explore</span>
  //         </div>
  //         <div className="flex space-x-2">
  //           <Button
  //             onClick={() => scroll("left")}
  //             variant="outline"
  //             size="icon"
  //             className="rounded-full"
  //             aria-label="Scroll left"
  //           >
  //             <ChevronLeft className="h-4 w-4" />
  //           </Button>
  //           <Button
  //             onClick={() => scroll("right")}
  //             variant="outline"
  //             size="icon"
  //             className="rounded-full"
  //             aria-label="Scroll right"
  //           >
  //             <ChevronRight className="h-4 w-4" />
  //           </Button>
  //         </div>
  //       </div>

  //       <div
  //         ref={scrollContainerRef}
  //         className="flex overflow-x-auto pb-6 space-x-6 snap-x scrollbar-hidden cursor-grab"
  //         onMouseDown={handleMouseDown}
  //         onMouseUp={handleMouseUp}
  //         onMouseMove={handleMouseMove}
  //         onMouseLeave={handleMouseLeave}
  //       >
  //         {achievements.map((achievement) => (
  //           <motion.div
  //             key={achievement.id}
  //             className="min-w-[300px] max-w-[300px] bg-card rounded-lg shadow-sm border border-border snap-center select-none flex flex-col overflow-hidden"
  //             initial={{ opacity: 0, y: 20 }}
  //             whileInView={{ opacity: 1, y: 0 }}
  //             viewport={{ once: true, amount: 0.1 }}
  //             transition={{ duration: 0.4 }}
  //             whileHover={{
  //               scale: 1.02,
  //               boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
  //               transition: { duration: 0.2 },
  //             }}
  //           >
  //             {/* Image at the top - Fixed aspect ratio container */}
  //             <div className="w-full h-40 relative bg-muted">
  //               {imageErrors[achievement.id] ? (
  //                 <div className="w-full h-full flex items-center justify-center">
  //                   <p className="text-sm text-muted-foreground">
  //                     Image unavailable
  //                   </p>
  //                 </div>
  //               ) : (
  //                 <img
  //                   src={achievement.imageUrl || "/api/placeholder/300/160"}
  //                   alt={`${achievement.title} image`}
  //                   className="w-full h-full object-cover object-center"
  //                   onError={() => handleImageError(achievement.id)}
  //                 />
  //               )}
  //             </div>

  //             {/* Content below the image */}
  //             <div className="p-6 flex flex-col flex-grow">
  //               <div className="flex items-center mb-4">
  //                 <div
  //                   className={`p-2 rounded-full mr-3 ${
  //                     achievement.type === "competition"
  //                       ? "bg-yellow-100/80 text-yellow-600 dark:bg-yellow-950 dark:text-yellow-300"
  //                       : achievement.type === "academic"
  //                       ? "bg-blue-100/80 text-blue-600 dark:bg-blue-950 dark:text-blue-300"
  //                       : "bg-green-100/80 text-green-600 dark:bg-green-950 dark:text-green-300"
  //                   }`}
  //                 >
  //                   <achievement.icon className="h-5 w-5" />
  //                 </div>
  //                 <div>
  //                   <p className="text-sm font-normal text-muted-foreground">
  //                     {achievement.year}
  //                   </p>
  //                   <h3 className="text-lg font-semibold text-foreground">
  //                     {achievement.title}
  //                   </h3>
  //                 </div>
  //               </div>
  //               <p className="text-base font-normal text-muted-foreground mb-4">
  //                 {achievement.description}
  //               </p>
  //               {/* Fixed width for the tag */}
  //               <div className="mt-auto">
  //                 <span
  //                   className={`text-xs px-2 py-1 rounded-full inline-block ${
  //                     achievement.type === "competition"
  //                       ? "bg-yellow-100/80 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300"
  //                       : achievement.type === "academic"
  //                       ? "bg-blue-100/80 text-blue-800 dark:bg-blue-950 dark:text-blue-300"
  //                       : "bg-green-100/80 text-green-800 dark:bg-green-950 dark:text-green-300"
  //                   }`}
  //                 >
  //                   {achievement.type.charAt(0).toUpperCase() +
  //                     achievement.type.slice(1)}
  //                 </span>
  //               </div>
  //             </div>
  //           </motion.div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default AchievementsSection;
