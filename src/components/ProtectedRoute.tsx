import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Loader2 } from 'lucide-react';

const ProtectedRoute: React.FC = () => {
  const { firebaseUser, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-background">
        <Loader2 className="w-10 h-10 text-accent-purple animate-spin" />
      </div>
    );
  }

  return firebaseUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
