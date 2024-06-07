<!-- src/views/NotFound.vue -->
<template>
  <section class="full-screen p-0 d-flex align-items-center min-vh-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="box-shadow2 p-1-6 p-sm-1-9 p-md-2-5 p-xl-2-9 text-center">
            <div class="error-sign">
              <div class="top">
                <h1 class="text-white">404</h1>
                <h3 class="text-white mb-0">Error</h3>
              </div>
              <div class="middle"></div>
              <div class="bottom">
                <img src="images/content/error.png" alt="..." />
              </div>
            </div>
            <h2>Oops! page not found</h2>
            <p class="lead mb-1-6 mb-md-1-9 font-weight-400">
              That page doesn't exist or is unavailable
            </p>
            <a href="/" class="butn ms-2 ms-sm-0 mt-2 mt-sm-0">Back To Home</a>
            <a href="/" class="butn secondary ms-2 mt-2 mt-sm-0">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "NotFound",
  mounted() {
  },
};
</script>
