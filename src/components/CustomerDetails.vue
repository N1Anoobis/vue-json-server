<template>
  <div class="details container">
    <br />
    <br />
    <br />
    <button class="btn btn-dark"><router-link to="/">Back</router-link></button>
    <h1 class="page-header">
      {{ customer.name }} {{ customer.gender }}
      <span class="pull-right">
        <router-link class="btn btn-primary" v-bind:to="'/edit/' + customer.id"
          >Edit</router-link
        >
        <button class="btn btn-danger" v-on:click="deleteCustomer(customer.id)">
          Delete
        </button>
      </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item">
        <label>Number:</label>
        <span class="glyphicon glyphicon-phone" aria-hidden="true"></span>
        {{ customer.phone }}
      </li>
      <li class="list-group-item">
        <label>Email:</label>
        <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>
        {{ customer.email }}
      </li>
    </ul>

    <ul class="list-group">
      <li class="list-group-item">
        <label>Address:</label> {{ customer.address }}
      </li>
      <li class="list-group-item"><label>Age:</label> {{ customer.age }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "customerdetails",
  data() {
    return {
      customer: "",
    };
  },
  methods: {
    fetchCustomer(id) {
      axios
        .get(`http://localhost:3000/customers/${id}`)
        .then((response) => {
          this.customer = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteCustomer(id) {
      axios.delete(`http://localhost:3000/customers/${id}`).then(() => {
        this.$router.push({ path: "/", query: { alert: "Customer Deleted" } });
      });
    },
  },
  created: function() {
    this.fetchCustomer(this.$route.params.id);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
