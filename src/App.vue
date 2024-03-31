<template>
  <div id="app" class="app-background">
    <h1>Todolist</h1>
    <todoInput @addTask="addTask"></todoInput>
    <todoButton @changeActive="changeActive"></todoButton> 
    <todoList :todolist="filteredTodoList" @deleteTask="deleteTask" class="glowing-background"></todoList>
  </div>
</template>

<script>
import todoList from "./components/todoList.vue";
import todoButton from "./components/todoButton.vue";
import todoInput from "./components/todoInput.vue";

export default {
  name: "App",
  data() {
    return {
      todoList: [
        { id: 1, task: '做作业', isCompleted: true },
        { id: 2, task: '出去玩乐', isCompleted: false },
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
.app-background {
  background-color: #bffefc;
}

.glowing-background {
  animation: glow 1s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    background-color: rgba(255, 255, 255, 0.6);
  }
  to {
    background-color: rgba(255, 255, 255, 0.9);
  }
}
</style>
