import { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  useEffect(() => {
    if (isVisible) {
      const timelineItems = document.querySelectorAll('.timeline-item');
      timelineItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('animate');
        }, index * 200);
      });
    }
  }, [isVisible]);

  return (
    <section id="timeline" className="section-padding bg-card/50" ref={sectionRef} data-testid="timeline-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="timeline-title">My Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="timeline-subtitle">
            A timeline of my educational milestones, achievements, and professional growth.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary h-full"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {/* Current Education */}
            <div className="timeline-item flex items-center" data-testid="timeline-current-education">
              <div className="flex-1 pr-8 text-right">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-semibold mb-2">B.E. Computer Science Engineering</h3>
                  <p className="text-primary mb-2">2022 - 2026 (Ongoing)</p>
                  <p className="text-muted-foreground mb-2">Maharaja Institute of Technology, Mysore (VTU)</p>
                  <p className="text-sm text-muted-foreground">Current CGPA: 8.5 (up to 6th semester)</p>
                </div>
              </div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              </div>
              <div className="flex-1 pl-8"></div>
            </div>

            {/* Recent Certifications */}
            <div className="timeline-item flex items-center" data-testid="timeline-certifications">
              <div className="flex-1 pr-8"></div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              </div>
              <div className="flex-1 pl-8">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-semibold mb-2">Professional Certifications</h3>
                  <p className="text-primary mb-2">2025</p>
                  <div className="text-muted-foreground space-y-1">
                    <p>• Prompt Design in Vertex AI - Google (Aug 2025)</p>
                    <p>• AI & Data Science Applications - Tejas-Pro (Sep 2025)</p>
                    <p>• Six Sigma Assessment - Learn Tube (Aug 2025)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hackathon Wins */}
            <div className="timeline-item flex items-center" data-testid="timeline-hackathons">
              <div className="flex-1 pr-8 text-right">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-semibold mb-2">Major Hackathon Victories</h3>
                  <p className="text-primary mb-2">2024-2025</p>
                  <div className="text-muted-foreground space-y-1">
                    <p>🥇 1st Prize - AIISH National Hackathon</p>
                    <p>🥈 2nd Prize - Bhahuballi College Hackathon</p>
                    <p>🏆 Consolation Prize - GSSS College Hackathon</p>
                  </div>
                </div>
              </div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-yellow-500 rounded-full border-4 border-background"></div>
              </div>
              <div className="flex-1 pl-8"></div>
            </div>

            {/* Pre-University */}
            <div className="timeline-item flex items-center" data-testid="timeline-puc">
              <div className="flex-1 pr-8"></div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              </div>
              <div className="flex-1 pl-8">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-semibold mb-2">2nd PUC (PCMB)</h3>
                  <p className="text-primary mb-2">Completed</p>
                  <p className="text-muted-foreground mb-2">Pramati Hill View Academy PU College</p>
                  <p className="text-sm text-muted-foreground">Score: 82%</p>
                </div>
              </div>
            </div>

            {/* High School */}
            <div className="timeline-item flex items-center" data-testid="timeline-high-school">
              <div className="flex-1 pr-8 text-right">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-semibold mb-2">High School (CBSE)</h3>
                  <p className="text-primary mb-2">Completed</p>
                  <p className="text-muted-foreground mb-2">Pramati Hill View Academy</p>
                  <p className="text-sm text-muted-foreground">Score: 92%</p>
                </div>
              </div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              </div>
              <div className="flex-1 pl-8"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
