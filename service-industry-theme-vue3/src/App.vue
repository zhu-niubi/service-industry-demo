<template>
  <router-view />
</template>

<script>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
  name: 'App',
  setup() {
    const { locale } = useI18n();

    onMounted(() => {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage) {
        locale.value = savedLanguage;
      } else {
        const defaultLanguage = 'zh';
        locale.value = defaultLanguage;
        localStorage.setItem('language', defaultLanguage);
      }
    });

    return {};
  }
};
</script>

<style>
/* 全局样式 */
</style>
