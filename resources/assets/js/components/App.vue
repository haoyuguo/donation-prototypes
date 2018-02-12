<template>
    <div>
        <h1>Donation Application Prototype</h1>

        <p>
            <b>NAVIGATION</b>

            -
            [Public]
            <router-link :to="{ name: 'home' }">Home</router-link> |
            <router-link :to="{ name: 'donate' }">Make a Donation</router-link>

            -
            [Admin]
            <router-link :to="{ name: 'admin' }">Admin Home</router-link> |
            <router-link :to="{ name: 'donations' }">Donations</router-link> |
            <router-link :to="{ name: 'payments' }">Payments</router-link> |
            <router-link :to="{ name: 'donors' }">Donors</router-link>
        </p>

        <hr>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
  export default {}
</script>