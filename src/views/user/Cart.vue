<template>
  <div>
    <Header />
    <div class="container-fluid">
      <div class="row">
        <aside class="col-lg-9">
          <div class="card">
            <div class="table-responsive">
              <table class="table table-borderless table-shopping-cart">
                <thead class="text-muted">
                  <tr class="small text-uppercase">
                    <th scope="col">產品名稱</th>
                    <th scope="col" width="120">數量</th>
                    <th scope="col" width="120">價錢</th>
                    <th
                      scope="col"
                      class="text-right d-none d-md-block"
                      width="200"
                    ></th>
                  </tr>
                </thead>
                <tbody v-if="cart !== null">
                  <tr v-for="(item, index) in cart.cart_list" :key="index">
                    <td>
                      <figure class="itemside align-items-center">
                        <div class="aside">
                          <img :src="item.pimg" class="img-sm" />
                        </div>
                        <figcaption class="info">
                          <a href="#" class="title text-dark" data-abc="true">{{
                            item.name
                          }}</a>
                          <p class="text-muted small">
                            SIZE: L <br />
                            Brand: MAXTRA
                          </p>
                        </figcaption>
                      </figure>
                    </td>
                    <td>
                      <select
                        class="form-control"
                        v-model="item.count"
                        @change="updateCart(item)"
                      >
                        <option
                          v-for="index in item.remaining_number"
                          :key="index"
                        >
                          {{ index }}
                        </option>
                      </select>
                    </td>
                    <td>
                      <div class="price-wrap">
                        <var class="price">${{ item.price }}</var>
                      </div>
                    </td>
                    <td class="text-right d-none d-md-block">
                      <button class="btn btn-light" @click="deleteCart(item)">
                        Remove
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <form class="needs-validation" novalidate="">
            <div class="row mt-5">
              <div class="col-md-12 mb-6">
                <label for="firstName">姓名</label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder=""
                  value=""
                  required=""
                  v-model="name"
                />
              </div>
            </div>

            <div class="mb-3">
              <label for="email"
                >Email <span class="text-muted">(Optional)</span></label
              >
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="請輸入信箱"
                v-model="email"
              />
            </div>

            <div class="mb-3">
              <label for="phone">電話</label>
              <input
                type="text"
                class="form-control"
                id="phone"
                placeholder="請輸入電話"
                required=""
                v-model="phone"
              />
            </div>

            <div class="mb-3">
              <label for="address">地址</label>
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="請輸入地址 ex:高雄市楠梓區xx路xx號"
                required=""
                v-model="address"
              />
            </div>
          </form>
        </aside>
        <aside class="col-lg-3">
          <div class="card">
            <div class="card-body">
              <div class="dlist-align">
                <div>Total price:</div>
                <div class="text-right ml-3">
                  ${{ cart !== null ? cart.total_price : 0 }}
                </div>
              </div>
              <!-- <div class="dlist-align">
                <div>Discount:</div>
                <div class="text-right text-danger ml-3">
                  -${{ cart !== null ? cart.discount : 0 }}
                </div>
              </div>
              <div class="dlist-align">
                <div>Total:</div>
                <div class="text-right text-dark b ml-3">
                  <strong>${{ cart !== null ? cart.total : 0 }} </strong>
                </div>
              </div> -->
              <hr />
              <button
                href="#"
                class="btn btn-out btn-primary btn-square btn-main"
                data-abc="true"
                @click="createOrder()"
              >
                下訂單
              </button>
              <router-link
                class="btn btn-out btn-success btn-square btn-main mt-2"
                to="/shop"
              >
                繼續購物
              </router-link>
              <span class="text-primary">{{ status }}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
    <Footer />
    <div ref="ecpay"></div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { getCarts, deleteCarts, updateCarts } from "@/api/cart";
import { createOrders, getOrders, getSingOrders } from "@/api/order";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      cart: {},
      status: null,
      name: null,
      address: null,
      phone: null,
      email: null,
    };
  },
  created() {
    const vm = this;
    vm.getCart();
  },
  methods: {
    getCart() {
      const vm = this;
      getCarts().then(function (res) {
        vm.cart = res.data;
      });
    },
    deleteCart(item) {
      const vm = this;
      deleteCarts(item).then(function (res) {
        vm.getCart();
      });
    },
    updateCart(item) {
      const vm = this;
      updateCarts(item).then(function (res) {
        vm.getCart();
      });
    },
    createOrder() {
      const vm = this;
      let data = {
        name: vm.name,
        email: vm.email,
        address: vm.address,
        phone: vm.phone,
      };
      createOrders(data).then(function (res) {
        vm.$refs.ecpay.innerHTML = res.data;
        document.getElementById("__ecpayForm").style.visibility = "hidden";
        document.getElementById("__ecpayForm").submit();
        vm.getCart();
      });
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");

body {
  background-color: #eeeeee;
  font-family: "Open Sans", serif;
  font-size: 14px;
}

.container-fluid {
  margin-top: 70px;
}

.card-body {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.4rem;
}

.img-sm {
  width: 80px;
  height: 80px;
}

.itemside .info {
  padding-left: 15px;
  padding-right: 7px;
}

.table-shopping-cart .price-wrap {
  line-height: 1.2;
}

.table-shopping-cart .price {
  font-weight: bold;
  margin-right: 5px;
  display: block;
}

.text-muted {
  color: #969696 !important;
}

a {
  text-decoration: none !important;
}

.card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0px;
}

.itemside {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
}

.dlist-align {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

[class*="dlist-"] {
  margin-bottom: 5px;
}

.price {
  font-weight: 600;
  color: #212529;
}

.btn.btn-out {
  outline: 1px solid #fff;
  outline-offset: -5px;
}

.btn-main {
  border-radius: 2px;
  text-transform: capitalize;
  font-size: 15px;
  padding: 10px 19px;
  cursor: pointer;
  color: #fff;
  width: 100%;
}

.btn-light {
  color: #ffffff;
  background-color: #f44336;
  border-color: #f8f9fa;
  font-size: 12px;
}

.btn-light:hover {
  color: #ffffff;
  background-color: #f44336;
  border-color: #f44336;
}

.btn-apply {
  font-size: 11px;
}
</style>