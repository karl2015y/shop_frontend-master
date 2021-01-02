<template>
  <div class="login">
    <Header />
    <div class="container">
      <div class="card">
        <article class="card-body">
          <h4 class="card-title mb-4 mt-1">登入</h4>
          <div class="form-group">
            <label>電子信箱</label>
            <input
              name=""
              class="form-control"
              placeholder="Email"
              type="email"
              v-model="user.email"
            />
          </div>
          <!-- form-group// -->
          <div class="form-group">
            <label>密碼</label>
            <input
              class="form-control"
              placeholder="******"
              type="password"
              v-model="user.password"
            />
          </div>
          <!-- form-group// -->
          <div class="form-group"></div>
          <!-- form-group// -->
          <div class="form-group">
            <button class="btn btn-primary btn-block" @click="signin()">
              Login
            </button>
          </div>
          <!-- form-group// -->
        </article>
      </div>
      <!-- card.// -->
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Login",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
    },
  },
  methods: {
    //登入功能
    signin() {
      const vm = this;
      let data = {
        email: vm.user.email,
        password: vm.user.password,
      };
      vm.$store
        .dispatch("setUserData", data)
        .then((res) => {
          console.log(res);
          if (res.data.user) {
            vm.$router.push("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>