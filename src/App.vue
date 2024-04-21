<template>
  <div id="app">
    <div class="navbar">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/todolist" class="nav-link">todoList</router-link>
      <router-link to="/profile" class="nav-link">Profile</router-link>
    </div>
    <router-view></router-view>
    
  </div>
</template>

<script>
import { useAuthStore } from './store'; 
import Login from './components/login.vue';

export default {
  name: "App",
  setup() {
    const authStore = useAuthStore(); 
    return {
      authStore, 
    };
  },
  components: {
    Login, 
  },
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-around;
  background-color: #f5f5f5;
  padding: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.nav-link:hover {
  color: #007bff;
}

.router-view {
  margin-top: 20px;
}

</style>
