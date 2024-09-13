<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div>
    <h2>{{ message }}</h2>
    <button @click="callServerlessFunction">调用 Serverless 函数</button>
    <p v-if="result">{{ result }}</p>
    重新再来一次
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('欢迎使用 Vue Serverless 项目')
const result = ref('')

const callServerlessFunction = async () => {
  try {
    const response = await fetch('/.netlify/functions/hello')
    const data = await response.json()
    result.value = data.message
  } catch (error) {
    console.error('调用 serverless 函数出错:', error)
    result.value = '调用失败，请查看控制台'
  }
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
