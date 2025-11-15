import React from 'react';
import { useBuilderActions } from '../../hooks/useBuilder';

export const Canvas: React.FC = () => {
  const { components, selectedComponent, selectComponent } = useBuilderActions();

  const handleComponentClick = (component: any) => {
    selectComponent(component);
  };

  const renderComponent = (component: any) => {
    switch (component.type) {
      case 'button':
        return (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            onClick={() => handleComponentClick(component)}
          >
            زر
          </button>
        );
      case 'input':
        return (
          <input
            type="text"
            placeholder="اكتب هنا..."
            className="border border-gray-300 rounded px-3 py-2 w-full"
            onClick={() => handleComponentClick(component)}
          />
        );
      case 'card':
        return (
          <div
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
            onClick={() => handleComponentClick(component)}
          >
            <h3 className="font-semibold mb-2">عنوان البطاقة</h3>
            <p className="text-gray-600">محتوى البطاقة يظهر هنا</p>
          </div>
        );
      case 'text':
        return (
          <p
            className="text-gray-800"
            onClick={() => handleComponentClick(component)}
          >
            هذا نص يمكن تعديله
          </p>
        );
      default:
        return (
          <div
            className="border-2 border-dashed border-gray-300 p-4 rounded text-center text-gray-500"
            onClick={() => handleComponentClick(component)}
          >
            {component.name}
          </div>
        );
    }
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6 min-h-[500px] rtl">
      <h3 className="text-lg font-semibold mb-4">🎨 منطقة التصميم</h3>
      
      {components.length === 0 ? (
        <div className="flex items-center justify-center h-64 border-2 border-dashed border-gray-300 rounded-lg">
          <p className="text-gray-500">اسحب المكونات هنا لبدء التصميم</p>
        </div>
      ) : (
        <div className="space-y-4">
          {components.map((component) => (
            <div
              key={component.id}
              className={`p-2 rounded ${
                selectedComponent?.id === component.id
                  ? 'ring-2 ring-blue-500 bg-blue-50'
                  : 'hover:bg-gray-100'
              }`}
            >
              {renderComponent(component)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Canvas;
