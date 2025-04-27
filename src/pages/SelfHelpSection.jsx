
import AnimatedSection from '../common/AnimatesSection';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Headphones, BookMarked } from 'lucide-react';

const SelfHelpSection = () => {
  const resources = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Guided Journaling",
      description: "Structured writing prompts to help you reflect, process emotions, and gain clarity.",
      color: "bg-teal-100 dark:bg-teal-900/30",
      textColor: "text-teal-700 dark:text-teal-300",
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Meditation Library",
      description: "Calming audio sessions for stress relief, better sleep, and emotional balance.",
      color: "bg-purple-100 dark:bg-purple-900/30",
      textColor: "text-purple-700 dark:text-purple-300",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Mood Tracking",
      description: "Tools to track emotional patterns and identify triggers for better self-awareness.",
      color: "bg-blue-100 dark:bg-blue-900/30",
      textColor: "text-blue-700 dark:text-blue-300",
    },
    {
      icon: <BookMarked className="h-8 w-8" />,
      title: "Educational Content",
      description: "Articles and videos about mental health topics, coping strategies, and growth.",
      color: "bg-amber-100 dark:bg-amber-900/30",
      textColor: "text-amber-700 dark:text-amber-300",
    }
  ];
  
  const articles = [
    {
      title: "Understanding Emotional Triggers",
      category: "Self-Awareness",
      readTime: "5 min read"
    },
    {
      title: "Building Healthy Boundaries",
      category: "Relationships",
      readTime: "8 min read"
    },
    {
      title: "Techniques for Managing Anxiety",
      category: "Coping Skills",
      readTime: "6 min read"
    }
  ];

  return (
    <AnimatedSection id="selfhelp" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            <span className="text-secondary">Self-Help</span> Resources
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover tools and practices that empower you to take an active role in your emotional wellbeing journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {resources.map((resource, i) => (
            <motion.div
              key={i}
              className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className={`p-6 ${resource.color} flex flex-col items-center text-center`}>
                <div className={`mb-4 ${resource.textColor}`}>
                  {resource.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{resource.title}</h3>
                <p className="text-muted-foreground">{resource.description}</p>
              </div>
              <div className="bg-background px-6 py-4">
                <button className="w-full text-primary hover:text-primary/80 font-medium py-2 transition-colors">
                  Explore →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="bg-accent/30 rounded-xl p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">Latest From Our Blog</h3>
            
            <div className="space-y-6">
              {articles.map((article, i) => (
                <motion.div 
                  key={i} 
                  className="bg-background rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{article.title}</h4>
                      <div className="flex items-center space-x-3">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {article.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                    <div className="text-primary">→</div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <button className="mt-6 text-primary font-medium inline-flex items-center">
              View all articles
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">Join Our Community</h3>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Connect with others on similar journeys, share experiences, and give and receive support in a safe, moderated environment.
              </p>
              
              <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                <div className="flex space-x-3 items-center mb-3">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <span className="font-bold">5k+</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Active community members</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Join discussions on topics like anxiety, relationships, personal growth, and more.
                </p>
              </div>
              
              <motion.button
                className="mt-4 w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium py-3 rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Join Community
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl md:text-2xl font-medium mb-6 text-foreground">
            Start your healing journey today with MindfulHeal
          </h3>
          <motion.button
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-3 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now
          </motion.button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SelfHelpSection;