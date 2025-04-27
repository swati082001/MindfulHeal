import AnimatedSection from '../common/AnimatesSection';
import { motion } from 'framer-motion';
import { Calendar, Video, MessageCircle, Star, Clock } from 'lucide-react';

const TherapySection = () => {
  const therapists = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Anxiety & Depression",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&h=256&auto=format&fit=crop",
      rating: 4.9,
      sessions: 240
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Trauma Recovery",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=256&h=256&auto=format&fit=crop",
      rating: 4.8,
      sessions: 198
    },
    {
      name: "Dr. Lisa Patel",
      specialty: "Relationship Counseling",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=256&h=256&auto=format&fit=crop",
      rating: 4.9,
      sessions: 315
    }
  ];

  const sessionTypes = [
    {
      icon: <Video className="h-6 w-6" />,
      title: "Video Sessions",
      description: "Face-to-face virtual sessions for more personal connection"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Text Therapy",
      description: "Convenient messaging when you need immediate support"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Scheduled Calls",
      description: "Pre-booked phone sessions at your preferred time"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <AnimatedSection id="therapy" className="bg-accent/40 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Professional <span className="text-primary">Therapy</span> Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Connect with licensed professionals who specialize in various areas of emotional wellbeing and mental health.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {therapists.map((therapist, i) => (
            <motion.div
              key={i}
              className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={therapist.image} 
                  alt={therapist.name} 
                  className="object-cover object-center w-full h-full transition-transform hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Star className="fill-yellow-500 h-4 w-4" />
                    <span className="font-medium text-foreground">{therapist.rating}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-foreground">{therapist.name}</h3>
                <p className="text-primary font-medium mb-3">{therapist.specialty}</p>
                
                <div className="flex items-center text-muted-foreground mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">{therapist.sessions}+ sessions conducted</span>
                </div>
                
                <button className="w-full bg-primary/10 hover:bg-primary/20 text-primary font-medium py-2 rounded-md transition-colors">
                  View Profile
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="bg-background rounded-2xl p-8 shadow-sm border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">How Our Therapy Works</h3>
              <p className="text-muted-foreground mb-8">
                We offer flexible therapy options to fit your schedule, preferences, and comfort level.
                Choose how you want to connect with your therapist.
              </p>
              
              <div className="space-y-6">
                {sessionTypes.map((type, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="mr-4 bg-primary/10 p-2 rounded-lg text-primary">
                      {type.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{type.title}</h4>
                      <p className="text-muted-foreground">{type.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="bg-accent/30 p-8 rounded-xl">
              <h4 className="text-xl font-semibold mb-6 text-foreground">Getting Started is Easy</h4>
              
              <div className="space-y-6">
                {[
                  { step: 1, text: "Take our matching assessment" },
                  { step: 2, text: "Browse therapist profiles" },
                  { step: 3, text: "Schedule your first session" }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mr-4">
                      {item.step}
                    </div>
                    <p className="font-medium text-foreground">{item.text}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.button
                className="mt-8 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Find Your Therapist
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TherapySection;
