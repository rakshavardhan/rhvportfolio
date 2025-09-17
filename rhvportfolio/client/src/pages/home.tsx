import { useEffect, useState } from 'react';
import Navigation from '../components/navigation';
import HeroSection from '../components/hero-section';
import AboutSection from '../components/about-section';
import ProjectsSection from '../components/projects-section';
import TimelineSection from '../components/timeline-section';
import ContactSection from '../components/contact-section';
import Footer from '../components/footer';
import LoadingScreen from '../components/loading-screen';
import { useTheme } from '../hooks/use-theme';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <LoadingScreen isLoading={isLoading} />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TimelineSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
