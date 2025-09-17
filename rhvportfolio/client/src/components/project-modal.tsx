import { useEffect } from 'react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  description: string;
  technologies: string[];
  icon: string;
  iconColor: string;
  detailedDescription: string;
  features: string[];
  techStack: string[];
  role?: string;
  impact?: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
      data-testid="project-modal"
    >
      <div className="bg-card max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xl p-6 transform transition-all">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold" data-testid="modal-title">{project.title}</h3>
          <button
            onClick={onClose}
            className="text-2xl hover:text-primary transition-colors"
            data-testid="modal-close"
          >
            &times;
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-4">
            <span className={`${project.badgeColor} text-sm px-3 py-1 rounded-full`}>
              {project.badge}
            </span>
          </div>

          <p className="text-muted-foreground" data-testid="modal-description">
            {project.detailedDescription}
          </p>

          <div className="bg-secondary p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Key Features:</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1" data-testid="modal-features">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="bg-secondary p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2" data-testid="modal-tech-stack">
              {project.techStack.map((tech) => (
                <span key={tech} className="bg-primary/20 text-primary text-sm px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.role && (
            <div className="bg-secondary p-4 rounded-lg">
              <h4 className="font-semibold mb-2">My Role:</h4>
              <p className="text-muted-foreground" data-testid="modal-role">
                {project.role}
              </p>
            </div>
          )}

          {project.impact && (
            <div className="bg-secondary p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{project.id === 'ml-collection' ? 'Models Implemented:' : 'Impact:'}</h4>
              <p className="text-muted-foreground" data-testid="modal-impact">
                {project.impact}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
