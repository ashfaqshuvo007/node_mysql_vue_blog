<template>
  <div id="app" class="container-fluid">
    <div class="site-info">
      <h1>Ashfaq's Blog</h1>
      <h3>Vue Nodejs Example</h3>
    </div>
    <nav id="nav">
      <router-link to="/">Users</router-link>|
      <router-link to="/addUser">Add User</router-link>|
      <router-link to="/searchUser">Search User</router-link>
    </nav>
    <br />
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.site-info {
  color: #42b983;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
