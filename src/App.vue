<template>
<div>
  <VideoHome />
</div>
</template>

<script>
import { ref, onMounted } from 'vue'
import ReactSpinner from './components/ReactSpinner.vue'
import VideoHome from './views/VideoHome.vue';

export default {
  components: {
    ReactSpinner,
    VideoHome
  },
  setup() {
    const message = ref('')

    onMounted(() => {
      // 使用静态数据替代 API 调用
      message.value = '你好，世界！'
    })

    return { message }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
