<template>
  <div id="preloader"></div>
  <div class="main-wrapper">
    <HeaderComponent />
    <IndexComponent />
    <FooterComponent />
  </div>
  <a href="#!" class="scroll-to-top"
    ><i class="fas fa-angle-up" aria-hidden="true"></i
  ></a>
</template>

<script>
import IndexComponent from "@/components/IndexComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

import { loadAllScripts } from "../utils/loadAllScript";

export default {
  name: "HomeView",
  components: {
    IndexComponent,
    HeaderComponent,
    FooterComponent,
  },
  mounted() {
    loadAllScripts();
  },
};
</script>
