<template>
  <div id="app" class="app-background">
    <router-link to="/" class="rt">Home</router-link>
    <router-link to="/todolist" class="rt">todoList</router-link>
    <router-link to="/profile" class="rt">Profile</router-link>
    
    
  </div>
  <router-view></router-view>
</template>

<script>

export default {
  name: "App",
}
</script>

<style scoped>
.rt
{
  width: 20px;
  margin-left: 20px;
}
.app-background
{
  display: inline;
  width: 800px;
  height: 30px;
  justify-content: center;
}
</style>
