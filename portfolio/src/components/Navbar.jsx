import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function NavSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "articles", label: "Articles" },
    // { id: "contact", label: "CONTACT" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 pt-6"
    >
      
        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center">
          <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a]/95 backdrop-blur-lg rounded-full border border-gray-500 shadow-xl">
          <div className="flex items-center gap-8 mr-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white transition-colors text-sm"
            >
              {item.label}
            </button>
          ))}
        </div>
          <button onClick={() => scrollToSection("contact")} className="px-3 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white rounded-full transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-orange-500/50">
            Get in touch
          </button>
          </div>
          </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-center">
        <div className="flex items-center justify-right w-full max-w-md px-3 py-4 bg-[#1a1a1a]/95 backdrop-blur-lg rounded-full border border-gray-500 shadow-xl">
          <span className="text-gray-300 text-sm">Menu</span>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-6" />}
          </button>
        </div>
      </div>
      

      {/* Mobile Menu */}
       <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 mx-auto max-w-md"
          >
            <div className="bg-[#1a1a1a]/95 backdrop-blur-lg rounded-3xl border border-gray-500 shadow-xl overflow-hidden">
              <div className="px-6 py-4 flex flex-col gap-2">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-300 hover:text-white transition-colors text-left py-3 px-4 rounded-lg hover:bg-gray-800/50"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                  onClick={() => scrollToSection("contact")}
                  className="mt-2 px-3 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white rounded-full transition-all duration-300 text-sm font-medium shadow-lg"
                >
                  Get in touch
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}