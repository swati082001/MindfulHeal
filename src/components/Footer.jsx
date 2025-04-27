
import { Link as ScrollLink } from 'react-scroll';
import { Heart, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">MindfulHeal</h3>
            <p className="text-muted-foreground mb-4">
              Empowering individuals on their journey to emotional well-being through professional therapy and self-help resources.
            </p>
            <div className="flex space-x-4">
              <motion.a href="#" whileHover={{ scale: 1.1 }} className="text-foreground hover:text-primary">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.1 }} className="text-foreground hover:text-primary">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.1 }} className="text-foreground hover:text-primary">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.1 }} className="text-foreground hover:text-primary">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Site Map</h3>
            <ul className="space-y-2">
              {['hero', 'features', 'therapy', 'selfhelp'].map((section, index) => (
                <li key={index}>
                  <ScrollLink
                    to={section}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                  >
                    {section === 'hero' 
                      ? 'Home' 
                      : section === 'selfhelp'
                      ? 'Self Help'
                      : section.charAt(0).toUpperCase() + section.slice(1)}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">Blog</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">Community</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">Terms of Service</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail size={18} className="text-primary" />
                <a href="mailto:support@mindfuheal.com" className="text-muted-foreground hover:text-primary">
                  support@mindfuheal.com
                </a>
              </div>
              <div className="flex">
                <div className="mt-2 flex items-center justify-center px-4 py-2 border border-primary text-primary rounded-lg">
                  <Heart className="mr-2 h-4 w-4" />
                  <span>Get Support Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
            © {currentYear} MindfulHeal. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;