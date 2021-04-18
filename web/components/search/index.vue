<template>
  <div class="searchContainer">
    <input
      :value="searchText"
      type="text"
      class="input"
      placeholder="该搜索框内容会在所有页面共享"
      @input="setText"
    />
    <img
      src="https://img.alicdn.com/tfs/TB15zSoX21TBuNjy0FjXXajyXXa-48-48.png"
      alt=""
      class="searchImg"
      @click="toSearch"
    />
    <el-button>我是element按钮</el-button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { GlobalStore } from '@/store'

export default defineComponent({
  setup() {
    const store = useStore<GlobalStore>()
    const searchText = computed(() => store.state.searchStore.searchText)

    const setText = (e: InputEvent) => {
      const target = e.target as HTMLInputElement
      store.dispatch('searchStore/setText', {
        payload: {
          text: target.value,
        },
      })
    }
    const toSearch = () => {
      location.href = `https://search.youku.com/search_video?keyword=${searchText.value}`
    }

    return { searchText, setText, toSearch }
  },
})
</script>

<style lang="scss" scoped>
.searchContainer {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  .input {
    width: 80%;
    height: 30px;
    border: 0 solid transparent;
    border-radius: 100px;
    font-family: Microsoft YaHei, SimHei, helvetica, arial, verdana, tahoma, sans-serif;
    font-size: 14px;
    background: rgba(0, 0, 0, 0.06);
    text-indent: 15px;
    outline: none;
    margin: 20px 0px;
  }
  .searchImg {
    width: 20px;
    margin-left: -30px;
  }
}
</style>
