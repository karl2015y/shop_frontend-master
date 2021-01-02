<template>
  <div class="register">
    <Header />
    <div class="container">
      <div class="card">
        <article class="card-body">
          <h4 class="card-title mb-4 mt-1">註冊</h4>
          <form>
            <div class="form-group">
              <label>電子信箱</label>
              <input
                name=""
                class="form-control"
                placeholder="Email"
                type="email"
              />
            </div>
            <div class="form-group">
              <label>名字</label>
              <input class="form-control" placeholder="Name" type="text" />
            </div>
            <div class="form-group">
              <label>密碼</label>
              <input
                class="form-control"
                placeholder="******"
                type="password"
              />
            </div>

            <div class="form-group">
              <button type="submit" class="btn btn-primary btn-block">
                註冊
              </button>
            </div>
            <!-- form-group// -->
          </form>
        </article>
      </div>
    </div>

    <!-- card.// -->
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { register } from "@/api/user";

export default {
  name: "register",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      email: null,
      password: null,
      name: null,
    };
  },
  methods: {
    register() {
      const vm = this;
      let data = {
        email: vm.email,
        password: vm.password,
        name: vm.name,
      };
      register(data).then(function (res) {
        console.log(res);
      });
    },
  },
};
</script>

<style>
</style>