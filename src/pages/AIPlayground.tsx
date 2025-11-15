import React, { useState } from 'react';
import LoadingSpinner from '../components/common/LoadingSpinner';

export const AIPlayground: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    
    // محاكاة استجابة الذكاء الاصطناعي
    setTimeout(() => {
      setResponse(`هذا رد محاكاة للذكاء الاصطناعي على: "${prompt}"
      
يمكنك هنا تجربة مختلف أوامر الذكاء الاصطناعي وتوليد الكود البرمجي.

الميزات المتاحة:
• توليد كود React
• تصميم واجهات المستخدم
• كتابة التوثيق
• حل مشاكل برمجية`);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 rtl">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">🧠 ملعب الذكاء الاصطناعي</h1>
          <p className="text-gray-600 mt-2">جرب مختلف إمكانيات الذكاء الاصطناعي في مكان واحد</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* منطقة الإدخال */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">💬 محادثة مع الذكاء الاصطناعي</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    اكتب طلبك أو سؤالك
                  </label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    rows={6}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="مثال: اكتب لي كود زر في React مع تصميم جميل..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isLoading ? 'جاري المعالجة...' : '🚀 إرسال'}
                </button>
              </form>
            </div>

            {/* أمثلة سريعة */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">⚡ أمثلة سريعة</h3>
              <div className="grid grid-cols-1 gap-2">
                {[
                  'أنشئ لي نموذج تسجيل دخول',
                  'اكتب كود لزر animated',
                  'صمم بطاقة منتج',
                  'أنشئ hook لإدارة الحالة'
                ].map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setPrompt(example)}
                    className="text-right p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* منطقة الإخراج */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">📝 النتيجة</h3>
            
            {isLoading ? (
              <LoadingSpinner text="جاري توليد الرد..." />
            ) : response ? (
              <div className="bg-gray-50 rounded-lg p-4 whitespace-pre-wrap">
                {response}
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                <p>ستظهر النتائج هنا بعد إرسال الطلب</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPlayground;
