<template>
  <div id="app">
    <div class="navbar">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/todolist" class="nav-link">todoList</router-link>
      <router-link to="/profile" class="nav-link">Profile</router-link>
      <router-link to="/achievement" class="nav-link">Achievement</router-link>
      <router-link to="/Course" class="nav-link">Course</router-link>
    </div>
    <router-view></router-view>
    
    <template v-if="!isMobile">
      <el-input size="large" v-model="newTodo" @input="updateNewTodo"></el-input>
    </template>
  </div>
</template>

<script>
import { useAuthStore } from './store'; 
import Login from './components/login.vue';
import { ref, onBeforeUnmount } from 'vue'; 

export default {
  name: "App",
  setup() {
    const authStore = useAuthStore(); 
    const newTodo = ref(''); 
    const isMobile = ref(false);

    const checkDevice = () => {
      const userAgent = navigator.userAgent;
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      isMobile.value = mobileRegex.test(userAgent);
    };

    const updateNewTodo = (value) => {
      newTodo.value = value;
    };

    window.addEventListener('resize', checkDevice);
    onBeforeUnmount(() => { 
      window.removeEventListener('resize', checkDevice);
    });

    checkDevice();

    return {
      authStore, 
      newTodo,
      isMobile,
      updateNewTodo,
    };
  },
  components: {
    Login,
  },
};
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
