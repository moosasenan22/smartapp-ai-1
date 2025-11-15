import React from 'react';
import { BuilderProvider } from '../contexts/BuilderContext';
import ComponentPalette from '../components/builder/ComponentPalette';
import Canvas from '../components/builder/Canvas';
import PropertiesPanel from '../components/builder/PropertiesPanel';
import { useBuilderActions } from '../hooks/useBuilder';

const BuilderContent: React.FC = () => {
  const { addComponent } = useBuilderActions();

  const handleComponentSelect = (component: any) => {
    addComponent(component);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 rtl">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">🏗️ منشئ التطبيقات</h1>
          <p className="text-gray-600 mt-2">صمم تطبيقك بسحب وإفلات المكونات</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* لوحة المكونات */}
          <div className="lg:col-span-3">
            <ComponentPalette onComponentSelect={handleComponentSelect} />
          </div>

          {/* منطقة التصميم */}
          <div className="lg:col-span-6">
            <Canvas />
          </div>

          {/* لوحة الخصائص */}
          <div className="lg:col-span-3">
            <PropertiesPanel />
          </div>
        </div>

        {/* شريط الأدوات */}
        <div className="mt-6 bg-white rounded-lg shadow-sm p-4">
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              💾 حفظ التصميم
            </button>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
              👁️ معاينة
            </button>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              ⬇️ تصدير الكود
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const BuilderPage: React.FC = () => {
  return (
    <BuilderProvider>
      <BuilderContent />
    </BuilderProvider>
  );
};

export default BuilderPage;
