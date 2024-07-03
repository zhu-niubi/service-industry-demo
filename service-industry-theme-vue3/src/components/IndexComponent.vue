<template>

  <!-- 视频轮播 -->
  <!-- <VideoCarousel :videos="index_info.videos" /> -->


  <!-- banner轮播 -->
  <ImgCarousel :slides="index_info.slides">
    <template #default="{ slide }">
      <div class="title-font text-primary display-22 display-sm-17 display-lg-12 text-animations"
        data-in-effect="fadeInRight"><span style="color: #fff !important;">{{ slide.title }}</span>COLOR PPF<span
          style="color: #fff;">.</span></div>
      <h1 class="text-white display-17 display-sm-12 display-md-10 display-lg-6 display-xl-3 font-weight-700">
        <div class="font-weight-600"><span style="color: #FF4713;">14mil PPF</span>. 1.84m PPF.</div>
        WINDOW FILM.
      </h1>
    </template>
  </ImgCarousel>


  <!-- 品类 -->
  <div class="categories wow fadeIn" data-wow-delay="380ms">
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

  <!-- 纳科达介绍 -->
  <div class="py-0 px-0 d2 wow fadeIn" data-wow-delay="400ms">
    <div class="row align-items-center w-100 m-p-0">

      <div class="col-lg-6 m-p-0">
        <div class="mar-left">
          <img id="logo" src="@/assets/img/logos/logo-inner.png" alt="logo" />
          <h2 class="my-1-6 mb-md-1-9 font-weight-500">超级工厂</h2>
          <p class="text-black">以TPU材料高端应用研发为核心.</p>
          <p class="text-black">以领先的生产设备和优良的制造工艺为基础.</p>
          <p class="text-black">打造漆面保护膜产业智造基地.</p>

          <p class="text-black mt-xxl-5">精准构建从功能母粒-原膜-涂布-分切-成品车衣的全产业链供应体系.</p>
          <p class="text-black">满足现代化生活和工业对弹性体材料不断升级的需求.</p>
          <div class="row mar-top">
            <div class="col-lg-6">
              <div class="media">
                <div class="media-body">
                  <div class="align-self-center">
                    <h4 class="h3">全球TOP</h4>
                    <p class="display-30 mb-0">先进TPU流延涂布生产线.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="media">
                <div class="media-body">
                  <div class="align-self-center">
                    <h4 class="h3">全产业链生态</h4>
                    <p class="display-30 mb-0">功能母粒-原膜-涂布-分切-成品.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 m-p-0">
        <img class="w-100" :src="index_info.nkd_i_info.image" alt="...">
      </div>
      <!-- <div class="col-lg-5 order-1 order-lg-2 mb-1-6 mb-lg-0">
        <video autoplay loop muted class="rounded tilt" style="width: 100%;">
          <source :src="videos[0].v" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div> -->
    </div>
    <div class="w-100" style="height: 4rem;background-color: #FF4713;"></div>
  </div>

  <!-- 技术介绍 -->
  <div class="py-0">
    <div class="container-fluid px-0">
      <div class="row g-0 wow fadeIn" data-wow-delay="380ms">
        <div class="col-xl-6 bg-img cover-background" :data-background="index_info.p_i_info.l_bg">
          <div class="py-8 w-sm-65 mx-auto h-100">

            <div class="testimonial4-carousel owl-carousel owl-theme ">

              <div class="testimonial-block">
                <div class="mb-2-6 mb-md-5 mx-auto text-center w-md-90">
                  <span class="text-primary letter-spacing-3 fw-bold text-uppercase mb-2 d-block">真漆车衣</span>
                  <h6 class="text-white">推动汽车工艺从4变3</h6>
                  <h6 class="text-white">自研增厚纳米自修复涂层</h6>
                  <h6 class="text-white">多层共挤 一体成型技术</h6>
                </div>
                <div style="height: 302px;" :data-background="index_info.p_i_info.l_image_2"
                  class="position-relative bg-img cover-background">
                </div>
              </div>
              <div class="testimonial-block">
                <div class="mb-2-6 mb-md-5 mx-auto text-center w-md-90">
                  <span class="text-primary letter-spacing-3 fw-bold text-uppercase mb-2 d-block">隐形车衣</span>
                  <h6 class="text-white">携手科思创“定义下一代车衣”</h6>
                  <h6 class="text-white">聚碳酸酯TPU全新上市</h6>
                  <h6 class="text-white">隐匿无踪 展现真我</h6>
                </div>
                <div style="height: 302px;" :data-background="index_info.p_i_info.l_image_1"
                  class="position-relative bg-img cover-background">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="row g-0 h-100">
            <div class="col-sm-6 bg-img cover-background min-height-350" :data-background="index_info.p_i_info.r_image_1"></div>
            <div class="col-sm-6">
              <div class="testimonial-side-content position-relative px-1-6 px-md-6 py-1-6 py-sm-0 h-100"
                style="background-color: #D2D2D2;">
                <div class="d-table h-100 w-100">
                  <div class="d-table-cell align-middle h-100 w-100 text-center">
                    <h3 class="h4 text-black mb-0">GIGAFACTORY.</h3>
                    <h6 class="text-black">超级工厂 超级高能</h6>
                    <div class="icon d-none d-sm-block"><img src="../assets/img/icons/icon-01.png" alt="...">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 order-2 order-sm-1">
              <div class="testimonial-side-content position-relative px-1-6 px-md-6 py-1-6 py-sm-0 h-100"
                style="background-color: #D2D2D2;">
                <div class="d-table h-100 w-100">
                  <div class="d-table-cell align-middle h-100 w-100">
                    <h3 class="h4 text-black mb-0">构建全产业链 标杆级生产线</h3>
                    <h6 class="text-black">拥有全球首屈一指的TPU流延全套设备生产线</h6>
                    <div class="icon d-none d-sm-block"><img src="../assets/img/icons/icon-02.png" alt="...">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 bg-img cover-background min-height-350 order-1 order-sm-2" :data-background="index_info.p_i_info.r_image_1"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 企业编年史 -->
  <div class="py-0 wow fadeIn" data-wow-delay="400ms">
    <img class="w-100" id="qiye" :src="index_info.q_i_info.bg" />
  </div>

  <!-- 远销全球 -->
  <div class="bg-img cover-background sale wow fadeIn" data-wow-delay="380ms" :data-background="index_info.e_a_info.bg">
    <div class="container-fluid px-0">
      <div class="border-primary border-width-4 ps-4 mb-2-5">
        <h1 class="text-white display-19 display-sm-17 display-lg-12 text-animations font-weight-more"
          data-in-effect="fadeInRight"><strong>产品远销全球</strong></h1>
        <h1
          class="text-primary display-17 display-sm-12 display-md-10 display-lg-6 display-xl-3 text-animations font-weight-more"
          data-in-effect="fadeInLeft">100+国家和地区</h1>
        <div class="col-md-6 mb-1-9 mb-md-6">
          <h6 class="text-white">经历多年海外贸易拓展</h6>
          <h6 class="text-white">产品远销东南亚、美国、欧洲等</h6>
          <h6 class="text-white">深受2,000,000+车主深度认可和信赖</h6>
          <div class="row counter mt-n1-9 z-index-9 position-relative">
            <div class="col-sm-6 col-lg-3 mt-1-9">
              <div>
                <h1 class="text-primary"><span class="countup">60</span>+</h1>
                <span class="text-white display-26 font-weight-600">纳米材料专家团队</span>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3 mt-1-9">
              <div>
                <h1 class="text-primary"><span class="countup">20</span>+</h1>
                <span class="text-white display-26 font-weight-600">纳米材料专利发明</span>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3 mt-1-9">
              <div>
                <h1 class="text-primary"><span class="countup">100</span>+</h1>
                <span class="text-white display-26 font-weight-600">TPU专用修复涂层</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>

  <!-- 生产版图 -->
  <div class="bg-img cover-background ban wow fadeIn" data-wow-delay="380ms" :data-background="index_info.sc_info.bg">
    <div class="container">
      <div class="team-carousel owl-carousel owl-theme wow fadeIn" data-wow-delay="400ms">
        <div class="team-wrapper p-w" v-for="(slide, index) in index_info.sc_info.slides" :key="index">
          <div class="card card-style5 border-0 border-radius-none">
            <div class="overflow-hidden position-relative">
              <img :src="slide.image" class="w-100" :alt="slide.title">
            </div>
            <div class="card-body text-center bg-secondary p-4">
              <h3 class="h5 lh-1">
                <a href="team-detail.html" class="text-primary">{{ slide.title }}</a>
              </h3>
              <span class="display-29 text-white">{{ slide.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 其他领域 -->
  <div class="bg-img cover-background qt wow fadeIn" data-wow-delay="380ms" :data-background="index_info.o_info.bg">

  </div>

  <!-- 价值观 -->

  <div class="bg-img cover-background jia wow fadeIn" data-wow-delay="400ms" :data-background="index_info.j_info.bg">

  </div>

  <!-- 活动版块 -->
  <div class="bg-very-light-gray py-16">
    <div class="container">
      <div class="section-heading wow fadeInDown" data-wow-delay="100ms">
        <h1 class="text-primary font-weight-more">{{ index_info.ac_info.title }}</h1>
        <span >{{ index_info.ac_info.desc }}</span>
        
      </div>
    </div>
    <div class="portfolio3-carousel owl-carousel owl-theme py-px-10 wow fadeIn" data-wow-delay="380ms">
      <div 
        class="card card-style21" 
        v-for="(item, index) in index_info.ac_info.slides" 
        :key="index">

        <img class="card-img-top border-radius-none" :src="item.image" alt="Project image">
      </div>
    </div>
    <div class="w-100" style="height: 4rem;background-color: #FF4713;"></div>
  </div>

</template>
<script>
import { ref } from 'vue';

// import VideoCarousel from './banner/VideoCarousel.vue';
import ImgCarousel from './banner/ImgCarousel.vue';


export default {
  name: 'IndexComponent',
  components: {
    // VideoCarousel,
    ImgCarousel
  },
  setup() {

    const index_info = ref({

      // 首页顶部banner
      slides: [
        { image: require('@/assets/img/banner/1-banner.png'), title: 'TPU PPF.' },
        // { image: require('@/assets/img/banner/slide-02.jpg'), title: 'PET PPF.' }
      ],
      videos:[
        {
          v: require('@/assets/video/working-in-office.mp4'),
          t: "Providing A Professional & Reliable Service"
        },
        {
          v: require('@/assets/video/working-in-office.mp4'),
          t: "Providing B Professional & Reliable Service"
        }
      ],
      // 纳科达介绍板块
      nkd_i_info: {
        image: require('@/assets/img/banner/nakedainfo.jpg')
      },
      // 产品技术介绍板块
      p_i_info: {
        l_bg: require('@/assets/img/bg/bg-01.jpg'),
        l_image_2: require('@/assets/img/producttype/zhenqi.png'),
        l_image_1: require('@/assets/img/producttype/xiayidai.png'),
        r_image_2: require('@/assets/img/bg/content-01.png'),
        r_image_1: require('@/assets/img/bg/content-02.png'),
      },
      // 企业编年史板块
      q_i_info: {
        bg: require('@/assets/img/bg/biannianshi.png'),
        title: '企业编年史'
      },

      // 远销全球板块

      e_a_info: {
        bg: require('@/assets/img/bg/yuanxiaoquanqiu.png'),
        title: '远销全球'
      },

      // 生产板块7012

      sc_info: {
        bg: require('@/assets/img/bg/shengchanbantu.png'),
        slides: [
          { image: require('@/assets/img/banner/team-01.png'), title: '南通中试', name: '产业基地' },
          { image: require('@/assets/img/banner/team-02.png'), title: '上海松江', name: '研发基地' },
          { image: require('@/assets/img/banner/team-03.png'), title: '张家港', name: '产业基地' },
        ]
      },
      // 其他领域

      o_info: {
        bg: require('@/assets/img/bg/qt.png'),
        title: '其他领域'
      },

      // 价值观

      j_info: {
        bg: require('@/assets/img/bg/jiazhi.png'),
        title: '价值观'
      },

      // 活动版块

      ac_info: {
        slides: [
        { image: require('@/assets/img/act/h-1.png') },
        { image: require('@/assets/img/act/h-2.png') },
        { image: require('@/assets/img/act/h-3.png') },
        { image: require('@/assets/img/act/h-4.png') },
        { image: require('@/assets/img/act/h-5.png') },
        { image: require('@/assets/img/act/h-6.png') },
        { image: require('@/assets/img/act/h-7.png') },
        { image: require('@/assets/img/act/h-8.png') },
        { image: require('@/assets/img/act/h-9.png') },
        { image: require('@/assets/img/act/h-10.png') },
        { image: require('@/assets/img/act/h-11.png') },

        ],
        title: '不断进化 筑梦未来',
        desc: 'EVOLVING TO BUILD THE FUTURE',
      }


    });



    // 产品品类版块
    const activeIndex = ref(null);
    const categories = ref([
      { index: '01', title: '漆面保护膜', image: require('@/assets/img/producttype/qimianbaohu.png'), default_color: '#000000' },
      { index: '02', title: 'TPU改色膜', image: require('@/assets/img/producttype/TPUzhenqigaise.png'), default_color: '#cccccc' },
      { index: '03', title: '1.84超宽幅', image: require('@/assets/img/producttype/1.84chaokuan.png'), default_color: '#999999' },
      { index: '04', title: '14mil超厚', image: require('@/assets/img/producttype/14MILchaohou.png'), default_color: '#666666' },
    ]);

    return {
      index_info,
      activeIndex,
      categories,
    };
  }
};
</script>
<style src="../assets/css/index_c.css" />
