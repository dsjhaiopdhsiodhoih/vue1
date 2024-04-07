<template>
  <ul class="todo-list">
    <li v-for="item in todolist" :key="item.id" class="todo-item">
      <div class="todo-content">
        <input
          v-if="!item.isCompleted"
          type="checkbox"
          class="todo-checkbox"
          :id="'todo-' + item.id"
          v-model="item.isCompleted"
          @change="updateCompletion(item.id, item.isCompleted)"
        />
        <input
          v-else
          type="checkbox"
          class="todo-checkbox"
          :id="'todo-' + item.id"
          v-model="item.isCompleted"
          @change="updateCompletion(item.id, item.isCompleted)"
          disabled
        />
        <label :for="'todo-' + item.id" class="todo-label" :class="{ 'completed': item.isCompleted }">{{ item.task }}</label>
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
  methods: {
    deleteItem(id) {
      const index = this.todolist.findIndex(item => item.id === id);
      if (index !== -1) {
        // Remove the item from the todolist array
        this.todolist.splice(index, 1);
      }
    },
    updateCompletion(id, isCompleted) {

    }
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

.todo-checkbox {
  margin-right: 10px;
}

.todo-label {
  cursor: pointer;
}

.delete-btn {
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
}

.badge {
  padding: 5px 10px;
  border-radius: 20px;
}

.badge-completed {
  background-color: #28a745;
  color: #fff;
}

.badge-incomplete {
  background-color: #dc3545;
  color: #fff;
}
</style>
