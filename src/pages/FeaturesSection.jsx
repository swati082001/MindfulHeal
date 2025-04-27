
import AnimatedSection from '../common/AnimatesSection';
import { Shield, Heart, MessageSquare, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Safe & Confidential",
      description: "Your privacy matters. All sessions and data are securely encrypted and confidential."
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Emotional Support",
      description: "Access compassionate care and support when you need it most, from wherever you are."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "Easy Communication",
      description: "Connect with therapists via text, voice, or video calls based on your comfort level."
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "Personal Growth",
      description: "Discover tools and techniques to support your journey toward emotional wellbeing."
    }
  ];
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    })
  };

  return (
    <AnimatedSection id="features" className="bg-background py-24">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Features Designed for Your <span className="text-primary">Wellbeing</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our platform offers comprehensive tools and resources to support your emotional health journey, 
            all in one accessible place.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="bg-background border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="mb-4 bg-primary/10 p-3 rounded-lg inline-block">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 px-4">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">Why Choose MindfulHeal?</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  We're committed to making mental health support accessible, personalized, and effective for everyone.
                </p>
                <ul className="space-y-3">
                  {[
                    "Vetted, licensed therapists with diverse specialties",
                    "Flexible scheduling that adapts to your life",
                    "Personalized approach to meet your unique needs",
                    "Evidence-based practices and resources"
                  ].map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="mr-2 mt-1 bg-primary h-2 w-2 rounded-full" />
                      <span className="text-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-[4/3] bg-accent flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-4xl font-bold mb-4 text-foreground">91%</p>
                    <p className="text-muted-foreground">of our clients report significant improvement after 3 months</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FeaturesSection;