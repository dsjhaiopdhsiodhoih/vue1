<template>
  <div>
    <van-search v-model="keyword" placeholder="搜索" />
    <van-dropdown-menu>
      <van-dropdown-item v-model="selectedFilter" title="筛选">
        <van-cell center title="个人任务">
          <template #right-icon>
            <van-switch v-model="filterOptions.groupTask" size="24px" active-color="#12631">个人任务</van-switch>
          </template>
        </van-cell>
        <van-cell center title="小组任务">
          <template #right-icon>
            <van-switch v-model="filterOptions.myFeedback" size="24px" active-color="#07c160">小组任务</van-switch>
          </template>
        </van-cell>
      </van-dropdown-item>
      <van-dropdown-item v-model="selectedTask" title="作业" :options="tasks"/>
      <van-dropdown-item v-model="selectedClass" title="班级" :options="classes"/>
    </van-dropdown-menu>
    <van-cell class="task-cell">
      <div>任务：<span class="task-text">{{ tasks[selectedTask].text }}</span></div>
    </van-cell>
    <van-collapse v-model="activeCollapse">
      <van-collapse-item v-for="(item, index) in filteredData" :key="index" :title="item.name" icon="document">
        <template #value>
          <div :class="['text-green', { 'font-bold': item.scoreStatus !== -1 }]">{{ item.scoreStatus !== -1 ? item.scoreStatus : '未评分' }}</div>
        </template>
        <van-cell title="完成情况：" :class="submitStatusColor(item.submitStatus)">
          <template #value>
            <div>{{ item.submitStatus }}</div>
          </template>
        </van-cell>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const keyword = ref('');
const selectedFilter = ref([]);
const selectedTask = ref(0);
const selectedClass = ref(0);

const filterOptions = ref({
  groupTask: false,
  myFeedback: false
});

const tasks = ref([
  { text: 'Vue3开发初体验', value: 0 },
  { text: 'Vue3组件化开发', value: 1 },
  { text: 'Vue3路由的使用', value: 2 },
  { text: '电影列表项目', value: 3 },
  { text: 'Vue自动化测试', value: 4 },
  { text: '状态管理Pinia', value: 5 },
  { text: '使用UI组件库', value: 6 },
]);

const classes = ref([
  { text: '全部', value: 0 },
  { text: '22软件3班', value: 1 },
  { text: '22软件1班', value: 2 },
  { text: '21软件1班', value: 3 },
  { text: '21软件2班', value: 4 },
]);

const activeCollapse = ref([]);

const data = ref([
  { name: 'man', class_name:'22软件1班' ,task_name:'Vue3开发初体验' ,scoreStatus: 0, completionStatus: '未完成', submitStatus: '未提交' },
  { name: '熊大', class_name:'22软件3班' ,task_name:'Vue3开发初体验' ,scoreStatus: 65, completionStatus: '完成', submitStatus: '已提交' },
  { name: '熊二', class_name:'22软件3班' ,task_name:'Vue3开发初体验' ,scoreStatus: 95, completionStatus: '完成', submitStatus: '已提交' },
  { name: '光头强', class_name:'22软件3班' ,task_name:'Vue3开发初体验' ,scoreStatus: 0, completionStatus: '未完成', submitStatus: '未提交' },
]);

const filteredData = computed(() => {

  return data.value;
});

function submitStatusColor(status : string) {
  return {
    'text-green': status === '已提交',
    'text-red': status === '未提交'
  };
}
</script>

<style scoped>
.task-cell {
  display: flex;
  flex-wrap: nowrap;
  color: red;
  font-weight: 800;
}

.task-text {
  margin-left: 5px;
}

.font-bold {
  font-weight: bold;
}
</style>
