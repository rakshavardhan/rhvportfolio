export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-4" data-testid="footer-logo">Raksha H V</div>
          <p className="text-muted-foreground mb-6" data-testid="footer-tagline">
            Computer Science Engineering Student | AI/ML Enthusiast | Innovation Driver
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/rakshavardhan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-link-github"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="mailto:rakshahv004@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-link-email"
            >
              <i className="fas fa-envelope text-2xl"></i>
            </a>
            <a
              href="tel:7337859829"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-link-phone"
            >
              <i className="fas fa-phone text-2xl"></i>
            </a>
          </div>
          <p className="text-sm text-muted-foreground" data-testid="footer-copyright">
            © 2025 Raksha H V. All rights reserved. | Designed with passion and precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
