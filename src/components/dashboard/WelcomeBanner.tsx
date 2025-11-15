import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const WelcomeBanner: React.FC = () => {
  const { user } = useAuth();
  return (
    <div className="relative bg-welcome-gradient rounded-lg p-6 sm:p-8 overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Welcome back, {user?.name}!</h2>
        <p className="text-white/80 max-w-lg text-sm sm:text-base">
          Your projects are looking great. Let's build something amazing today with the power of AI.
        </p>
        <Link to="/assistant">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 flex items-center gap-2 px-5 py-2.5 rounded-md bg-white/20 backdrop-blur-sm text-white text-sm font-semibold hover:bg-white/30 transition-all"
            >
              <Sparkles size={18} />
              <span>Explore AI Features</span>
            </motion.button>
        </Link>
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets%2F7e8321442f43477c87640b43564f2858%2F97327315185942b080b55502c3476721?width=500" alt="Abstract shapes" className="absolute -right-16 -bottom-20 w-60 sm:w-80 opacity-30 pointer-events-none" />
    </div>
  );
};

export default WelcomeBanner;
