import { useState, useEffect } from 'react';
import { useTheme } from '@/hooks/use-theme';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'timeline', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border" data-testid="main-navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-primary" data-testid="logo">RHV</div>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'projects', 'timeline', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`nav-item hover:text-primary transition-colors capitalize ${
                  activeSection === section ? 'active' : ''
                }`}
                data-testid={`nav-${section}`}
              >
                {section === 'timeline' ? 'Journey' : section}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-secondary hover:bg-muted transition-colors"
              data-testid="theme-toggle"
            >
              <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'} text-foreground`}></i>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-secondary hover:bg-muted transition-colors"
              data-testid="mobile-menu-toggle"
            >
              <i className="fas fa-bars text-foreground"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border" data-testid="mobile-menu">
          <div className="px-4 py-4 space-y-3">
            {['home', 'about', 'projects', 'timeline', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className="block hover:text-primary transition-colors capitalize"
                data-testid={`mobile-nav-${section}`}
              >
                {section === 'timeline' ? 'Journey' : section}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
