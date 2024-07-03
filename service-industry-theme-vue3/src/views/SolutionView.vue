<template>
    <div id="preloader"></div>
    <div class="main-wrapper">
        <HeaderComponent />
        <SolutionComponent />
        <FooterComponent />
    </div>
    <a href="#!" class="scroll-to-top">
        <i class="fas fa-angle-up" aria-hidden="true"></i>
    </a>
</template>

<script>
import SolutionComponent from "@/components/SolutionComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
    name: "HomeView",
    components: {
        SolutionComponent,
        HeaderComponent,
        FooterComponent,
    },
    setup() {
        return {};
    },
};
</script>

<style scoped>
/* 添加必要的样式 */
</style>