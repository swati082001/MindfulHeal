import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/30"
    >
      <div className="container mx-auto">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col items-start space-y-6">
            <motion.div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary" variants={itemVariants}>
              <span className="font-medium">New Platform Launch</span>
            </motion.div>
            
            <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground" variants={itemVariants}>
              Begin Your Journey To <span className="text-primary">Emotional Healing</span>
            </motion.h1>
            
            <motion.p className="text-lg md:text-xl text-muted-foreground max-w-md" variants={itemVariants}>
              Professional therapy and self-help tools to guide you through life's challenges, all in one trusted place.
            </motion.p>
            
            <motion.div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto" variants={itemVariants}>
              <motion.a
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.a>
              
              <motion.a
                href="#" 
                className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-3 text-base font-medium text-foreground hover:bg-muted transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative mx-auto w-full max-w-md rounded-2xl overflow-hidden shadow-xl"
            variants={itemVariants}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/60 to-primary/80">
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-xl p-6 shadow-lg max-w-sm">
                  <h3 className="text-xl font-semibold mb-2">Start your healing journey today</h3>
                  <p className="text-muted-foreground mb-6">Connect with licensed therapists or explore our self-help resources.</p>
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="bg-background rounded-lg p-3 border border-border">
                      <p className="text-3xl font-bold text-primary">200+</p>
                      <p className="text-xs text-muted-foreground">Therapists</p>
                    </div>
                    <div className="bg-background rounded-lg p-3 border border-border">
                      <p className="text-3xl font-bold text-secondary">5k+</p>
                      <p className="text-xs text-muted-foreground">Clients Helped</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {["Licensed Therapists", "Flexible Sessions", "Personalized Care", "Digital Resources"].map((item, index) => (
            <div key={index} className="bg-background rounded-xl border border-border p-4 text-center shadow-sm">
              <p className="font-medium text-foreground">{item}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;