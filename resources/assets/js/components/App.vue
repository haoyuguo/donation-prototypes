<template>
    <div class="container">
        <section class="top">
            <h1 class="title">Donation Application Prototype ({{ org.name }})</h1>

            <nav class="navbar is-transparent">
                <div class="navbar-brand">
<!--
                    <p class="control">
                        <a v-if="org.name && org.url" class="button is-primary" :href=org.url>
                            <img v-if="org.logo" :src=org.logo alt="ALT" width="112" height="28">
                            <span v-if="!org.logo">{{ org.name }}</span>
                        </a>
                    </p>
-->
                    <div class="navbar-burger burger" data-target="navbarTransparent">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div id="navbarransparent" class="navbar-menu">
                    <div class="navbar-start">

                        <div class="navbar-item">
                            <div class="field is-grouped">
                                <p class="control">
                                    <router-link :to="{ name: 'home' }" class="button is-primary">Home</router-link>
                                </p>

                                <p class="control">
                                    <router-link :to="{ name: 'donate' }" class="button is-primary">Make a Donation</router-link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="navbar-end">
                        <div class="navbar-item has-dropdown is-hoverable">
                            <router-link :to="{ name: 'admin' }" class="navbar-link">Admin</router-link>
                            <div class="navbar-dropdown is-boxed">
                                <router-link :to="{ name: 'donations' }" class="navbar-item">Donations</router-link>
                                <router-link :to="{ name: 'donors' }" class="navbar-item">Donors</router-link>
                                <router-link :to="{ name: 'payments' }" class="navbar-item">Payments</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>

        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
  export default{
    data () {
      return {
        loading: false,
        org: {},
        error: null,
        orgDataUrl: 'http://localhost/api/latest/org'
      }
    },
    created () {
      // fetch the data when the view is created and the data is
      // already being observed
      this.fetch()
    },
    watch: {
      // call again the method if the route changes
      '$route': 'fetch'
    },
    methods: {
      fetch () {
        this.error = null
        this.loading = true

        this.$http.get(this.orgDataUrl)
          .then((response) => {
            this.org = response.data;
          });
      }
    }
  }
</script>