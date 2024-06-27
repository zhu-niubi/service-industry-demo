import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import zh from './locales/zh.json';

const messages = {
  en,
  zh
};

const i18n = createI18n({
  // legacy: false：启用Vue 3的组合式API（推荐使用）。
  // locale: 'zh'：默认语言设置为中文（简体）。
  // fallbackLocale: 'zh'：当默认语言中的某些翻译缺失时，回退到中文（简体）。
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'zh',
  messages,
});

export default i18n;
