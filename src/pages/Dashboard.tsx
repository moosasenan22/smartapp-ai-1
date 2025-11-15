import React from 'react';
import { motion } from 'framer-motion';
import WelcomeBanner from '../components/dashboard/WelcomeBanner';
import StatCard from '../components/dashboard/StatCard';
import PerformanceChart from '../components/dashboard/PerformanceChart';
import RecentProjects from '../components/dashboard/RecentProjects';
import AIQuickAccess from '../components/dashboard/AIQuickAccess';
import { Briefcase, Zap, Cpu, Users } from 'lucide-react';

const stats = [
  {
    icon: Briefcase,
    label: 'Total Projects',
    value: '78',
    change: '+12.5%',
    changeType: 'increase',
    color: 'text-accent-blue'
  },
  {
    icon: Zap,
    label: 'Active Tasks',
    value: '34',
    change: '-3.2%',
    changeType: 'decrease',
    color: 'text-accent-orange'
  },
  {
    icon: Cpu,
    label: 'API Usage',
    value: '2.1M',
    change: '+25.8%',
    changeType: 'increase',
    color: 'text-accent-purple'
  },
  {
    icon: Users,
    label: 'Team Members',
    value: '12',
    change: '+2',
    changeType: 'increase',
    color: 'text-accent-green'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Dashboard: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={itemVariants}>
        <WelcomeBanner />
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div key={index} variants={itemVariants}>
            <StatCard {...stat} />
          </motion.div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <PerformanceChart />
        </motion.div>
        <motion.div variants={itemVariants}>
          <AIQuickAccess />
        </motion.div>
      </div>

      <motion.div variants={itemVariants}>
        <RecentProjects />
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
