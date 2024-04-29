<template>
  <div class="profile-container">
    <h1>个人简介</h1>
    <div class="info">
      <template v-if="!isMobile">
        <el-divider></el-divider>
        <el-row class="pc-row">
          <el-col :span="8"><strong>姓名:</strong></el-col>
          <el-col :span="16">hwj</el-col>
        </el-row>
        <el-row class="pc-row">
          <el-col :span="8"><strong>班级:</strong></el-col>
          <el-col :span="16">22软件3</el-col>
        </el-row>
        <el-row class="pc-row">
          <el-col :span="8"><strong>邮箱:</strong></el-col>
          <el-col :span="16">123456789@qq.com</el-col>
        </el-row>
        <el-row class="pc-row">
          <el-col :span="8"><strong>电话号:</strong></el-col>
          <el-col :span="16">1234567879</el-col>
        </el-row>
      </template>
      <template v-else>
        <van-divider></van-divider>
        <van-cell-group class="mobile-info">
          <van-cell title="姓名" value="hwj"></van-cell>
          <van-cell title="班级" value="22软件3"></van-cell>
          <van-cell title="邮箱" value="123456789@qq.com"></van-cell>
          <van-cell title="电话号" value="1234567879"></van-cell>
        </van-cell-group>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      isMobile: false,
    };
  },
  created() {
    this.checkDevice();
  },
  methods: {
    checkDevice() {
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      this.isMobile = mobileRegex.test(navigator.userAgent);
    }
  }
};
</script>

<style scoped>
.profile-container {
  border: 1px solid black;
  padding: 10px;
  width: 80%;
  margin: 0 auto;
}

.pc-row {
  margin-bottom: 10px;
  padding: 5px; 
}

.pc-row strong {
  color: black;
}

.info {
  text-align: center;
}

.mobile .info > *:not(.mobile-info) {
  display: none;
}

.not-mobile .mobile-info {
  display: none;
}
</style>
