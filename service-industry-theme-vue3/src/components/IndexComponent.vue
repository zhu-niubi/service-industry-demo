<template>

  <!-- 视频轮播 -->
  <VideoCarousel :videos="videos" />


  <!-- banner轮播 -->
  <!-- <ImgCarousel :slides="slides">
    <template #default="{ slide }">
      <div class="title-font text-primary display-22 display-sm-17 display-lg-12 text-animations"
        data-in-effect="fadeInRight"><span style="color: #fff !important;">{{ slide.title }}</span>COLOR PPF<span style="color: #fff;">.</span></div>
      <h1 class="text-white display-17 display-sm-12 display-md-10 display-lg-6 display-xl-3 font-weight-700">
        <div class="font-weight-600"><span style="color: #FF4713;">14mil PPF</span>. 1.84m PPF.</div>
        WINDOW FILM.
      </h1>
    </template>
  </ImgCarousel> -->


  <!-- 品类 -->
  <div class="categories">
    <div v-for="(category, index) in categories" :key="index"
      :class="['category-item', { active: activeIndex === index }]" @mouseover="activeIndex = index"
      @mouseleave="activeIndex = null" :style="{ '--default-color': category.default_color }">
      <div class="category-background"></div>
      <div class="category-title">
        <span class="category-index">{{ category.index }}</span>
        <span class="category-text">{{ category.title }}</span>
      </div>
      <a href="/" class=" mb-2 mb-sm-0 category-button">LEARN MORE</a>
      <div class="category-image" :style="{ backgroundImage: `url(${category.image})` }"></div>
    </div>
  </div>

  <!-- 超级工厂介绍 -->
  <section class="about-style-01">
    <div class="container">
      <div class="row align-items-center">

        <div class="col-lg-6 wow fadeIn" data-wow-delay="400ms" >
          <div class="ps-lg-2-5 px-xl-8 ">
            <h2 class="mb-1-6 mb-md-1-9 font-weight-500">Safe, reliable & express <strong>moving solutions.</strong>
            </h2>
            <p class="mb-1-9 mb-md-2-2 lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry’s standard.</p>
            <div class="row align-items-center">
              <div
                class="col-lg-6 borders-bottom border-lg-0 border-color-extra-light-gray mb-1-6 mb-md-1-9 mb-lg-0 pb-4 pb-lg-0">
                <div class="media">
                  <div class="media-body">
                    <div class="align-self-center">
                      <h4 class="h6">Time bound deliveries</h4>
                      <p class="display-30 mb-0">Versatile, broad system that reliably conveys outstanding.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="media">
                  <div class="media-body">
                    <div class="align-self-center">
                      <h4 class="h6">Multi-modal transport</h4>
                      <p class="display-30 mb-0">Versatile, broad system that reliably conveys outstanding.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 order-1 order-lg-2 mb-1-6 mb-lg-0">
          <video autoplay loop muted class="rounded tilt" style="width: 100%;">
            <source :src="videos[0].v" type="video/mp4">
            Your browser does not support the video tag.
          </video>

        </div>
      </div>
    </div>
  </section>


</template>
<script>
import { ref, computed } from 'vue';

import VideoCarousel from './banner/VideoCarousel.vue';
// import ImgCarousel from './banner/ImgCarousel.vue';


export default {
  name: 'IndexComponent',
  components: {
    VideoCarousel,
    // ImgCarousel
  },
  setup() {
    const backgroundImageStyle = computed(() => ({
      backgroundImage: `url(${slides.value[0].image})`
    }));
    const activeIndex = ref(null);
    const categories = ref([
      { index: '01', title: '漆面保护膜', image: require('@/assets/img/portfolio/portfolio-01.jpg'), default_color: '#000000' },
      { index: '02', title: 'TPU改色膜', image: require('@/assets/img/portfolio/portfolio-01.jpg'), default_color: '#cccccc' },
      { index: '03', title: '1.84超宽幅', image: require('@/assets/img/portfolio/portfolio-01.jpg'), default_color: '#999999' },
      { index: '04', title: '14mil超厚', image: require('@/assets/img/portfolio/portfolio-01.jpg'), default_color: '#666666' },
      { index: '05', title: '汽车窗膜', image: require('@/assets/img/portfolio/portfolio-01.jpg'), default_color: '#333333' },
    ]);
    const slides = ref([
      { image: require('@/assets/img/banner/slide-01.jpg'), title: 'TPU PPF.' },
      { image: require('@/assets/img/banner/slide-02.jpg'), title: 'PET PPF.' }
    ]);
    const videos = ref([
      {
        v: require('@/assets/video/working-in-office.mp4'),
        t: "Providing A Professional & Reliable Service"
      },
      {
        v: require('@/assets/video/working-in-office.mp4'),
        t: "Providing B Professional & Reliable Service"
      }
    ]);
    return {
      videos,
      activeIndex,
      categories,
      slides,
      backgroundImageStyle
    };
  }
};
</script>
<style type="text/css">
.categories {
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */

  align-items: center;
}

.category-item {

  position: relative;
  transition: all 0.8s ease;
  overflow: hidden;
  cursor: pointer;
  width: 80%;
  position: relative;
}

.category-title {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translate(0, -50%);
  font-size: 24px;
  color: white;
  z-index: 2;
  transition: all 0.8s ease;
}

.category-index {
  font-size: 50px;
  font-weight: bolder;
  margin-right: 20px;
}

.category-text {
  font-size: 24px;
  font-weight: bold;
}



.category-button {
  position: absolute;
  top: 84%;
  right: 0;
  transform: translate(0, -50%);
  padding: 8px 16px;
  background-color: #FF4713;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;
}

.category-button:hover {
  background-color: #e67c5e;
}

.category-image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  transition: opacity 0.8s ease;
  opacity: 0;
}

.category-item.active .category-image {
  opacity: 1;
}

.category-item .category-background {
  width: 100%;
  height: 100px;
  /* 默认高度 */
  background-color: var(--default-color);
  transition: height 0.8s ease;
}

.category-item.active .category-background {
  height: 400px;
}
</style>
