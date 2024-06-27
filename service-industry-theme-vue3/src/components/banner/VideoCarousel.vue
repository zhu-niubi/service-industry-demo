<template>
    <div class="top-position1 z-index-1">
        <div class="common-banner">
            <div class="owl-carousel owl-theme w-100 ">
                <div v-for="(video, index) in videos" :key="index"
                    class="jarallax overlay overlay-black overlay-20 py-6 py-md-16 py-lg-20 py-xxl-24 banner3 min-vh-100">
                    <video autoplay muted loop :src="video.v" class="v min-vh-100">
                    </video>
                    <div class="container pt-5 pb-14" style="position: relative; z-index: 2; margin-top: 20vh;" >
                        <div class="row position-relative justify-content-center">
                            <div class="col-lg-9 text-center">
                                <span
                                    class="alt-font text-primary display-26 display-md-22 text-animations font-weight-600 mb-2 d-block text-shadow"
                                    data-in-effect="rotateIn">Best service ever</span>
                                <h1 class="text-white text-shadow">{{ video.t }}</h1>
                                <!-- <a href="contactus.html" class="butn mb-2 mb-sm-0">Contact us</a>
                                <a href="aboutus.html" class="butn white secondary-hover ms-1 ms-sm-3">Learn more</a> -->
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
        videos: {
            type: Array,
            required: true
        }
    }
};
</script>

<style>
.v {
    position: absolute; top: 0; left: 0; width: 100%; object-fit: cover; z-index: 1;
} 
</style>