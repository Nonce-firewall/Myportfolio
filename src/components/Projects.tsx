import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 group">
      <div className="relative overflow-hidden h-48 md:h-56">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full flex justify-between items-center">
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white bg-primary/80 hover:bg-primary p-2 rounded-full transform translate-y-10 group-hover:translate-y-0 transition-all duration-300"
              aria-label="View Live Site"
            >
              <ExternalLink size={18} />
            </a>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white bg-gray-800/80 hover:bg-gray-800 p-2 rounded-full transform translate-y-10 group-hover:translate-y-0 transition-all duration-300"
              aria-label="View GitHub Repository"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const projectsData: Project[] = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A comprehensive dashboard for e-commerce stores with analytics, inventory management, and order processing.",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Weather Application",
      description: "A beautiful weather app that provides real-time weather data, forecasts, and location-based services.",
      image: "https://images.pexels.com/photos/3952041/pexels-photo-3952041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["JavaScript", "API", "CSS3", "Responsive"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Task Management System",
      description: "A productivity tool for managing tasks, projects, and team collaboration with real-time updates.",
      image: "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Firebase", "Material UI", "Authentication"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Personal Finance Tracker",
      description: "An application to track expenses, income, and financial goals with visualization and budgeting features.",
      image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["TypeScript", "React", "Redux", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Recipe Finder",
      description: "A culinary application that helps users discover recipes based on ingredients they have at home.",
      image: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["JavaScript", "API Integration", "CSS Grid", "Responsive"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      description: "An application for tracking workouts, progress, and health metrics with personalized recommendations.",
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React Native", "TypeScript", "Health API", "UI/UX"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'React', label: 'React' },
    { id: 'TypeScript', label: 'TypeScript' },
    { id: 'JavaScript', label: 'JavaScript' },
    { id: 'API', label: 'API' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Here are some of my recent projects. Each one was crafted with attention to detail,
            focusing on both functionality and user experience.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;