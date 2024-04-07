<template>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button
      type="button"
      class="custom-btn"
      :class="{ 'custom-btn-primary': active === 0, 'custom-btn-secondary': active !== 0 }"
      @click="changeActive(0)"
    >
      <span v-if="active === 0"></span>
      所有任务
    </button>

    <button
      type="button"
      class="custom-btn"
      :class="{ 'custom-btn-success': active === 1, 'custom-btn-secondary': active !== 1 }"
      @click="changeActive(1)"
    >
      <span v-if="active === 1">✔</span>
      已完成
    </button>

    <button
      type="button"
      class="custom-btn"
      :class="{ 'custom-btn-danger': active === 2, 'custom-btn-secondary': active !== 2 }"
      @click="changeActive(2)"
    >
      <span v-if="active === 2">x</span>
      未完成
    </button>
  </div>
</template>

<script>
export default {
name: "TodoButton",
data() {
  return {
    active: 0,
  };
},
emits: ["changeActive"],
methods: {
  changeActive(index) {
    this.active = index;
    this.$emit("changeActive", index);
  },
},
};
</script>

<style scoped>
.btn-group {
width: 500px;
margin: 10px auto;
}

.custom-btn {
transition: background-color 0.3s ease;
}

.custom-btn:hover {
opacity: 0.8;
}

.custom-btn-primary {
background-color: #007bff;
color: #fff;
}

.custom-btn-success {
background-color: #28a745;
color: #fff;
}

.custom-btn-danger {
background-color: #dc3545;
color: #fff;
}

.custom-btn-secondary {
background-color: #6c757d;
color: #fff;
}
</style>
