import { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  useEffect(() => {
    if (isVisible) {
      const skillBars = document.querySelectorAll('.skill-bar');
      skillBars.forEach(bar => {
        bar.classList.add('animate');
      });
    }
  }, [isVisible]);

  return (
    <section id="about" className="section-padding bg-card/50" ref={sectionRef} data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="about-title">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="about-subtitle">
            Passionate about leveraging technology to solve real-world problems through innovative AI and ML solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl border border-border" data-testid="personal-profile-card">
              <h3 className="text-2xl font-semibold mb-4">Personal Profile</h3>
              <div className="space-y-3 text-muted-foreground">
                <p data-testid="profile-location"><strong className="text-foreground">Location:</strong> Mysore, Karnataka</p>
                <p data-testid="profile-education"><strong className="text-foreground">Education:</strong> B.E. Computer Science Engineering</p>
                <p data-testid="profile-institution"><strong className="text-foreground">Institution:</strong> Maharaja Institute of Technology, Mysore (VTU)</p>
                <p data-testid="profile-cgpa"><strong className="text-foreground">CGPA:</strong> 8.5 (up to 6th semester)</p>
                <p data-testid="profile-email"><strong className="text-foreground">Email:</strong> rakshahv004@gmail.com</p>
                <p data-testid="profile-phone"><strong className="text-foreground">Phone:</strong> +91 7337859829</p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border" data-testid="achievements-card">
              <h3 className="text-2xl font-semibold mb-4">Highlights & Achievements</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3" data-testid="achievement-1st-prize">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-muted-foreground">1st Prize - AIISH National Hackathon</span>
                </div>
                <div className="flex items-center space-x-3" data-testid="achievement-2nd-prize">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <span className="text-muted-foreground">2nd Prize - Bhahuballi College Hackathon</span>
                </div>
                <div className="flex items-center space-x-3" data-testid="achievement-consolation">
                  <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                  <span className="text-muted-foreground">Consolation Prize - GSSS College Hackathon</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold" data-testid="skills-title">Skills & Expertise</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-4 text-primary">Programming Languages</h4>
                <div className="space-y-3">
                  <div data-testid="skill-python">
                    <div className="flex justify-between mb-1">
                      <span>Python</span>
                      <span className="text-muted-foreground">90%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2 skill-bar">
                      <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div data-testid="skill-javascript">
                    <div className="flex justify-between mb-1">
                      <span>JavaScript/ReactJS</span>
                      <span className="text-muted-foreground">85%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2 skill-bar">
                      <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div data-testid="skill-java">
                    <div className="flex justify-between mb-1">
                      <span>Java</span>
                      <span className="text-muted-foreground">80%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2 skill-bar">
                      <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-4 text-primary">Machine Learning & AI</h4>
                <div className="space-y-3">
                  <div data-testid="skill-ml-models">
                    <div className="flex justify-between mb-1">
                      <span>Machine Learning Models</span>
                      <span className="text-muted-foreground">88%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2 skill-bar">
                      <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{width: '88%'}}></div>
                    </div>
                  </div>
                  <div data-testid="skill-llms">
                    <div className="flex justify-between mb-1">
                      <span>LLMs & Prompt Engineering</span>
                      <span className="text-muted-foreground">85%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2 skill-bar">
                      <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div data-testid="skill-deep-learning">
                    <div className="flex justify-between mb-1">
                      <span>Deep Learning</span>
                      <span className="text-muted-foreground">82%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2 skill-bar">
                      <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{width: '82%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-4 text-primary">Cloud & Tools</h4>
                <div className="space-y-3">
                  <div data-testid="skill-cloud">
                    <div className="flex justify-between mb-1">
                      <span>Google Cloud/Vertex AI</span>
                      <span className="text-muted-foreground">78%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2 skill-bar">
                      <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{width: '78%'}}></div>
                    </div>
                  </div>
                  <div data-testid="skill-git">
                    <div className="flex justify-between mb-1">
                      <span>Git & Version Control</span>
                      <span className="text-muted-foreground">85%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2 skill-bar">
                      <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
