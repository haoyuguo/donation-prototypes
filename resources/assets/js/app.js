import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import axios from 'axios';
Vue.prototype.$http = axios;

import App from './components/App.vue';

import Home from './components/Home.vue';
import Donate from './components/Donate.vue';

import Admin from './components/admin/Home.vue';
import Donations from './components/admin/Donations.vue';
// import Donation from './components/admin/Donation.vue';
import Payments from './components/admin/Payments.vue';
// import Payment from './components/admin/Payment.vue';
import Donors from './components/admin/Donors.vue';
// import Donor from './components/admin/Donor.vue';
// import Receipt from './components/admin/Receipt.vue';

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/donate', name: 'donate', component: Donate },

    { path: '/admin', name: 'admin', component: Admin },

    { path: '/admin/donations', name: 'donations', component: Donations },
    // { path: '/admin/donations/{id}', name: 'donation', component: Donation },

    { path: '/admin/payments', name: 'payments', component: Payments },
    // { path: '/admin/payments/{id}', name: 'payment', component: Payment },

    { path: '/admin/donors', name: 'donors', component: Donors },
    // { path: '/admin/donors/{id}', name: 'donor', component: Donor },

    // { path: '/admin/receipt/for/{donationId}', name: 'receipt', component: Receipt },
    // { path: '/admin/receipt/{id}', name: 'receipt', component: Receipt }
  ],
});

const app = new Vue({
  el: '#app',
  components: { App },
  router
});