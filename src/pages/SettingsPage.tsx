import React, { useState } from 'react';

interface Settings {
  language: string;
  theme: string;
  notifications: boolean;
  autoSave: boolean;
}

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState<Settings>({
    language: 'ar',
    theme: 'light',
    notifications: true,
    autoSave: true
  });

  const handleSettingChange = (key: keyof Settings, value: string | boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    // هنا سيتم حفظ الإعدادات في قاعدة البيانات
    console.log('تم حفظ الإعدادات:', settings);
    alert('تم حفظ الإعدادات بنجاح!');
  };

  // مكون Toggle مخصص لـ RTL
  const ToggleSwitch: React.FC<{ 
    checked: boolean; 
    onChange: (checked: boolean) => void;
    label: string;
    description: string;
  }> = ({ checked, onChange, label, description }) => (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-semibold text-gray-900">{label}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      <button
        type="button"
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          checked ? 'bg-blue-600' : 'bg-gray-200'
        }`}
        onClick={() => onChange(!checked)}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            checked ? 'translate-x-[-1.25rem]' : 'translate-x-[-0.25rem]'
          }`}
        />
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 rtl">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">⚙️ الإعدادات</h1>
          <p className="text-gray-600 mt-2">خصص تجربتك في المنصة</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-6">
            {/* اللغة */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">اللغة</h3>
                <p className="text-gray-600 text-sm">اختر لغة الواجهة</p>
              </div>
              <select 
                value={settings.language}
                onChange={(e) => handleSettingChange('language', e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="ar">العربية</option>
                <option value="en">English</option>
              </select>
            </div>

            {/* السمة */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">السمة</h3>
                <p className="text-gray-600 text-sm">اختر مظهر المنصة</p>
              </div>
              <select 
                value={settings.theme}
                onChange={(e) => handleSettingChange('theme', e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="light">فاتح</option>
                <option value="dark">غامق</option>
                <option value="auto">تلقائي</option>
              </select>
            </div>

            {/* Toggle Switches المصححة */}
            <ToggleSwitch
              checked={settings.notifications}
              onChange={(checked) => handleSettingChange('notifications', checked)}
              label="الإشعارات"
              description="استقبل إشعارات حول مشاريعك"
            />

            <ToggleSwitch
              checked={settings.autoSave}
              onChange={(checked) => handleSettingChange('autoSave', checked)}
              label="الحفظ التلقائي"
              description="احفظ التغييرات تلقائياً"
            />

            <div className="pt-6 border-t border-gray-200">
              <button 
                onClick={handleSave}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                حفظ الإعدادات
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
