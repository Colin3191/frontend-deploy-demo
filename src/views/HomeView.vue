<script setup lang="ts">
import { onMounted } from 'vue'
import TheWelcome from '../components/TheWelcome.vue'
import axios from 'axios'
onMounted(() => {
  axios
    .get('https://api.juejin.cn/tag_api/v1/query_category_briefs')
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.error(err)
    })
})
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
