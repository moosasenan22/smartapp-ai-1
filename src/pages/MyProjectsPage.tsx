import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search } from 'lucide-react';
import { faker } from '@faker-js/faker';
import { format } from 'date-fns';

type ProjectStatus = 'All' | 'In Progress' | 'Completed' | 'On Hold';

const mockProjects = Array.from({ length: 24 }, () => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName() + ' Platform',
  description: faker.lorem.sentence(),
  status: faker.helpers.arrayElement<ProjectStatus>(['In Progress', 'Completed', 'On Hold']),
  lastUpdate: faker.date.recent({ days: 30 }),
  progress: faker.number.int({ min: 10, max: 100 }),
  team: Array.from({ length: faker.number.int({ min: 2, max: 5 }) }, () => faker.internet.avatar()),
}));

const statusColors = {
  'In Progress': 'bg-accent-blue/20 text-accent-blue',
  'Completed': 'bg-accent-green/20 text-accent-green',
  'On Hold': 'bg-accent-orange/20 text-accent-orange',
};

const ProjectCard: React.FC<{ project: typeof mockProjects[0] }> = ({ project }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.2 }}
    className="bg-surface-primary border border-border-color rounded-lg p-5 flex flex-col justify-between hover:shadow-medium hover:-translate-y-1 transition-all"
  >
    <div>
      <h3 className="font-bold text-text-primary truncate">{project.name}</h3>
      <p className="text-sm text-text-secondary mt-1 h-10">{project.description}</p>
      <div className="flex items-center justify-between mt-4 text-xs text-text-secondary">
        <span>Last updated: {format(project.lastUpdate, 'MMM dd, yyyy')}</span>
        <span className={`px-2 py-0.5 font-medium rounded-full ${statusColors[project.status as keyof typeof statusColors]}`}>{project.status}</span>
      </div>
    </div>
    <div className="mt-4">
      <div className="flex items-center justify-between text-xs text-text-secondary mb-1">
        <span>Progress</span>
        <span>{project.progress}%</span>
      </div>
      <div className="w-full bg-surface-secondary rounded-full h-1.5">
        <div className="bg-primary-gradient h-1.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex -space-x-2">
          {project.team.map((avatar, i) => (
            <img key={i} src={avatar} alt="member" className="w-8 h-8 rounded-full border-2 border-surface-primary" />
          ))}
        </div>
        <button className="text-sm text-accent-blue font-medium hover:underline">View Details</button>
      </div>
    </div>
  </motion.div>
);

const MyProjectsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<ProjectStatus>('All');
  
  const filteredProjects = useMemo(() => {
    return mockProjects
      .filter(p => activeFilter === 'All' || p.status === activeFilter)
      .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm, activeFilter]);

  const filters: ProjectStatus[] = ['All', 'In Progress', 'Completed', 'On Hold'];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
            <h1 className="text-2xl font-bold text-text-primary">My Projects</h1>
            <p className="text-text-secondary mt-1">Manage and track all your AI-powered applications.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-md bg-primary-gradient text-white text-sm font-semibold shadow-soft hover:brightness-110 transition-all">
          <Plus size={18} />
          <span>New Project</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full bg-surface-primary border border-border-color rounded-md pl-10 pr-4 py-2 text-sm text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-blue/30 transition-all"
          />
        </div>
        <div className="flex items-center gap-2 bg-surface-primary p-1 rounded-md border border-border-color">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                activeFilter === filter
                  ? 'bg-surface-secondary text-text-primary shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
      {filteredProjects.length === 0 && (
        <div className="text-center py-16 text-text-secondary">
            <p className="font-semibold">No projects found.</p>
            <p className="text-sm mt-1">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
};

export default MyProjectsPage;
