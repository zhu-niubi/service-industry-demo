<template>
    <div id="preloader"></div>
    <div class="main-wrapper">
        <HeaderComponent />
        <TestComponent />
        <FooterComponent />
    </div>
    <a href="#!" class="scroll-to-top"><i class="fas fa-angle-up" aria-hidden="true"></i></a>
</template>

<script>
import TestComponent from "@/components/TestComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
    name: "HomeView",
    components: {
        TestComponent,
        HeaderComponent,
        FooterComponent,
    },
    setup() {
        return {};
    },
};
</script>