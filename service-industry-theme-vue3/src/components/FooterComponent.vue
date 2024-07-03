<template>
  <footer>
    <div class="container">
      <div class="row mt-n2-6">
        <div class="col-sm-6 col-lg-3 mt-2-6 wow fadeIn" data-wow-delay="200ms">
          <div class="mb-1-6 mb-lg-1-9">
            <img src="@/assets/img/logos/footer-light-logo.png" alt="..." />
          </div>
          <ul class="contact-list">
            <li>
              <span class="fa fa-home pe-3 text-white"></span>
              <a href="#!">{{contact_info.address}}</a>
            </li>
            <li>
              <span class="fa fa-phone pe-3 text-white"></span>
              <a href="#!">{{contact_info.phone}}</a>
            </li>
            <li>
              <span class="fa fa-envelope pe-3 text-white"></span>
              <a >{{contact_info.email}}</a>
            </li>
          </ul>
        </div>
        <FooterMenu v-for="(menu, index) in footerMenus" :key="index" :menu="menu"
          :data-wow-delay="200 + (index + 1) * 200 + 'ms'" />
      </div>
    </div>
    <div class="footer-bar borders-top border-color-light-white wow fadeIn" data-wow-delay="1200ms">
      <div class="container">
        <div class="row">
          <div class="col-md-6 text-center text-md-start mt-3 mt-md-0 order-2 order-md-1">
            <p class="d-inline-block text-white mb-0">
              &copy; <span class="current-year"></span> Services is Powered by
              <a href="#!" class="text-primary white-hover">NKODA</a>
            </p>
          </div>
          <div class="col-md-6 text-center text-md-end order-1 order-md-2">
            <p class="text-white d-inline-block mb-0 align-middle">
              {{contact_info.follow}}:
            </p>
            <ul class="footer-social-style1">
              <li>
                <a href="#!"><i class="fab fa-facebook-f"></i></a>
              </li>
              <li>
                <a href="#!"><i class="fab fa-twitter"></i></a>
              </li>
              <li>
                <a href="#!"><i class="fab fa-youtube"></i></a>
              </li>
              <li>
                <a href="#!"><i class="fab fa-linkedin-in"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { footer_menus as originalMenuItems } from "@/router/footerConfig.js";
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import FooterMenu from './menus/FooterMenu.vue';

export default {
  name: 'FooterComponent',
  components: {
    FooterMenu,
  },
  setup() {
    const { locale, t } = useI18n();

    const footerMenus = ref([]);
    const contact_info = ref({
      address: t("footer_menu.contact_info.address"),
      phone: t("footer_menu.contact_info.phone"),
      email: t("footer_menu.contact_info.email"),
      follow: t("footer_menu.follow")
    });
    const translateMenuItems = (items) => {
      // console.log(items);
      return items.map(item => ({
        ...item,
        title: t(item.title),
        sub_footer_menu: item.sub_footer_menu ? translateMenuItems(item.sub_footer_menu) : undefined,
      }));
    };

    const updateMenuItems = () => {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage) {
        locale.value = savedLanguage;
      }
      footerMenus.value = translateMenuItems(originalMenuItems);
    };
    onMounted(() => {
      // 获取最新语言给菜单翻译
      updateMenuItems();
    });

    return {
      footerMenus,
      contact_info
    };
  },
};
</script>

<style scoped>
/* 添加您的样式 */
</style>
