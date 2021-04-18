<template>
  <router-view />
</template>

<script>
import { useElementUI } from '@/plugins/useElementUI'
// 在这里可以进行一些全局组件的注册逻辑
export default {
  setup() {
    const app = window.__VUE_APP__
    useElementUI(app)
  },
}
</script>
