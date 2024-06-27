<template>
  <header class="header-style1 menu_area-light">
    <div class="navbar-default border-color-light-white">
      <div class="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
        <div class="row align-items-center">
          <div class="col-12">
            <div class="menu_area alt-font">
              <nav class="navbar navbar-expand-lg navbar-light p-0">
                <div class="navbar-header navbar-header-custom">
                  <a href="/" class="navbar-brand h-default">
                    <img id="logo" src="@/assets/img/logos/logo-inner.png" alt="logo" />
                  </a>
                </div>

                <div class="navbar-toggler" style="background-color: #000 !important;"></div>

                <ul class="navbar-nav ms-auto" id="nav" style="display: none">
                  <menu-item v-for="(item, index) in menuItems" :key="index" :item="item" />
                  <li>
                    <a href="#!">{{ $t('language') }}</a>
                    <ul>
                      <li class="country-flex"><a href="#" @click="changeLanguage('en')">English</a><img src="../assets/img/country/eg.svg" alt="Icon" width="20"></li>
                      <li class="country-flex"><a href="#" @click="changeLanguage('zh')">中文</a><img src="../assets/img/country/cn.svg" alt="Icon" width="20"></li>
                    </ul>
                  </li>
                </ul>

                <div class="attr-nav align-items-lg-center ms-lg-auto main-font">
                  <ul>
                    <li class="d-none d-xl-inline-block">
                      <a href="contactus.html" class="butn medium">
                        <span>{{ $t('menu.contact') }}</span>
                      </a>
                    </li>
                  </ul>
                </div>

              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { menuItems as originalMenuItems } from "@/router/menuConfig.js";

import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import MenuItem from './menus/MenuItem.vue';

export default {
  name: 'HeaderComponent',
  components: {
    MenuItem,
  },
  setup() {
    const { locale, t } = useI18n();
    
    const menuItems = ref([]);

    const translateMenuItems = (items) => {
      return items.map(item => ({
        ...item,
        title: t(item.title),
        submenu: item.submenu ? translateMenuItems(item.submenu) : undefined,
      }));
    };

    const updateMenuItems = () => {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage) {
        locale.value = savedLanguage;
      }
      menuItems.value = translateMenuItems(originalMenuItems);
    };


    const changeLanguage = (lang) => {
      locale.value = lang;
      localStorage.setItem('language', lang);
      updateMenuItems();
      window.location.reload();
    };


    onMounted(() => {
      // 获取最新语言给菜单翻译
      updateMenuItems();
    });

    return {
      changeLanguage,
      menuItems,
    };
  },
};
</script>

<style>
/* 样式部分 */
.country-flex {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
}
</style>
