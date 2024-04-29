<template>
  <ul class="todo-list">
    <li v-for="item in todolist" :key="item.id" class="todo-item">
      <div class="todo-content">
        <van-checkbox
          v-if="isMobile"
          v-model="item.isCompleted"
          :label="item.id"
          :disabled="item.isCompleted"
          @change="updateCompletion(item.id, item.isCompleted)"
        >
          {{ item.task }}
        </van-checkbox>
        <el-checkbox
          v-else
          v-model="item.isCompleted"
          :label="item.id"
          :disabled="item.isCompleted"
          @change="updateCompletion(item.id, item.isCompleted)"
        >
          {{ item.task }}
        </el-checkbox>
      </div>
      <span v-if="!item.isCompleted" class="delete-btn" @click="deleteItem(item.id)">
        删除
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    todolist: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      isMobile: false
    };
  },
  methods: {
    deleteItem(id) {
      const index = this.todolist.findIndex(item => item.id === id);
      if (index !== -1) {
        // Remove the item from the todolist array
        this.todolist.splice(index, 1);
      }
    },
    updateCompletion(id, isCompleted) {
      // Implement your method here
    }
  },
  mounted() {
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    this.isMobile = mobileRegex.test(navigator.userAgent);
  }
};
</script>

<style scoped>
.todo-list {
  list-style-type: none;
  padding-left: 0;
  width: 100%;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.todo-content {
  display: flex;
  align-items: center;
}

.delete-btn {
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
}
</style>
