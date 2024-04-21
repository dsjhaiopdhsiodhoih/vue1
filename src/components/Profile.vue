<template>
  <div class="profile">
    <h1>个人简介</h1>
    <div class="info">
      <p><strong>姓名:</strong> hwj</p>
      <p><strong>班级:</strong> 22软件3</p>
      <p><strong>邮箱:</strong> 123456789@qq.com</p>
      <p><strong>电话号:</strong> 1234567879</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style scoped>
.profile {
  text-align: center;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  margin: 50px auto 0;
  background-color: #fff;
}

.profile h1 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #000;
}

.info {
  margin-top: 20px;
}

.info p {
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}

.info p:last-child {
  border-bottom: none;
}

.info p strong {
  color: #000;
}

.info p:not(:last-child) {
  margin-bottom: 10px;
}
</style>
