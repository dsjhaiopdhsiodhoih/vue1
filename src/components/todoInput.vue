<template>
  <div class="container">
    <div class="input-container">
      <input
        v-if="isDesktop"
        type="text"
        class="form-control"
        placeholder="请输入任务"
        aria-label="New Task"
        v-model="taskname"
      />
      <el-input
        v-else
        size="large"
        placeholder="请输入任务"
        v-model="taskname"
      ></el-input>
      <button class="btn btn-primary" @click="onAdd">添加任务</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskname: "",
      isDesktop: false,
    };
  },
  emits: ["addTask"],
  mounted() {
    this.isDesktop = this.isDeviceDesktop();
    window.addEventListener("resize", this.onResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onAdd() {
      if (this.taskname.trim() !== "") {
        this.$emit("addTask", this.taskname);
        this.taskname = "";
      }
    },
    onResize() {
      this.isDesktop = this.isDeviceDesktop();
    },
    isDeviceDesktop() {
      return window.innerWidth > 768; // Adjust this threshold as needed
    },
  },
};
</script>

<style scoped>
.container {
  width: 500px;
  margin: 20px auto;
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
