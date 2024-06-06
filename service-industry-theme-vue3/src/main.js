// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/plugins.css'
import '@/assets/search/search.css'
import '@/assets/quform/css/base.css'
import '@/assets/css/styles.css'
import '@/assets/css/custom.css'
import { loadScript } from './utils/loadScript'

const app = createApp(App);
app.use(router);
app.mount('#app');

const scripts = [
    '/assets/js/popper.min.js',
    '/assets/js/bootstrap.min.js',
    '/assets/search/search.js',
    '/assets/js/nav-menu.js',
    '/assets/js/animated.headline.js',
    '/assets/js/easy.responsive.tabs.js',
    '/assets/js/owl.carousel.js',
    '/assets/js/owl.carousel.thumbs.js',
    '/assets/js/jquery.counterup.min.js',
    '/assets/js/jarallax.min.js',
    '/assets/js/jarallax-video.js',
    '/assets/js/jquery.stellar.min.js',
    '/assets/js/waypoints.min.js',
    '/assets/js/countdown.js',
    '/assets/js/datetimepicker.js',
    '/assets/js/jquery.magnific-popup.min.js',
    '/assets/js/lightgallery-all.js',
    '/assets/js/jquery.mousewheel.min.js',
    '/assets/js/isotope.pkgd.min.js',
    '/assets/js/wow.js',
    '/assets/js/jquery.lettering.js',
    '/assets/js/jquery.textillate.js',
    '/assets/js/tilt.js',
    '/assets/js/clipboard.min.js',
    '/assets/js/prism.js',
    '/assets/js/main.js',
    '/assets/js/custom.js',
    '/assets/quform/js/plugins.js',
    '/assets/quform/js/scripts.js',
];

// 首先加载 jQuery
loadScript('/assets/js/jquery.min.js')
    .then(() => {
        console.log('jQuery loaded');
        // 依次加载其他脚本
        return scripts.reduce((promise, src) => {
            return promise.then(() => loadScript(src));
        }, Promise.resolve());
    })
    .then(() => {
        console.log('All scripts loaded');
    })
    .catch(err => {
        console.error('Error loading scripts:', err);
    });
