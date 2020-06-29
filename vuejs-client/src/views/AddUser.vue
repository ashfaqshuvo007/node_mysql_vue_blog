<template>
  <div class="submitform">
    <form v-if="!submitted" method="post">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" required v-model="user.name" name="name" />
      </div>

      <div class="form-group">
        <label for="age">Age</label>
        <input type="number" class="form-control" id="age" required v-model="user.age" name="age" />
      </div>

      <button v-on:click="saveUser" class="btn btn-success">Submit</button>
    </form>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" v-on:click="newUser">Add</button>
    </div>
  </div>
</template>
<script>
import http from "../http-common";

export default {
  name: "add",
  data() {
    return {
      user: {
        id: 0,
        name: "",
        age: 0,
        active: false
      },
      submitted: false
    };
  },
  methods: {
    /* eslint-disable no-console */
    saveUser() {
      //Form data
      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("age", this.age);
      http
        .post("/user/", formData)
        .then(response => {
          this.user.id = response.data.id;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });

      this.submitted = true;
    },
    newUser() {
      this.submitted = false;
      this.user = {};
    }
    /* eslint-enable no-console */
  }
};
</script>
 
<style>
.submitform {
  max-width: 300px;
  margin: auto;
}
</style>