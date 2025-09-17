import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! I will get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="contact-title">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="contact-subtitle">
            Ready to collaborate on exciting projects? Let's discuss opportunities and innovations together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl border border-border" data-testid="contact-form-container">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit} data-testid="contact-form">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your Name"
                  required
                  data-testid="input-name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your.email@example.com"
                  required
                  data-testid="input-email"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Project Discussion"
                  required
                  data-testid="input-subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tell me about your project or opportunity..."
                  required
                  data-testid="input-message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors transform hover:scale-105"
                data-testid="button-submit"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-xl border border-border" data-testid="contact-info-container">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4" data-testid="contact-email">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-envelope text-primary"></i>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">rakshahv004@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4" data-testid="contact-phone">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-phone text-primary"></i>
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+91 7337859829</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4" data-testid="contact-location">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-primary"></i>
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Mysore, Karnataka, India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4" data-testid="contact-github">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <i className="fab fa-github text-primary"></i>
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <a 
                      href="https://github.com/rakshavardhan" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      github.com/rakshavardhan
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border" data-testid="connect-card">
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-6">
                Open to opportunities in AI/ML, full-stack development, and innovative tech solutions. Always excited to collaborate on impactful projects!
              </p>
              
              <div className="flex space-x-4">
                <a
                  href="https://github.com/rakshavardhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-secondary hover:bg-muted text-center py-3 px-4 rounded-lg transition-colors"
                  data-testid="link-connect-github"
                >
                  <i className="fab fa-github mb-2 block text-xl"></i>
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="mailto:rakshahv004@gmail.com"
                  className="flex-1 bg-secondary hover:bg-muted text-center py-3 px-4 rounded-lg transition-colors"
                  data-testid="link-connect-email"
                >
                  <i className="fas fa-envelope mb-2 block text-xl"></i>
                  <span className="text-sm">Email</span>
                </a>
                <a
                  href="tel:7337859829"
                  className="flex-1 bg-secondary hover:bg-muted text-center py-3 px-4 rounded-lg transition-colors"
                  data-testid="link-connect-phone"
                >
                  <i className="fas fa-phone mb-2 block text-xl"></i>
                  <span className="text-sm">Call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
