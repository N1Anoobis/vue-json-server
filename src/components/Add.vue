<template>
  <div class="add container">
    <br />
    <br />
    <br />
    <!-- <Alert v-if="alert" v-bind:message="alert" /> -->
    <h1 class="page-header">Add Customer</h1>
    <form v-on:submit="addCustomer">
      <div class="well">
        <h4>Customer Info</h4>
        <div class="form-group">
          <label>Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Name"
            v-model="customer.name"
          />
        </div>
        <div class="form-group">
          <label>Gender</label>
          <input
            type="text"
            class="form-control"
            placeholder="Gender"
            v-model="customer.gender"
          />
        </div>
      </div>
      <div class="well">
        <h4>Customer Contact</h4>
        <div class="form-group">
          <label>Email</label>
          <input
            type="text"
            class="form-control"
            placeholder="Email"
            v-model="customer.email"
          />
        </div>
        <div class="form-group">
          <label>Phone</label>
          <input
            type="text"
            class="form-control"
            placeholder="Phone"
            v-model="customer.phone"
          />
        </div>
      </div>

      <div class="well">
        <h4>Customer Location</h4>
        <div class="form-group">
          <label>Address</label>
          <input
            type="text"
            class="form-control"
            placeholder="Address"
            v-model="customer.address"
          />
        </div>
        <div class="form-group">
          <label>Age</label>
          <input
            type="text"
            class="form-control"
            placeholder="Age"
            v-model="customer.age"
          />
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
// import Alert from "./Alert";
import axios from "axios";
export default {
  name: "add",
  data() {
    return {
      customer: {},
      //   alert: "",
    };
  },
  methods: {
    addCustomer(e) {
      if (
        !this.customer.name ||
        !this.customer.address ||
        !this.customer.email
      ) {
        this.alert = "Please fill in all required fields";
      } else {
        let newCustomer = {
          id: Math.floor(Math.random() * (10000000 - 1 + 1)) + 1,
          name: this.customer.name,
          gender: this.customer.gender,
          phone: this.customer.phone,
          email: this.customer.email,
          address: this.customer.address,
          age: this.customer.age,
        };
        axios({
          method: "post",
          url: "http://localhost:3000/customers",
          data: newCustomer,
        }).then(function(response) {
          console.log(response.data);
        });
        this.$router.push({
          path: "/",
            query: { alert: "Customer Added" },
        });

        e.preventDefault();
      }
      e.preventDefault();
    },
  },
  components: {
    // Alert,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
