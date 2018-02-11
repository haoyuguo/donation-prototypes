import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import App from './components/App.vue';

import Home from './components/Home.vue';
import Admin from './components/Admin.vue';
import Donate from './components/Donate.vue';

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/donate',
      name: 'donate',
      component: Donate,
    },

    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    }
  ],
});

const app = new Vue({
  el: '#app',
  components: { App },
  router
});