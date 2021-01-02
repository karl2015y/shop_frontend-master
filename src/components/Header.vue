<template>
  <div id="header" style="position: sticky; top: 0" t>
    <div
      class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm"
    >
      <h5 class="my-0 mr-md-auto font-weight-normal">PASSIONATE(熱血)</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <router-link class="p-2 text-dark" to="/"> Home </router-link> |
        <router-link class="p-2 text-dark" to="/shop"> 商城 </router-link> |
        <router-link class="p-2 text-dark" to="/cart"> 購物車 </router-link>
      </nav>
      <div v-if="user !== null">
        <span class="text-success">歡迎回來! {{ user.name }}</span>
        <router-link
          v-if="user.roles === 'admin'"
          class="p-2 text-dark"
          to="/admin/products"
        >
          管理台 </router-link
        >
        <a href="#" class="p-2 text-danger" @click.prevent="logout">登出</a>
      </div>
      <div v-else>
        <router-link class="p-2 text-dark" to="/login"> Login </router-link>/
        <router-link class="p-2 text-dark" to="/register">
          Register
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      const vm = this;
      localStorage.clear();
      location.reload();
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>

<style>
</style>