<template>
  <div class="customers container">
    <br />
    <h1 class="page-header">Menage Customers</h1>
    <table class="table table-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in customers" :key="customer.id">
            <td>{{customer.name}}</td>
            <td>{{customer.email}}</td>
            <td>{{customer.phone}}</td>
            <td><router-link class="btn btn-default" v-bind:to="'/customer/'+customer.id">View</router-link></td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "customers",
  data() {
    return {
      customers: [],
    };
  },
  methods: {
    fetchCustomers() {
      axios
        .get("http://localhost:3000/customers")
        .then((response) => {
          this.customers = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created: function() {
    this.fetchCustomers();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
