import { useTypingAnimation } from '@/hooks/use-typing-animation';

export default function HeroSection() {
  const texts = [
    'AI/ML Engineer',
    'Full Stack Developer',
    'Hackathon Winner',
    'Innovation Enthusiast',
    'Problem Solver'
  ];

  const typingText = useTypingAnimation(texts);

  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" data-testid="hero-section">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent rounded-full animate-float"></div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className="mb-8">
          {/* Animated profile image placeholder */}
          <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 animate-float flex items-center justify-center" data-testid="profile-avatar">
            <i className="fas fa-code text-4xl text-white"></i>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4" data-testid="hero-title">
          <span className="text-primary">Raksha</span> H V
        </h1>
        
        <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-12">
          <span className="typing-animation" data-testid="typing-text">{typingText}</span>
        </div>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed" data-testid="hero-description">
          Driven Computer Science Engineering student specializing in machine learning, AI, and innovative tech solutions. 
          Passionate about creating impactful applications that bridge technology and user experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => handleNavClick('projects')}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-all transform hover:scale-105"
            data-testid="button-view-work"
          >
            View My Work
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="border border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all transform hover:scale-105"
            data-testid="button-contact"
          >
            Get In Touch
          </button>
        </div>

        <div className="flex justify-center space-x-6 mt-12">
          <a 
            href="https://github.com/rakshavardhan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
            data-testid="link-github"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="mailto:rakshahv004@gmail.com"
            className="text-2xl text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
            data-testid="link-email"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a 
            href="tel:7337859829"
            className="text-2xl text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
            data-testid="link-phone"
          >
            <i className="fas fa-phone"></i>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => handleNavClick('about')}
          className="text-muted-foreground hover:text-primary transition-colors"
          data-testid="button-scroll-down"
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </button>
      </div>
    </section>
  );
}
