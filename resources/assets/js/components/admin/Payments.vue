<template>
    <div>
        <h2>Payments List</h2>
        <table>
            <thead>
            <tr>
                <th>Payer</th>
                <th>Amount ($)</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in payments">
                <td>{{ item.payer }}</td>
                <td>{{ item.amount }}</td>
                <td>{{ item.date }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
  export default{
    data () {
      return {
        loading: false,
        payments: [],
        error: null,
        dataEndPoint: 'http://localhost/api/latest/payments'
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

        this.$http.get(this.dataEndPoint)
          .then((response) => {
            this.payments = response.data;
          });
      }
    }
  }
</script>
