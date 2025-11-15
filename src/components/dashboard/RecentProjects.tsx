import React from 'react';
import { faker } from '@faker-js/faker';
import { formatDistanceToNow } from 'date-fns';
import { Briefcase, MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = Array.from({ length: 5 }, () => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName() + ' App',
  lastUpdate: formatDistanceToNow(faker.date.recent({ days: 10 }), { addSuffix: true }),
  status: faker.helpers.arrayElement(['In Progress', 'Completed', 'On Hold']),
  progress: faker.number.int({ min: 20, max: 100 }),
  team: Array.from({ length: faker.number.int({ min: 2, max: 4 }) }, () => faker.internet.avatar()),
}));

const statusColors = {
  'In Progress': 'bg-accent-blue/20 text-accent-blue',
  'Completed': 'bg-accent-green/20 text-accent-green',
  'On Hold': 'bg-accent-orange/20 text-accent-orange',
};

const RecentProjects: React.FC = () => {
  return (
    <div className="bg-surface-primary p-6 rounded-lg border border-border-color">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-text-primary">Recent Projects</h3>
        <Link to="/projects" className="text-sm font-medium text-accent-blue hover:underline">View All</Link>
      </div>
      <div className="space-y-1">
        {projects.map(project => (
          <div key={project.id} className="grid grid-cols-3 md:grid-cols-5 items-center p-3 rounded-md hover:bg-surface-secondary transition-colors">
            <div className="col-span-2 md:col-span-2 flex items-center gap-4">
              <div className="w-10 h-10 flex-shrink-0 items-center justify-center rounded-md bg-surface-secondary border border-border-color hidden sm:flex">
                <Briefcase size={20} className="text-text-secondary" />
              </div>
              <div>
                <p className="font-semibold text-text-primary text-sm truncate">{project.name}</p>
                <p className="text-xs text-text-secondary">Last updated {project.lastUpdate}</p>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="flex -space-x-2">
                {project.team.map((avatar, i) => (
                  <img key={i} src={avatar} alt="member" className="w-7 h-7 rounded-full border-2 border-surface-primary" />
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${statusColors[project.status as keyof typeof statusColors]}`}>{project.status}</span>
            </div>
            <div className="flex justify-end">
              <button className="text-text-secondary hover:text-text-primary p-2 rounded-full hover:bg-border-color">
                <MoreHorizontal size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
