import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NotFound from '../views/NotFound.vue';
// import { loadScript } from '../utils/loadScript';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// const scripts = [
//   '/assets/js/popper.min.js',
//   '/assets/js/bootstrap.min.js',
//   '/assets/search/search.js',
//   '/assets/js/nav-menu.js',
//   '/assets/js/animated.headline.js',
//   '/assets/js/easy.responsive.tabs.js',
//   '/assets/js/owl.carousel.js',
//   '/assets/js/owl.carousel.thumbs.js',
//   '/assets/js/jquery.counterup.min.js',
//   '/assets/js/jarallax.min.js',
//   '/assets/js/jarallax-video.js',
//   '/assets/js/jquery.stellar.min.js',
//   '/assets/js/waypoints.min.js',
//   '/assets/js/countdown.js',
//   '/assets/js/datetimepicker.js',
//   '/assets/js/jquery.magnific-popup.min.js',
//   '/assets/js/lightgallery-all.js',
//   '/assets/js/jquery.mousewheel.min.js',
//   '/assets/js/isotope.pkgd.min.js',
//   '/assets/js/wow.js',
//   '/assets/js/jquery.lettering.js',
//   '/assets/js/jquery.textillate.js',
//   '/assets/js/tilt.js',
//   '/assets/js/clipboard.min.js',
//   '/assets/js/prism.js',
//   '/assets/js/main.js',
//   '/assets/js/custom.js',
//   '/assets/quform/js/plugins.js',
//   '/assets/quform/js/scripts.js',
// ];

// let scriptsLoaded = false;

// function loadAllScripts() {
//   return loadScript('/assets/js/jquery.min.js')
//     .then(() => {
//       console.log('jQuery loaded');
//       return scripts.reduce((promise, src) => {
//         return promise.then(() => loadScript(src));
//       }, Promise.resolve());
//     })
//     .then(() => {
//       console.log('All scripts loaded');
//       scriptsLoaded = true;
//     })
//     .catch(err => {
//       console.error('Error loading scripts:', err);
//     });
// }

// router.beforeEach((to, from, next) => {
//   if (!scriptsLoaded) {
//     loadAllScripts().then(() => next());
//   } else {
//     next();
//   }
// });

export default router;
