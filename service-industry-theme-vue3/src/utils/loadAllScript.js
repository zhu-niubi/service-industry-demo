export function loadAllScripts() {

  const scripts = [
    "/assets/js/popper.min.js",
    "/assets/js/bootstrap.min.js",
    "/assets/js/nav-menu.js",
    "/assets/js/animated.headline.js",
    "/assets/js/easy.responsive.tabs.js",
    "/assets/js/owl.carousel.js",
    "/assets/js/owl.carousel.thumbs.js",
    "/assets/js/jquery.counterup.min.js",
    "/assets/js/jarallax.min.js",
    "/assets/js/jarallax-video.js",
    "/assets/js/jquery.stellar.min.js",
    "/assets/js/waypoints.min.js",
    "/assets/js/countdown.js",
    "/assets/js/datetimepicker.js",
    "/assets/js/jquery.magnific-popup.min.js",
    "/assets/js/lightgallery-all.js",
    "/assets/js/jquery.mousewheel.min.js",
    "/assets/js/isotope.pkgd.min.js",
    "/assets/js/wow.js",
    "/assets/js/jquery.lettering.js",
    "/assets/js/jquery.textillate.js",
    "/assets/js/tilt.js",
    "/assets/js/clipboard.min.js",
    "/assets/js/prism.js",
    "/assets/js/main.js",
    "/assets/js/custom.js",
  ];

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.setAttribute('type','text/javascript');
      script.src = src;
      script.onload = () => resolve(script);
      script.onerror = () =>
        reject(new Error(`loadAllScripts:Failed to load script ${src}`));
      document.head.appendChild(script);
    });
  }

  // 首先加载 jQuery，因为之后的大部分脚本都基于jQuery
  return loadScript("/assets/js/jquery.min.js")
    .then(() => {
      console.log("loadAllScripts:jQuery loaded");
      return scripts.reduce((promise, src) => {
        return promise.then(() => loadScript(src));
      }, Promise.resolve());
    })
    .then(() => {
      // console.log("loadAllScripts:All scripts loaded");
    })
    .catch((err) => {
      console.error("loadAllScripts:Error loading scripts:", err);
    });
}
