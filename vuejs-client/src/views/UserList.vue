<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>User List</h4>
      <ul>
        <li v-for="(user, index) in users" :key="index">
          <router-link
            :to="{name: 'user-details',params: { user: user, id: user.id }}"
          >{{user.name}}</router-link>
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <router-view @refreshData="refreshList"></router-view>
    </div>
  </div>
</template>

<script>
import http from "../http-common.js";
export default {
  name: "users",
  data() {
    return {
      users: []
    };
  },
  methods: {
    /* eslint-disable  */
    retrieveUsers() {
      http
        .get("/users")
        .then(response => {
          this.users = response.data;
          console.log(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    refreshList() {
      this.retrieveUsers();
    }
    /* eslint-enable*/
  },
  mounted() {
    this.retrieveUsers();
  }
};
</script>
<style>
.list {
  text-align: left;
  max-width: 450px;
  margin: auto;
}
</style>