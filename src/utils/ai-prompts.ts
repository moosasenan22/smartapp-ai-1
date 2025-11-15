export const AI_PROMPTS = {
  system: `أنت مساعد ذكي متخصص في تطوير تطبيقات React. 
قدم إجابات دقيقة ومفيدة مع أمثلة عملية.
استخدم اللغة العربية في الردود.`,

  codeGeneration: {
    reactComponent: `أنشئ مكون React مع:
- TypeScript
- Tailwind CSS
- أفضل الممارسات
- تعليقات توضيحية`,

    styling: `قدم حلول تصميم باستخدام Tailwind CSS مع:
- تصميم متجاوب
- ألوان متناسقة
- تأثيرات جميلة`,

    hook: `أنشئ React hook مخصص مع:
- TypeScript types
- معالجة الأخطاء
- أمثلة استخدام`
  },

  templates: {
    loginForm: `أنشئ نموذج تسجيل دخول مع:
- حقول البريد وكلمة المرور
- التحقق من الصحة
- تصميم جميل
- تجربة مستخدم سلسة`,

    dashboard: `صمم لوحة تحكم مع:
- إحصائيات
- مخططات
- قوائم
- تنقل سلس`,

    cardComponent: `أنشئ بطاقة مع:
- صورة
- عنوان
- وصف
- أزرار إجراء`
  }
};

export const getPrompt = (type: keyof typeof AI_PROMPTS.codeGeneration, details?: string) => {
  const basePrompt = AI_PROMPTS.codeGeneration[type];
  return details ? `${basePrompt}\n\nالتفاصيل: ${details}` : basePrompt;
};
