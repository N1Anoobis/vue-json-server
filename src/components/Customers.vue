<template>
  <div class="customers container">
    <br />
    <br />
    <br />
    <Alert v-if="alert" v-bind:message="alert" :key="alert" />
    <h1 class="page-header">Menage Customers</h1>
    <input
      class="form-control"
      placeholder="Enter Name"
      v-model="filterInput"
    />
    <br />
    <table class="table table-striped">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Email</th>
          <th>Number</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="customer in filterBy(customers, filterInput)"
          :key="customer.id"
        >
          <td>{{ customer.name }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td>
            <router-link
              class="btn btn btn-secondary"
              v-bind:to="'/customer/' + customer.id"
              >View</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import Alert from "./Alert";
export default {
  name: "customers",
  data() {
    return {
      customers: [],
      alert: "",
      filterInput: "",
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
    filterBy(list, value) {
      value = value.charAt(0).toUpperCase() + value.slice(1);
      return list.filter(function(customer) {
        return customer.name.indexOf(value) > -1;
      });
    },
  },
  created: function() {
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert;
    }
    this.fetchCustomers();
  },
  updated: function() {
    if (
      this.alert === "Customer Added" ||
      this.alert === "Customer Deleted" ||
      this.alert === "Customer Updated"
    ) {
      setTimeout(() => {
        (this.alert = ""), this.fetchCustomers();
      }, 2000);
    }
  },
  components: {
    Alert,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
