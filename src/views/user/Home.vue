<template>
  <div class="home">
    <!-- <img
      alt="Vue logo"
      src="@/assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Header />
    <section class="categories">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 p-0">
            <div
              class="categories__item categories__large__item set-bg animate__animated animate__fadeIn animate__delay-1s"
              :style="{ backgroundImage: 'url(' + imgdata[0] + ')' }"
            >
              <div class="categories__text">
                <h1>時尚女性服裝</h1>
                <p>基本百搭款！</p>
                <button class="btn btn btn-primary">Shop Now</button>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                <div
                  class="categories__item set-bg animate__animated animate__fadeIn"
                  style="
                    backgroundimage: url(~@/assets/img/ch-2);
                    animation-delay: 1.4s;
                  "
                >
                  <div class="categories__text">
                    <h4>時尚男性服裝</h4>
                    <p>358 種類</p>
                    <button class="btn btn btn-primary">Shop Now</button>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                <div
                  class="categories__item set-bg animate__animated animate__fadeIn"
                  :style="{ backgroundImage: 'url(' + imgdata[1] + ')' }"
                  style="animation-delay: 1.8s"
                >
                  <div class="categories__text">
                    <h4>孩子男性</h4>
                    <p>273 種類</p>
                    <button class="btn btn btn-primary">Shop Now</button>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                <div
                  class="categories__item set-bg animate__animated animate__fadeIn"
                  :style="{ backgroundImage: 'url(' + imgdata[2] + ')' }"
                  style="animation-delay: 1.8s"
                >
                  <div class="categories__text">
                    <h4>化妝品</h4>
                    <p>159 種類</p>
                    <button class="btn btn btn-primary">Shop Now</button>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                <div
                  class="categories__item set-bg animate__animated animate__fadeIn"
                  :style="{ backgroundImage: 'url(' + imgdata[3] + ')' }"
                  style="animation-delay: 1.4s"
                >
                  <div class="categories__text">
                    <h4>配飾</h4>
                    <p>792 items</p>
                    <button class="btn btn btn-primary">Shop Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="newproduct">
      <div class="container">
        <h2 class="mb-3">New</h2>
        <div class="row">
          <div class="col-md-3 p-2" v-for="index in 8" :key="index">
            <div>
              <div class="product__item">
                <div class="product__item__pic">
                  <img
                    data-aos="fade"
                    class="set-bg"
                    :src="imgdata[4 + index - 1]"
                    alt=""
                  />
                  <ul class="product__hover">
                    <li>
                      <a href="#">
                        <i class="fa fa-share-alt" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-heart" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="product__item__text mt-2 mb-2">
                  <h6>
                    <a href="#">衣服 {{ index }}</a>
                  </h6>
                  <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="product__price">$590</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Img from "@/assets/img/ch-2.jpg";
import Img2 from "@/assets/img/ch-3.jpg";
import Img3 from "@/assets/img/ch-4.jpg";
import Img4 from "@/assets/img/ch-5.jpg";
import pd1 from "@/assets/img/product-1.jpg";
import pd2 from "@/assets/img/product-2.jpg";
import pd3 from "@/assets/img/product-3.jpg";
import pd4 from "@/assets/img/product-4.jpg";
import pd5 from "@/assets/img/product-5.jpg";
import pd6 from "@/assets/img/product-6.jpg";
import pd7 from "@/assets/img/product-7.jpg";
import pd8 from "@/assets/img/product-8.jpg";
import loading from "@/assets/img/loading.svg";

import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Header,
    Footer,
  },
  data() {
    return {
      imgdata: [
        Img,
        Img2,
        Img3,
        Img4,
        pd1,
        pd2,
        pd3,
        pd4,
        pd5,
        pd6,
        pd7,
        pd8
      ],
      time: "5000s",
    };
  },
  created() {},
  mounted() {},
};
</script>

<style lang="scss">
</style>
