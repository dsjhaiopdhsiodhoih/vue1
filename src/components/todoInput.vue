<template>
    <div class="container">
      <div class="input-container">
        <input
          type="text"
          class="form-control"
          placeholder="请输入任务" 
          aria-label="New Task" 
          v-model="taskname"
        />
        <button class="btn btn-primary" id="addbtn_project" @click="onAdd">添加任务</button>
      </div>
    </div>
  </template>
  
    
  <script>
  export default {
    data() {
      return {
        taskname: ""
      };
    },
    emits: ["addTask"],
    methods: {
      onAdd() {
        if (this.taskname.trim() !== "") {
          this.$emit("addTask", this.taskname);
          this.taskname = "";
        }
      }
    }
  };
  </script>
  
    
    <style scoped>
    .container {
      width: 500px;
      margin: 20px auto;
    }
    
    h2 {
      color: #333;
    }
    
    
    .input-container input {
      flex: 1;
      margin-right: 10px;
    }
    
    .btn-primary {
      background-color: #007bff;
      color: #fff;
      border: none;
      padding: 8px 15px;
      cursor: pointer;
    }
    
    .btn-primary:hover {
      background-color: #0056b3;
    }
    </style>
    