<template>
  <div class="home-container">
    <h1>主页</h1>
    <el-image src="  https://codelover.club/files/stutasks/userID_790/currNo_43/FtUHtV3v6IP8RWUrlp4YwdtgUKJc.jpg" alt="" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { ElImage } from 'element-plus';
import { Image } from 'vant';

export default {
  name: 'Home',
  components: {
    ElImage,
    Image
  },
  setup() {
    const isMobile = ref(false);
    const imageComponent = ref(null);

    onMounted(() => {
      checkDeviceType();
      window.addEventListener('resize', checkDeviceType);
    });

    const checkDeviceType = () => {
      isMobile.value = window.innerWidth <= 768;
      imageComponent.value = isMobile.value ? Image : ElImage;
    };

    return {
      isMobile,
      imageComponent
    };
  }
}
</script>

<style scoped>
</style>
