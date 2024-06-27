<template>
    <div id="preloader"></div>
    <div class="main-wrapper">
        <HeaderComponent />
        <router-view></router-view>
        <FooterComponent />
    </div>
    <a href="#!" class="scroll-to-top"><i class="fas fa-angle-up" aria-hidden="true"></i></a>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
    name: "HomeView",
    components: {
        HeaderComponent,
        FooterComponent,
    },
    setup() {
        return {};
    },
};
</script>
