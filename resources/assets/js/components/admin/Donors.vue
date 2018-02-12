<template>
    <div>
        <h2>Donors List</h2>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in donors">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.email }}</td>
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
        donors: [],
        error: null,
        dataEndPoint: 'http://localhost/api/latest/donors'
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
            this.donors = response.data;
          });
      }
    }
  }
</script>
