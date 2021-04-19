
<template>
  <div>
    <Search />
    <template v-if="indexData">
      <el-button @click="testClick"> 我是element按钮index </el-button>
      <h1>hahaha</h1>
      <img src="/images/expired-coupon-dialog.png" alt="" />
      <pre>{{ indexData }}</pre>
    </template>
    <template v-else>
      <img
        src="https://gw.alicdn.com/tfs/TB1v.zIE7T2gK0jSZPcXXcKkpXa-128-128.gif"
        class="loading"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { GlobalStore } from '@/store/index'
import service from '@/utils/service'

import Search from '@/components/search/index.vue'

export default defineComponent({
  components: {
    Search,
  },
  setup() {
    const store = useStore<GlobalStore>()
    const indexData = computed(() => store.state.indexStore.components)

    const testClick = () => {
      service.get('/sss/s')
    }

    return { indexData, testClick }
  },
})
</script>

<style>
</style>
