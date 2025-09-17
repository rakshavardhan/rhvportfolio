import { useState } from 'react';
import ProjectModal from './project-modal';

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

const projects: Project[] = [
  {
    id: 'medical-assistant',
    title: 'AI-Powered Medical Assistant',
    subtitle: '2nd Place Winner',
    badge: '2nd Place Winner',
    badgeColor: 'bg-yellow-500/20 text-yellow-300',
    description: 'Built an AI-driven assistant for early diagnosis support and patient recommendations. Led wireframing, UI/UX, and front-end development.',
    technologies: ['AI/ML', 'Python', 'UI/UX'],
    icon: 'fas fa-stethoscope',
    iconColor: 'from-green-400 to-green-600',
    detailedDescription: 'Developed an innovative AI-driven medical assistant designed to support early diagnosis and provide personalized patient recommendations. This project showcased the integration of machine learning algorithms with intuitive user interface design.',
    features: [
      'AI-powered diagnostic suggestions based on symptoms',
      'Interactive data visualizations for patient insights',
      'User-friendly interface designed through comprehensive wireframing',
      'Real-time recommendation engine',
      'Responsive design optimized for healthcare professionals'
    ],
    techStack: ['Python', 'Machine Learning', 'Data Visualization', 'UI/UX Design', 'Frontend Development'],
    role: 'Led the complete UI/UX design process from wireframing to implementation, developed interactive data visualizations, and handled frontend development. Collaborated with the team to ensure seamless integration of AI components with the user interface.'
  },
  {
    id: 'therapy-platform',
    title: 'Therapy Tracking Platform',
    subtitle: '1st Place Winner',
    badge: '1st Place Winner',
    badgeColor: 'bg-yellow-500/20 text-yellow-300',
    description: 'Developed dashboards with chatbot, calendar-based scheduling, and secure video calling for audiologists and patients.',
    technologies: ['Web App', 'Chatbot', 'Video Call'],
    icon: 'fas fa-calendar-check',
    iconColor: 'from-blue-400 to-blue-600',
    detailedDescription: 'Created a comprehensive tele-consultation web application that revolutionizes therapy accessibility and monitoring. This platform bridges the gap between audiologists and patients through innovative digital solutions.',
    features: [
      'Integrated chatbot for 24/7 patient support',
      'Calendar-based appointment scheduling system',
      'Secure video calling for remote consultations',
      'Real-time therapy progress monitoring',
      'Interactive dashboards for both patients and healthcare providers',
      'Data analytics for treatment effectiveness tracking'
    ],
    techStack: ['Web Development', 'Chatbot Integration', 'Video Calling API', 'Calendar API', 'Dashboard Design'],
    impact: 'This platform significantly improved therapy accessibility for patients in remote areas and provided healthcare professionals with powerful tools for remote monitoring and consultation, leading to more consistent therapy outcomes.'
  },
  {
    id: 'ayurveda-system',
    title: 'GenAI Ayurveda System',
    subtitle: 'Personal Project',
    badge: 'Personal Project',
    badgeColor: 'bg-green-500/20 text-green-300',
    description: 'Integrated Google Gemini API with prompt engineering to build a conversational GenAI-based recommendation tool.',
    technologies: ['GenAI', 'Gemini API', 'RAG'],
    icon: 'fas fa-leaf',
    iconColor: 'from-purple-400 to-purple-600',
    detailedDescription: 'Built an innovative conversational AI system that combines ancient Ayurvedic wisdom with modern generative AI technology to provide personalized wellness recommendations and remedies.',
    features: [
      'Google Gemini API integration for advanced natural language processing',
      'Custom prompt engineering for Ayurvedic context understanding',
      'RAG (Retrieval-Augmented Generation) pipeline for accurate information retrieval',
      'Personalized remedy recommendations based on user input',
      'Conversational interface for natural user interaction',
      'Knowledge base of traditional Ayurvedic practices'
    ],
    techStack: ['Google Gemini API', 'Prompt Engineering', 'RAG Pipeline', 'NLP', 'Python'],
    impact: 'This project demonstrates the successful integration of traditional knowledge systems with cutting-edge AI technology, creating a bridge between ancient wisdom and modern convenience for wellness enthusiasts.'
  },
  {
    id: 'graphical-auth',
    title: 'Graphical Password Auth',
    subtitle: 'Security Project',
    badge: 'Security Project',
    badgeColor: 'bg-blue-500/20 text-blue-300',
    description: 'Created an image-based login mechanism to enhance authentication security with usability and strong encryption.',
    technologies: ['Security', 'Authentication', 'Encryption'],
    icon: 'fas fa-shield-alt',
    iconColor: 'from-red-400 to-red-600',
    detailedDescription: 'Developed an innovative image-based authentication system that enhances security while maintaining user-friendliness. This system offers an alternative to traditional text-based passwords using visual memory patterns.',
    features: [
      'Image-based password selection and authentication',
      'Advanced encryption algorithms for secure storage',
      'User-friendly interface with intuitive design',
      'Multiple security layers for enhanced protection',
      'Fallback mechanisms for account recovery',
      'Performance optimization for quick authentication'
    ],
    techStack: ['Authentication Systems', 'Encryption', 'Security Protocols', 'UI/UX Design', 'Database Security'],
    impact: 'This system addresses common security vulnerabilities of traditional passwords by leveraging human visual memory capabilities while implementing robust encryption and validation techniques to prevent unauthorized access.'
  },
  {
    id: 'encryption-app',
    title: 'Encryption Web App',
    subtitle: 'Full Stack',
    badge: 'Full Stack',
    badgeColor: 'bg-purple-500/20 text-purple-300',
    description: 'Built a secure encryption/decryption platform for text, audio, and images using ReactJS and Flask backend.',
    technologies: ['ReactJS', 'Flask', 'Encryption'],
    icon: 'fas fa-lock',
    iconColor: 'from-indigo-400 to-indigo-600',
    detailedDescription: 'Built a comprehensive full-stack web application that provides secure encryption and decryption capabilities for multiple file types including text, audio, and images. This platform ensures data privacy and security through advanced cryptographic methods.',
    features: [
      'Multi-format support: text, audio, and image encryption',
      'Advanced encryption algorithms implementation',
      'Intuitive ReactJS frontend for seamless user experience',
      'Robust Flask backend for secure processing',
      'File upload and download functionality',
      'Real-time encryption/decryption status updates',
      'Secure key management system'
    ],
    techStack: ['ReactJS', 'Flask', 'Python', 'Cryptography', 'Full Stack'],
    impact: 'The application demonstrates proficiency in full-stack development, combining modern frontend technologies with secure backend processing to deliver a production-ready encryption solution suitable for various use cases.'
  },
  {
    id: 'ml-collection',
    title: 'ML Model Collection',
    subtitle: 'Portfolio',
    badge: 'Portfolio',
    badgeColor: 'bg-teal-500/20 text-teal-300',
    description: 'Built and documented multiple ML/DL models in Jupyter Notebooks, showcasing end-to-end development and evaluation.',
    technologies: ['Jupyter', 'ML/DL', 'Python'],
    icon: 'fas fa-brain',
    iconColor: 'from-teal-400 to-teal-600',
    detailedDescription: 'Comprehensive collection of machine learning and deep learning models implemented and documented in Jupyter Notebooks, showcasing end-to-end development processes from data preprocessing to model evaluation.',
    features: [
      'Comprehensive data preprocessing and cleaning',
      'Exploratory data analysis with visualizations',
      'Model implementation with detailed explanations',
      'Performance evaluation and comparison metrics',
      'Hyperparameter tuning and optimization',
      'Best practices and lessons learned documentation'
    ],
    techStack: ['Jupyter Notebooks', 'Python', 'Scikit-learn', 'TensorFlow/PyTorch', 'Pandas/NumPy', 'Matplotlib/Seaborn'],
    impact: 'Traditional ML: Linear/Logistic Regression, Decision Trees, Random Forests, Support Vector Machines, K-Nearest Neighbors. Deep Learning: Artificial Neural Networks, Convolutional Neural Networks, Recurrent Neural Networks, Transformers, Custom Architectures.'
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding" data-testid="projects-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="projects-title">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="projects-subtitle">
            A showcase of innovative solutions spanning AI, cybersecurity, and web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card bg-card border border-border rounded-xl p-6 hover:shadow-2xl cursor-pointer"
              onClick={() => setSelectedProject(project)}
              data-testid={`project-card-${project.id}`}
            >
              <div className="mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${project.iconColor} rounded-lg flex items-center justify-center mb-4`}>
                  <i className={`${project.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <span className={`inline-block ${project.badgeColor} text-xs px-2 py-1 rounded-full mb-2`}>
                  {project.badge}
                </span>
              </div>
              <p className="text-muted-foreground mb-4 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-primary/20 text-primary text-xs px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-primary hover:underline">View Details</span>
                <i className="fas fa-arrow-right text-primary"></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
