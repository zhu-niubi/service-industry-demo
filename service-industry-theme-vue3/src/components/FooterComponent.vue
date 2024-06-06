<template>
  <footer>
    <div class="container">
      <div class="row mt-n2-6">
        <div class="col-sm-6 col-lg-3 mt-2-6 wow fadeIn" data-wow-delay="200ms">
          <div class="mb-1-6 mb-lg-1-9">
            <img src="images/logos/footer-light-logo.png" alt="..." />
          </div>
          <ul class="contact-list">
            <li>
              <span class="fa fa-home pe-3 text-white"></span
              ><a href="#!">73 Canal Street, UK</a>
            </li>
            <li>
              <span class="fa fa-phone pe-3 text-white"></span
              ><a href="#!">(+44) 123 456 7892</a>
            </li>
            <li>
              <span class="fa fa-envelope pe-3 text-white"></span
              ><a href="#!">addyour@emailhere</a>
            </li>
          </ul>
        </div>
        <div class="col-sm-6 col-lg-2 mt-2-6 wow fadeIn" data-wow-delay="400ms">
          <div class="ps-sm-1-9 ps-lg-2-2 ps-xl-2-5">
            <h3 class="h5 mb-1-6 mb-lg-1-9 text-primary">Company</h3>
            <ul class="footer-list-style1">
              <li><a href="aboutus.html">About us</a></li>
              <li><a href="career.html">Careers</a></li>
              <li><a href="services.html">Our services</a></li>
              <li><a href="contactus.html">Contact us</a></li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-lg-2 mt-2-6 wow fadeIn" data-wow-delay="600ms">
          <div class="ps-lg-2-2 ps-xl-2-5">
            <h3 class="h5 mb-1-6 mb-lg-1-9 text-primary">Customer</h3>
            <ul class="footer-list-style1">
              <li><a href="our-clients.html">Our clients</a></li>
              <li><a href="testimonials.html">Testimonial</a></li>
              <li><a href="pricing-plans.html">Pricing</a></li>
              <li><a href="our-process.html">Our process</a></li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-lg-2 mt-2-6 wow fadeIn" data-wow-delay="800ms">
          <div class="ps-sm-1-9 ps-lg-2-2 ps-xl-2-5">
            <h3 class="h5 mb-1-6 mb-lg-1-9 text-primary">Additional</h3>
            <ul class="footer-list-style1">
              <li><a href="company-history.html">Our story</a></li>
              <li><a href="our-team.html">Our Team</a></li>
              <li><a href="faq.html">FAQ</a></li>
              <li><a href="blog-grid.html">Latest news</a></li>
            </ul>
          </div>
        </div>
        <div
          class="col-sm-6 col-lg-3 mt-2-6 wow fadeIn"
          data-wow-delay="1000ms"
        >
          <div class="ps-lg-2-2 ps-xl-2-5">
            <h3 class="h5 mb-1-6 mb-lg-1-9 text-primary">NewsLetter</h3>
            <p class="text-white mb-4">
              Stay updated with our latest news. we promise not to spam&nbsp;!
            </p>
            <form
              class="quform newsletter-form w-90 w-sm-100"
              action="quform/newsletter-two.php"
              method="post"
              enctype="multipart/form-data"
              onclick=""
            >
              <div class="quform-elements">
                <div class="row">
                  <!-- Begin Text input element -->
                  <div class="col-md-12">
                    <div class="quform-element">
                      <div class="quform-input">
                        <input
                          class="form-control"
                          id="email_address"
                          type="text"
                          name="email_address"
                          placeholder="Subscribe with us"
                        />
                      </div>
                    </div>
                  </div>
                  <!-- End Text input element -->

                  <!-- Begin Submit button -->
                  <div class="col-md-12">
                    <div class="quform-submit-inner">
                      <button class="btn" type="submit">
                        <span
                          ><i class="fas fa-paper-plane text-white"></i
                        ></span>
                      </button>
                    </div>
                    <div class="quform-loading-wrap text-start">
                      <span class="quform-loading"></span>
                    </div>
                  </div>
                  <!-- End Submit button -->
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div
      class="footer-bar borders-top border-color-light-white wow fadeIn"
      data-wow-delay="1200ms"
    >
      <div class="container">
        <div class="row">
          <div
            class="col-md-6 text-center text-md-start mt-3 mt-md-0 order-2 order-md-1"
          >
            <p class="d-inline-block text-white mb-0">
              &copy; <span class="current-year"></span> Services is Powered by
              <a href="#!" class="text-primary white-hover">Chitrakoot Web</a>
            </p>
          </div>
          <div class="col-md-6 text-center text-md-end order-1 order-md-2">
            <p class="text-white d-inline-block mb-0 align-middle">
              Follow Us:
            </p>
            <ul class="footer-social-style1">
              <li>
                <a href="#!"><i class="fab fa-facebook-f"></i></a>
              </li>
              <li>
                <a href="#!"><i class="fab fa-twitter"></i></a>
              </li>
              <li>
                <a href="#!"><i class="fab fa-youtube"></i></a>
              </li>
              <li>
                <a href="#!"><i class="fab fa-linkedin-in"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
