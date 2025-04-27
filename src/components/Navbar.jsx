import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X, Brain, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from "../context/ThemeProvider"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { theme, setTheme } = useTheme(); 
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero', offset: -100 },
    { name: 'Features', to: 'features', offset: -50 },
    { name: 'Therapy', to: 'therapy', offset: -50 },
    { name: 'Self Help', to: 'selfhelp', offset: -50 },
  ];
  
  const navbarClass = scrollPosition > 50 
    ? 'bg-background/80 backdrop-blur-lg shadow-md'
    : 'bg-transparent';
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarClass}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <ScrollLink to="hero" smooth={true} duration={500} offset={-100} className="cursor-pointer">
              <div className="flex items-center gap-2">
                <Brain className="w-8 h-8 text-primary" />
                <span className="text-xl font-bold text-foreground">MindfulHeal</span>
              </div>
            </ScrollLink>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={link.offset}
                  duration={500}
                  className="text-foreground/80 hover:text-primary cursor-pointer transition-colors font-medium"
                  activeClass="text-primary font-semibold"
                >
                  {link.name}
                </ScrollLink>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="h-9 w-9 rounded-lg p-2 bg-[#f8fafc] hover:bg-[#f3f0fb] border border-border flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5 text-[#07090c]" />
              ) : (
                <Sun className="h-5 w-5 text-[#07090c]" />
              )}
            </motion.button>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-md shadow-lg">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={link.offset}
                  duration={500}
                  className="text-foreground/80 hover:text-primary block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                  activeClass="text-primary font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </ScrollLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
