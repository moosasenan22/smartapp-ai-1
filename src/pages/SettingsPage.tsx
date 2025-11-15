import React, { useState } from 'react';
import { User, Shield, CreditCard, Save } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAuth } from '../contexts/AuthContext';

type SettingsTab = 'Profile' | 'Security' | 'Billing';

type ProfileInputs = {
  fullName: string;
  email: string;
};

const ProfileSettings: React.FC = () => {
    const { user } = useAuth();
    const { register } = useForm<ProfileInputs>({
        defaultValues: {
            fullName: user?.name,
            email: user?.email
        }
    });

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-6">
                <img src={user?.avatar} alt={user?.name} className="w-24 h-24 rounded-full border-4 border-accent-blue" />
                <div>
                    <button className="px-4 py-2 text-sm font-semibold text-white bg-accent-blue rounded-md hover:bg-accent-blue/90">Upload New Photo</button>
                    <p className="text-xs text-text-secondary mt-2">Recommended size: 200x200px</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="fullName" className="text-sm font-medium text-text-secondary">Full Name</label>
                    <input id="fullName" {...register('fullName')} className="w-full mt-1 bg-surface-secondary border border-border-color rounded-md px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue/30" />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm font-medium text-text-secondary">Email Address</label>
                    <input id="email" type="email" {...register('email')} className="w-full mt-1 bg-surface-secondary border border-border-color rounded-md px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue/30" />
                </div>
            </div>
        </div>
    );
};

const SecuritySettings: React.FC = () => (
  <div className="space-y-6">
    <div>
      <h3 className="text-lg font-semibold text-text-primary">Change Password</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
        <div>
            <label className="text-sm font-medium text-text-secondary">New Password</label>
            <input type="password" placeholder="••••••••" className="w-full mt-1 bg-surface-secondary border border-border-color rounded-md px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue/30" />
        </div>
        <div>
            <label className="text-sm font-medium text-text-secondary">Confirm New Password</label>
            <input type="password" placeholder="••••••••" className="w-full mt-1 bg-surface-secondary border border-border-color rounded-md px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue/30" />
        </div>
      </div>
    </div>
     <div>
      <h3 className="text-lg font-semibold text-text-primary">Two-Factor Authentication</h3>
      <div className="mt-2 p-4 bg-surface-secondary rounded-lg flex items-center justify-between">
        <p className="text-sm text-text-secondary">Enable 2FA to add an extra layer of security to your account.</p>
        <button className="px-4 py-2 text-sm font-semibold text-white bg-accent-green rounded-md hover:bg-accent-green/90">Enable 2FA</button>
      </div>
    </div>
  </div>
);

const BillingSettings: React.FC = () => {
    const { user } = useAuth();
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-lg font-semibold text-text-primary">Current Plan</h3>
                <div className="mt-2 p-6 bg-surface-secondary rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <p className="text-xl font-bold text-accent-purple">{user?.plan}</p>
                        <p className="text-sm text-text-secondary">Renews on July 30, 2025</p>
                    </div>
                    <button className="px-4 py-2 text-sm font-semibold text-white bg-primary-gradient rounded-md hover:brightness-110">Upgrade Plan</button>
                </div>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-text-primary">Payment Method</h3>
                <div className="mt-2 p-6 bg-surface-secondary rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <CreditCard size={24} className="text-text-secondary"/>
                        <div>
                            <p className="font-semibold text-text-primary">Visa ending in 1234</p>
                            <p className="text-sm text-text-secondary">Expires 12/2028</p>
                        </div>
                    </div>
                    <button className="text-sm font-medium text-accent-blue hover:underline">Update</button>
                </div>
            </div>
        </div>
    );
};


const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SettingsTab>('Profile');
  const { handleSubmit } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log("Saving changes:", data);
    alert("Changes saved! Check the console for the data.");
  };

  const tabs: { name: SettingsTab; icon: React.ElementType }[] = [
    { name: 'Profile', icon: User },
    { name: 'Security', icon: Shield },
    { name: 'Billing', icon: CreditCard },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary">Settings</h1>
        <p className="text-text-secondary mt-1">Manage your account, security, and billing preferences.</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-1/4">
          <nav className="space-y-2">
            {tabs.map(tab => (
              <button
                key={tab.name}
                type="button"
                onClick={() => setActiveTab(tab.name)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.name
                    ? 'bg-surface-secondary text-text-primary'
                    : 'text-text-secondary hover:bg-surface-secondary hover:text-text-primary'
                }`}
              >
                <tab.icon size={20} />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </aside>
        <main className="flex-1 bg-surface-primary border border-border-color rounded-lg p-6 sm:p-8">
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                {activeTab === 'Profile' && <ProfileSettings />}
                {activeTab === 'Security' && <SecuritySettings />}
                {activeTab === 'Billing' && <BillingSettings />}
            </motion.div>
            <div className="mt-8 pt-6 border-t border-border-color flex justify-end">
                <button type="submit" className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary-gradient text-white text-sm font-semibold shadow-soft hover:brightness-110 transition-all">
                    <Save size={18} />
                    <span>Save Changes</span>
                </button>
            </div>
        </main>
      </div>
    </form>
  );
};

export default SettingsPage;
