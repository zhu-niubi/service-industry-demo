<template>
  <section class="pt-0">
    <div
      class="bg-img cover-background theme-overlay-blue-dark h-pc"
      data-overlay-dark="75"
      :data-background="solution_info.slide.image"
    ></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb">
            <ul>
              <li><a href="index-movers.html">Home</a></li>
              <li><a href="#!">Solution</a></li>
              <li><a href="#!">Project Details</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="pt-0">
    <div class="section-heading4 wow fadeIn" data-wow-delay="300ms">
      <h1>
        <strong>{{ solution_info.title }}</strong>
      </h1>
    </div>
    <div class="container">
      <!-- 短幅 -->
      <div class="row wow fadeIn" data-wow-delay="400ms">
        <div class="col-md-4 mt-1-9">
          <div class="row">
            <div class="col-md-5 flex flex-column col-sm-5 col-5">
              <h4>XDI系列</h4>
              <p>xxxxxxxxx</p>
            </div>
            <img
              class="c-50 col-md-5 w-20 h-25 col-sm-5 col-5"
              :src="solution_info.icon.image"
            />
          </div>
          <div class="">
            <img
              class="card-style45 card border-radius-15 border-0"
              :src="solution_info.product1.image"
              alt="..."
            />
          </div>
        </div>

        <div class="col-md-4 mt-1-9">
          <div class="row">
            <div class="col-md-5 flex flex-column col-sm-5 col-5">
              <h4>NCUP系列</h4>
              <p>xxxxxxxxx</p>
            </div>
            <img
              class="c-50 col-md-5 w-20 h-25 col-sm-5 col-5"
              :src="solution_info.icon.image"
            />
          </div>
          <div class="">
            <img
              class="card-style45 card border-radius-15 border-0"
              :src="solution_info.product1.image"
              alt="..."
            />
          </div>
        </div>
        <div
          class="col-md-4 mt-1-9 card border-radius-15 bg-img cover-background shadow h-p"
          :data-background="solution_info.quality.image"
        ></div>
      </div>
      <!-- 长幅1 -->
      <div class="row wow fadeIn" data-wow-delay="420ms">
        <div class="col-md-12 mt-1-9">
          <div class="row">
            <div class="col-md-5 flex flex-column">
              <h4>1.84M超宽幅 漆面保护膜</h4>
              <p>xxxxxxxxxxxxxxxxxxxx</p>
            </div>
          </div>
          <div class="">
            <img
              class="card-style45 card border-radius-15 border-0 w-100"
              :src="solution_info.product2.image"
              alt="..."
            />
          </div>
        </div>
      </div>
      <!-- 中幅 -->
      <div class="row wow fadeIn" data-wow-delay="440ms">
        <!-- 质量认证 -->
        <div
          class="col-md-4 mt-1-9 card border-radius-15 bg-img cover-background shadow h-p"
          :data-background="solution_info.quality.image"></div>
        <div class="col-md-8 mt-1-9">
          <div class="row">
            <div class="col-md-5 flex flex-column">
              <h4>漆面保护膜 7mil-12mil</h4>
              <p>xxxxxxxxx</p>
            </div>
          </div>
          <div class="">
            <img
              class="card-style45 card border-radius-15 border-0 w-100"
              :src="solution_info.product3.image"
              alt="..."
            />
          </div>
        </div>
      </div>
      <!-- 长幅2 -->
      <div class="row wow fadeIn" data-wow-delay="460ms">
        <div class="col-md-12 mt-1-9">
          <div class="row">
            <div class="col-md-5 flex flex-column">
              <h4>14Mil超厚 漆面保护膜</h4>
              <p>xxxxxxxxx</p>
            </div>
          </div>
          <div class="">
            <img
              class="card-style45 card border-radius-15 border-0 w-100"
              :src="solution_info.product2.image"
              alt="..."
            />
          </div>
        </div>

        <!-- NKODA -->
        <div class="col-md-12 mt-1-9">
          <img class="w-100" :src="solution_info.NKODA.image" alt="..." />
        </div>
      </div>
    </div>
  </div>
  <section class="tan-bg">
    <div class="container">
      <div class="section-heading3 text-white">
        <span>Our xxx</span>
        <div class="heading-seprator"></div>
        <h2 class="text-white">探索聚焦</h2>
      </div>
      <div
        class="blog2-carousel owl-carousel owl-theme wow fadeIn"
        data-wow-delay="400ms"
      >
        <article
          v-for="(post, index) in solution_info.posts"
          :key="index"
          class="card card-style28 bg-img cover-background"
          :data-background="solution_info.focus.image"
        >
          <div class="card-body position-relative p-0">
            <div class="post-author">
              <a class="author-image" href="#!"
                ><img :src="post.icon" alt="..."
              /></a>
              <a class="author-name" href="#!">{{ post.author }}</a>
            </div>
            <div class="content">
              <div class="text-white mb-3" v-if="post.date">
                <i class="ti-calendar text-white pe-2"></i>{{ post.date }}
              </div>
              <h4 class="h5 mb-0">
                <a href="#!">{{ post.title }}</a>
              </h4>
              <div class="post-exeption">
                <p class="mb-0 d-none d-sm-block">
                  {{ post.content }}
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

// import VideoCarousel from './banner/VideoCarousel.vue';
// import ImgCarousel from './banner/ImgCarousel.vue';

export default {
  name: "IndexComponent",
  setup() {
    const route = useRoute();
    const param = ref(route.params.param);
    const solution_info = ref({
      title: "",
      slide: { image: "" },
      product1: { image: "" },
      product2: { image: "" },
      product3: { image: "" },
      icon: { image: "" },
      quality: { image: "" },
      NKODA: { image: "" },
      focus: { image: "" },
      posts: [],
    });

    const fetchProductList = async (param) => {
      if (param === "Invisible-livery.html") {
        console.log("Parameter:", param);
        solution_info.value = {
          title: "隐形车衣",
          // 首页顶部banner
          slide: {
            image: require("@/assets/img/bg/bg-05.jpg"),
          },
          // 短幅
          product1: {
            image: require("@/assets/img/bg/content-01.jpg"),
          },
          // 长幅
          product2: {
            image: require("@/assets/img/bg/bg-05.jpg"),
          },
          // 中幅
          product3: {
            image: require("@/assets/img/bg/bg-05.jpg"),
          },
          icon: {
            image: require("@/assets/img/logos/favicon.png"),
          },
          quality: {
            image: require("@/assets/img/bg/content-01.png"),
          },
          NKODA: {
            image: require("@/assets/img/bg/bg-05.jpg"),
          },
          focus: {
            image: require("@/assets/img/portfolio/portfolio-01.jpg"),
          },
          posts: [
            {
              author: "【正直 探索 进化 共生】",
              title: "ABOUT NKODA",
              content:
                "They offer a value estimate and timeline for expected repairs, and entire the paintings upon customer approval. They additionally offer habitual maintenance, customization, and troubleshooting.点击了解更多",
              date: "",
              icon: require("@/assets/img/logos/favicon.png"),
            },
            {
              author: "Aran Edronh",
              title: "The Five Devices You Need To Work Anytime",
              content:
                "They offer a value estimate and timeline for expected repairs, and entire the paintings upon customer approval. They additionally offer habitual maintenance, customization, and troubleshooting.",
              date: "Mar 09, 2022",
              icon: require("@/assets/img/logos/favicon.png"),
            },
            {
              author: "Maal Furstig",
              title: "Do This Before You Sell your iPhone",
              content:
                "They offer a value estimate and timeline for expected repairs, and entire the paintings upon customer approval. They additionally offer habitual maintenance, customization, and troubleshooting.",
              date: "Mar 06, 2022",
              icon: require("@/assets/img/logos/favicon.png"),
            },
          ],
        };
      }
    };

    onMounted(() => {
      // 根据路由参数不同获取不同页面内容
      fetchProductList(param.value);
    });

    return {
      solution_info,
    };
  },
};
</script>
<style>
.p_card {
  border-radius: 10px;
  /* border: solid; */
}
.c-50 {
  border-radius: 50%;
}
.tan-bg {
  background-color: #000;
}

.h-pc {
  height: 30vw !important;
}
@media (max-width: 768px) {
  .h-p {
    height: 80vw !important;
  }
}
</style>
