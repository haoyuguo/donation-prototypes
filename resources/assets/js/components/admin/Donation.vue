<template>
    <h2>Donation Details</h2>
</template>

<script>
  export default{
    data () {
      return {
        loading: false,
        post: null,
        error: null
      }
    },
    created () {
      // fetch the data when the view is created and the data is
      // already being observed
      this.fetchData()
    },
    watch: {
      // call again the method if the route changes
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        this.error = this.post = null
        this.loading = true
        getDonation(this.$route.params.id, (err, donation) => {
          this.loading = false
          if (err) {
            this.error = err.toString()
          } else {
            this.post = post
          }
        })
      }
    }
  }
</script>
