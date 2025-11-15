import React from 'react';

const AnalyticsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 rtl">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">📈 التحليلات</h1>
          <p className="text-gray-600 mt-2">إحصائيات وأداء منصتك</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">📊 أداء الذكاء الاصطناعي</h3>
            <div className="text-center py-8">
              <p className="text-gray-500">الرسوم البيانية ستظهر هنا قريباً</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">👥 نشاط المستخدمين</h3>
            <div className="text-center py-8">
              <p className="text-gray-500">إحصائيات المستخدمين ستظهر هنا قريباً</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
