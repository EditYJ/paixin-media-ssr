
<template>
  <div class="home">
    <h1 v-if="isLoading">加载中...</h1>
    <el-button @click="testClick"> 我是element按钮index </el-button>
    <div class="test-block">hahaha</div>
    <img class="test-img" src="/images/expired-coupon-dialog.png" alt="" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: {},
  setup() {
    const store = useStore()
    const router = useRouter()
    const isLoading = computed(() => store.getters['global/isLoading'])

    const testClick = () => {
      router.push('randomdog')
    }

    return { testClick, isLoading }
  },
})
</script>

<style lang="scss" scoped>
.home {
  .test-block {
    font-size: 16px;
    color: $color-primary;
    background-color: gray;
    width: 250px;
    height: 250px;
    @include box-center;
  }
  .test-img {
    width: 400px;
  }
}
</style>
