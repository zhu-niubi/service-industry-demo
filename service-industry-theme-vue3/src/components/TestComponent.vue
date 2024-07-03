<template>
    <section class="top-position1 pt-0">
        <div class="page-title-section bg-img cover-background theme-overlay-blue-dark" data-overlay-dark="75"
            :data-background="slides[3].image">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h1>Test</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb">
                        <ul>
                            <li><a href="/">HOME</a></li>
                            <li><a href="/test">TEST</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-0">
        <div class="container-fluid px-0">
            <div class="row g-0">
                <div class="col-xl-6 bg-img cover-background" :data-background="slides[0].image">
                    <div class="py-8 w-sm-65 mx-auto h-100">
                        <div class="mb-2-6 mb-md-5 mx-auto text-center w-md-90">
                            <span class="text-primary letter-spacing-3 fw-bold text-uppercase mb-2 d-block">Our
                                Testimonial</span>
                            <h2 class="text-white">Our Loving Customers</h2>
                        </div>
                        <div class="testimonial4-carousel owl-carousel owl-theme">
                            <div class="testimonial-block">
                                <div style="border: solid;height: 302px;" :data-background="slides[0].image"
                                    class="position-relative bg-img cover-background">
                                </div>
                            </div>
                            <div class="testimonial-block">
                                <div style="border: solid;height: 302px;" :data-background="slides[0].image"
                                    class="position-relative bg-img cover-background">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="row g-0 h-100">
                        <div class="col-sm-6 bg-img cover-background min-height-350" :data-background="slides[1].image">
                        </div>
                        <div class="col-sm-6">
                            <div
                                class="testimonial-side-content position-relative px-1-6 px-md-6 py-1-6 py-sm-0 bg-primary h-100">
                                <div class="d-table h-100 w-100">
                                    <div class="d-table-cell align-middle h-100 w-100">
                                        <h3 class="h4 text-white mb-0">We handle every project with care.</h3>
                                        <div class="icon d-none d-sm-block"><img
                                                src="../assets/img/icons/icon-01.png" alt="..."></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 order-2 order-sm-1">
                            <div
                                class="testimonial-side-content position-relative px-1-6 px-md-6 py-1-6 py-sm-0 bg-primary h-100">
                                <div class="d-table h-100 w-100">
                                    <div class="d-table-cell align-middle h-100 w-100">
                                        <h3 class="h4 text-white mb-0">Best choice for roofing projects.</h3>
                                        <div class="icon d-none d-sm-block"><img
                                                src="../assets/img/icons/icon-02.png" alt="..."></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 bg-img cover-background min-height-350 order-1 order-sm-2"
                            :data-background="slides[2].image"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';


export default {
    name: 'TestComponent',
    
    setup() {

        const store = useStore();
        const fromRoute = computed(() => store.state.fromRoute);
        const toRoute = computed(() => store.state.toRoute);
        const slides = ref([
            { image: require('@/assets/img/bg/bg-01.jpg') },
            { image: require('@/assets/img/bg/content-01.jpg') },
            { image: require('@/assets/img/bg/content-02.jpg') },
            { image: require('@/assets/img/bg/bg-05.jpg') }
        ]);
        onMounted(() => {
            // console.log('路由从：', fromRoute.value,'到：',toRoute.value);
        });

        return {
            slides,
            fromRoute,
            toRoute
        };
    }
};
</script>