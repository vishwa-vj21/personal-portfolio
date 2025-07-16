import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import {
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  Download,
} from "lucide-react";
import LazyImage from "./LazyImage";
import { Links } from "@/data/links";

const AboutSection = () => {
  const resumeUrl = Links.resume;
  const { toast } = useToast();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handledownload = () => {
    toast({
      title: "Downloading Resume",
      description: "Your download will start shortly.",
    });
  };

  return (
    <section id="about" className="py-14 relative bg-background">
      <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-primary/5 to-background -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <motion.h2
            className="section-heading text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={itemVariants}
          >
            About Me
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
          {/* Content Column */}
          <motion.div
            className="w-full lg:w-2/3 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" /> Bio
              </h3>
              <p className="text-muted-foreground">
                Detail-oriented and enthusiastic Full Stack Developer proficient
                in building responsive, scalable web applications using modern
                front-end and back-end technologies. Experienced in academic and
                freelance projects, including the development of a full-featured
                freelancing platform. Passionate about creating impactful,
                user-centric solutions and intuitive UI/UX design focused on
                elevating user experience.
              </p>
            </motion.div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" /> Education
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card className="h-full border-primary/10 bg-card/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />{" "}
                    </h3>
                    <div className="space-y-2">
                      <p className="font-medium">
                        B.Tech in Computer Science and Engineering
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Indian Institute of Information Technology, Sricity
                      </p>
                      <p className="text-sm text-muted-foreground">
                        2021 - Present
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card className="h-full border-primary/10 bg-card/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />{" "}
                    </h3>
                    <div className="space-y-2">
                      <p className="font-medium">
                        Higher Secondary, Computer Science
                      </p>
                      <br />
                      <p className="text-sm text-muted-foreground">
                        DAV Higher Secondary School, Chennai
                      </p>
                      <p className="text-sm text-muted-foreground">
                        2019– 2021
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Column */}
          <motion.div
            className="w-full lg:w-1/3 flex flex-col items-center gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div
              className="relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Avatar className="w-40 h-40 border-4 border-primary/20">
                <AvatarImage
                  src="/imgs/me.png"
                  alt="Vishwajith S"
                  loading="lazy"
                />
                <AvatarFallback>Vishwajith S.lal()</AvatarFallback>
              </Avatar>
              {/* <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                8.37 GPA
              </div> */}
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <h3 className="text-2xl font-bold">Vishwajith S</h3>
              <p className="text-muted-foreground">
                Computer Science Engineering Student
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 justify-center"
            >
              <Badge variant="outline" className="bg-primary/10">
                Full Stack
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                UI/UX
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                MongoDB
              </Badge>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="gap-2" asChild onClick={handledownload}>
                <a href={resumeUrl} download="Vj-fullstack.pdf">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
