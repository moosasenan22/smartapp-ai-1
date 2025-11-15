import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { BuilderProvider } from './contexts/BuilderContext';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import AIAssistantPage from './pages/AIAssistantPage';
import BuilderPage from './pages/BuilderPage';
import AIPlayground from './pages/AIPlayground';
import AnalyticsPage from './pages/AnalyticsPage';
import IntegrationsPage from './pages/IntegrationsPage';
import MyProjectsPage from './pages/MyProjectsPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <BuilderProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/ai-assistant" element={<AIAssistantPage />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/integrations" element={<IntegrationsPage />} />
              <Route path="/my-projects" element={<MyProjectsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/builder" element={<BuilderPage />} />
              <Route path="/ai-playground" element={<AIPlayground />} />
            </Routes>
          </Layout>
        </BuilderProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
