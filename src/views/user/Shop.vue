<template>
  <div class="shop">
    <Header />
    <!-- Page Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <h2 class="my-4">PASSIONATE</h2>
          <div class="list-group">
            <a href="#" class="list-group-item">衣服類1</a>
            <a href="#" class="list-group-item">衣服類2</a>
            <a href="#" class="list-group-item">衣服類3</a>
          </div>
        </div>
        <!-- /.col-lg-3 -->

        <div class="col-lg-9">
          <div
            id="carouselExampleIndicators"
            class="carousel slide my-4"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item active">
                <img
                  class="d-block img-fluid"
                  src="../../assets/img/bg-1.jpg"
                  alt="First slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block img-fluid"
                  src="../../assets/img/bg-2.jpg"
                  alt="Second slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block img-fluid"
                  src="../../assets/img/bg-3.jpg"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>

          <div class="row" v-if="product_list">
            <div
              class="col-lg-4 col-md-6 mb-4"
              v-for="(item, index) in product_list.data"
              :key="index"
            >
              <div class="card h-100">
                <a href="#"
                  ><img class="card-img-top" :src="item.pimg" alt=""
                /></a>
                <div class="card-body">
                  <h4 class="card-title">
                    <a href="#">產品{{ item.name }}</a>
                  </h4>
                  <h5>${{ item.price }}</h5>
                  <p class="card-text">歡迎購買</p>
                  <p class="card-text">剩餘數量:{{ item.count }}</p>

                  <button
                    class="btn btn btn-primary clearfix"
                    style="float: right"
                    @click="addtoCarts(item)"
                  >
                    Add Cart
                  </button>
                </div>
                <div class="card-footer">
                </div>
              </div>
            </div>
          </div>
          <!-- /.row -->
        </div>
        <!-- /.col-lg-9 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { getProduct_pages } from "@/api/product";
import { addCarts } from "@/api/cart";

export default {
  name: "shop",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      product_list: null,
    };
  },
  created() {
    const vm = this;
    getProduct_pages().then(function (res) {
      console.log(res);
      vm.product_list = res.data.product_list;
    });
  },
  methods: {
    addtoCarts(item) {
      addCarts(item).then(function (res) {
        console.log(res);
      });
    },
  },
};
</script>

<style>
</style>