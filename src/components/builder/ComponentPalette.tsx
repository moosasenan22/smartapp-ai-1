import React from 'react';

const componentsList = [
  { type: 'button', name: 'زر', icon: '🔘' },
  { type: 'input', name: 'حقل إدخال', icon: '📝' },
  { type: 'card', name: 'بطاقة', icon: '🎴' },
  { type: 'text', name: 'نص', icon: '📄' },
  { type: 'image', name: 'صورة', icon: '🖼️' },
  { type: 'container', name: 'حاوية', icon: '📦' },
];

interface ComponentPaletteProps {
  onComponentSelect: (component: any) => void;
}

export const ComponentPalette: React.FC<ComponentPaletteProps> = ({ onComponentSelect }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 rtl">
      <h3 className="text-lg font-semibold mb-4">📦 مكتبة المكونات</h3>
      <div className="grid grid-cols-2 gap-3">
        {componentsList.map((component) => (
          <div
            key={component.type}
            className="border border-gray-200 rounded-lg p-3 text-center cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-colors"
            onClick={() => onComponentSelect(component)}
          >
            <div className="text-2xl mb-1">{component.icon}</div>
            <div className="text-sm font-medium text-gray-700">{component.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentPalette;
