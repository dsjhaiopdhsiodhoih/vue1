<template>
  <div class="login-container">
    <h2>登录 账户22002306密码123456</h2>
    <form @submit.prevent="login" class="login">
      <div class="group">
        <label for="User">用户:</label>
        <input type="text" id="User" v-model="username" class="input" required>
      </div>
      <div class="group">
        <label for="password">密码:</label>
        <input type="password" id="password" v-model="password" class="input" required>
      </div>
      <button type="submit" class="submit-button">登录</button>
    </form>
    <p v-if="loginError" class="error-message">用户名或密码错误。</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useAuthStore } from '../store';

export default defineComponent({
  data() {
    return {
      username: '',
      password: '',
      loginError: false,
      authStore: useAuthStore(), 
    };
  },
  methods: {
    login() {
      const isAuthenticated = this.authStore.login(this.username, this.password);
      if (!isAuthenticated) {
        this.loginError = true;
      } else {
        this.$router.push('/');
      }
    },
  },
});
</script>

<style scoped>
.login-container {
  max-width: 500px;
  margin: 50px auto 0;
  padding: 20px;
  border: 2px solid #007bff; 
  border-radius: 8px;
  background-color: #f5f5f5; 
}

.login {
  margin-bottom: 20px;
}

.group {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

label {
  width: 100px; 
}

.input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.error-message {
  color: red;
}
</style>
