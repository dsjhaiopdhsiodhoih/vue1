<template>
  <van-search v-model="keyword" placeholder="搜索" />

  <van-dropdown-menu>
    <van-dropdown-item v-model="selectedCourse" title="课程" :options="courses"/>
    <van-dropdown-item v-model="projectType" title="任务" :options="projects"/>
  </van-dropdown-menu>

  <van-row justify="center">
    <van-col style="display: flex;flex-wrap: nowrap;">
      <van-divider dashed:true>{{data[0].name}}</van-divider>
      <van-divider dashed:true>{{data[0].stuId}}</van-divider>
    </van-col>
  </van-row>

  <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">
    任务：{{ courses[selectedCourse].text }}
  </van-notice-bar>

  <van-collapse v-model="activeCollapse" accordion>
    <van-collapse-item v-for="(item, index) in data" :key="index" :title="item.name" icon="chat-o" :v-show="item.course_name === courses[selectedCourse].text">
      <template #title>
        <span class="custom-title">{{ item.task_name }}</span>
      </template>
      <template #value>
        <div class="text-green custom-value">{{ item.scoreStatus != -1 ? item.scoreStatus : '未评分' }}</div>
      </template>
      <van-cell>
        <template #title>
          <span class="custom-title">完成情况：</span>
        </template>
        <template #value>
          <div class="text-green custom-value">{{ item.submitStatus }}</div>
        </template>
      </van-cell>
    </van-collapse-item>
  </van-collapse>
</template>

<script setup lang="ts">
import { onMounted, type Ref, ref, type UnwrapRef} from 'vue';

const keyword = ref('');
const selectedCourse = ref(0);
const projectType = ref(0);

const courses = ref([
  { text: '前端框架应用项目开发', value: 0 },
  { text: '专业技能综合实践（2024春季）', value: 1 },
  { text: '24春季进销存系统设计与实现', value: 2 },
  { text: '后端技术与项目开发', value: 3 },
  { text: '软件测试技术', value: 4 }
]);

const projects = ref([
  { text: '全部', value: 0 },
  { text: '刷题', value: 1 },
  { text: '作品', value: 2 },

]);


const activeCollapse = ref('');

const data = ref([
  { name: '熊二', class_name:'狗熊岭' ,stuId:554544 ,course_name:"前端框架应用项目开发" ,task_name:'使用UI组件库' ,scoreStatus: 65, completionStatus: '已完成', submitStatus: '已提交',teamwork:false,projectType:"work" },
  { name: '熊二', class_name:'狗熊岭' ,stuId:45646 ,course_name:"前端框架应用项目开发" ,task_name:'Vue3开发初体验' ,scoreStatus: 95, completionStatus: '已完成', submitStatus: '已提交',teamwork:false,projectType:"work" },
]);

</script>

<style scoped>
.text-green {
  color: green;
}

.custom-title {
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
}

.custom-value {
  font-family: Arial, sans-serif;
  font-size: 14px;
}
</style>
