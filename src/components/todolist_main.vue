<template>
  <div class="back">
    <Login v-if="!authStore.isAuthenticated" />
    <todoInput @addTask="addTask"></todoInput>
    <todoButton @changeActive="changeActive"></todoButton> 
    <todoList :todolist="filteredTodoList" @deleteTask="deleteTask" class="glowing-background"></todoList>
  </div>
    
  </template>
  
  <script>

import todoList from "./todoList.vue";
import todoButton from "./todoButton.vue";
import todoInput from "./todoInput.vue";
import Login from "./login.vue";
import { useAuthStore } from '../store'; 

export default {
  name: "App",
  setup() {
    const authStore = useAuthStore(); 
    return {
      authStore, 
    };
  },
  data() {
    return {
      todoList: [
      ],
      active: 0,
    };
    
  },
  computed: {
    filteredTodoList() {
      if (this.active === 0) {
        return this.todoList;
      } else if (this.active === 1) {
        return this.todoList.filter(item => item.isCompleted);  
      } else {
        return this.todoList.filter(item => !item.isCompleted);
      }
    },
  },
  methods: {
    changeActive(active) {
      this.active = active;
    },
    addTask(taskname) {
      this.todoList.push({
        id: this.todoList.length + 1,
        task: taskname,
        isCompleted: false
      });
    },
    deleteTask(taskId) {
      this.todoList = this.todoList.filter(task => task.id !== taskId);
    },
  },
  components: {
    todoList,
    todoButton,
    todoInput,
  },
};
</script>
  
<style>
.back{
  padding-top: 50px;
  width: 100%;
  height: 800px;
  background: url("./11.jpg");
  background-size:cover;
}

.app-background {
  background-color: #bffefc;
}

.glowing-background {
  animation: glow 1s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    background-color: rgba(255, 255, 255, 0.5);
  }
  to {
    background-color: rgba(255, 255, 255, 0.5);
     background-color: rgba(255, 255, 255, 0.9); 
  }
}
</style>
  
  
