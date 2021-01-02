import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/user/Home.vue';
import Dashboard from '../views/admin/Dashboard.vue';
import Orders from '../components/admin/Orders';
import Products from '../components/admin/Products';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/user/About.vue'),
  // },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "about" */ '../views/user/Shop.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/user/Cart.vue'),
  },
  {
    path: '/login',
    name: 'Login',

    component: () => import(/* webpackChunkName: "about" */ '../views/user/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',

    component: () => import(/* webpackChunkName: "about" */ '../views/user/Register.vue'),
  },
   {
    path: '/admin',
    name: 'Dashboards',
    component: Dashboard,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'products',
        name: 'Products',
        component: Products,
        meta: { requiresAuth: true }
      },
      {
        path: 'orders',
        name: 'Orders',
        component: Orders,
        meta: { requiresAuth: true }
      }
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
