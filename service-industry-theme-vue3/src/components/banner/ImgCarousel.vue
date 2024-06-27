<template>
    <div class="top-position1 z-index-1">
        <div class="common-banner">
            <div class="owl-carousel owl-theme w-100">
                <div v-for="(slide, index) in slides" :key="index"
                    class="text-start item bg-img cover-background theme-overlay-blue-dark"
                    :data-background="slide.image">
                    <div class="container h-100">
                        <div class="d-table h-100 w-100">
                            <div class="d-table-cell align-middle">
                                <div class="w-95 w-md-85 w-lg-70 w-xxl-65 mt-5 mt-sm-0">
                                    <div class="border-primary border-width-4 ps-4 mb-2-5">
                                        <slot :slide="slide"></slot>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        slides: {
            type: Array,
            required: true
        }
    }
};
</script>

<style scoped>
/* 添加样式根据需要 */
</style>