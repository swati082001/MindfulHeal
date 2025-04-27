import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const AnimatedSection = ({ 
  children, 
  className = '', 
  id, 
  delay = 0,
  direction = 'up'
}) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {  // Trigger when 80% of the element is in view
          setInView(true);
        } else {
          setInView(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id]);

  const variants = {
    hidden: {
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
      opacity: 0
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: delay
      }
    }
  };

  return (
    <section id={id} className={`section-padding ${className}`}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        className="w-full"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default AnimatedSection;
