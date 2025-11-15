import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Bot, Loader2 } from 'lucide-react';
import { auth, db } from '../lib/firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { faker } from '@faker-js/faker';

type FormData = {
  email: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError(null);
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, data.email, data.password);
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
        // Create user document in Firestore
        await setDoc(doc(db, "users", userCredential.user.uid), {
            name: faker.person.firstName(),
            email: userCredential.user.email,
            avatar: `https://i.pravatar.cc/100?u=${userCredential.user.uid}`,
            plan: 'Free',
        });
      }
      navigate('/');
    } catch (err: any) {
      setError(err.message || 'An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-surface-primary rounded-lg border border-border-color shadow-large">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 mb-2">
            <Bot size={32} className="text-accent-purple" />
            <h1 className="text-2xl font-bold text-text-primary">SmartApp AI</h1>
          </div>
          <h2 className="text-xl font-bold text-text-primary">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          <p className="text-text-secondary">{isLogin ? 'Sign in to continue' : 'Start your journey with us'}</p>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-text-secondary">Email</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="w-full mt-1 bg-surface-secondary border border-border-color rounded-md px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue/30"
            />
            {errors.email && <p className="text-accent-red text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-text-secondary">Password</label>
            <input
              type="password"
              {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
              className="w-full mt-1 bg-surface-secondary border border-border-color rounded-md px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue/30"
            />
            {errors.password && <p className="text-accent-red text-xs mt-1">{errors.password.message}</p>}
          </div>
          
          {error && <p className="text-accent-red text-sm text-center">{error}</p>}
          
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center gap-2 px-4 py-2.5 rounded-md bg-primary-gradient text-white text-sm font-semibold shadow-soft hover:brightness-110 transition-all disabled:opacity-70"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        
        <p className="text-sm text-center text-text-secondary">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button onClick={() => { setIsLogin(!isLogin); setError(null); }} className="font-medium text-accent-blue hover:underline ml-1">
            {isLogin ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
