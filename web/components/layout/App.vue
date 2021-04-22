<template>
  <router-view />
</template>

<script>
import { onMounted } from 'vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useElementUI } from '@/plugins/useElementUI'
// 在这里可以进行一些全局组件的注册逻辑
export default {
  setup() {
    const app = window.__VUE_APP__
    const router = window.__VUE_ROUTER__

    useElementUI(app)

    // eslint-disable-next-line no-undef
    if (__isBrowser__) {
      // 配置路由
      router.beforeEach((to, from, next) => {
        NProgress.start()
        next()
      })
      router.afterEach(() => {
        NProgress.done()
      })
    }

    onMounted(() => {
      document.documentElement.setAttribute('am-theme', 'default')
    })
  },
}
</script>
