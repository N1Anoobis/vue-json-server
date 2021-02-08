<template>
  <div class="add container">
    <br />
    <br />
    <br />
    <Alert v-if="alert" v-bind:message="alert" />
    <h1 class="page-header">Add Customer</h1>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(addCustomer)">
        <div class="well">
          <h4>Customer Info</h4>
          <ValidationProvider
            name="Name"
            rules="required|alpha"
            v-slot="{ errors }"
          >
            <div class="form-group">
              <label>Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                v-model="customer.name"
              />
              <span>{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <ValidationProvider
            name="Gender"
            rules="required|alpha"
            v-slot="{ errors }"
          >
            <div class="form-group">
              <label>Gender</label>
              <input
                type="text"
                class="form-control"
                placeholder="Gender"
                v-model="customer.gender"
              />
              <span>{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
        </div>
        <div class="well">
          <h4>Customer Contact</h4>
          <ValidationProvider
            name="Email"
            rules="required|email"
            v-slot="{ errors }"
          >
            <div class="form-group">
              <label>Email</label>
              <input
                type="text"
                class="form-control"
                placeholder="Email"
                v-model="customer.email"
              />
              <span>{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <ValidationProvider
            name="Phone"
            rules="required|numeric"
            v-slot="{ errors }"
          >
            <div class="form-group">
              <label>Phone</label>
              <input
                type="text"
                class="form-control"
                placeholder="Phone"
                v-model="customer.phone"
              />
              <span>{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
        </div>
        <div class="well">
          <h4>Customer Location</h4>
          <ValidationProvider
            name="Address"
            rules="required"
            v-slot="{ errors }"
          >
            <div class="form-group">
              <label>Address</label>
              <input
                type="text"
                class="form-control"
                placeholder="Address"
                v-model="customer.address"
              />
              <span>{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <ValidationProvider
            name="Age"
            rules="required|numeric"
            v-slot="{ errors }"
          >
            <div class="form-group">
              <label>Age</label>
              <input
                type="text"
                class="form-control"
                placeholder="Age"
                v-model="customer.age"
              />
              <span>{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import Alert from "./Alert";
import axios from "axios";
export default {
  name: "add",
  data() {
    return {
      customer: {
        name: "",
        gender: "",
        email: "",
        phone: "",
        address: "",
        age: "",
      },
      alert: "",
    };
  },
  methods: {
    addCustomer(e) {
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
      this.alert = "";
      e.preventDefault();
    },
  },
  components: {
    Alert,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
