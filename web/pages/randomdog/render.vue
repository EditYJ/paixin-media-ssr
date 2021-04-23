<template>
  <div class="random-dog">
    <div class="show-dog">
      <img class="show-dog__photo" :src="imgUrl" />
      <ElButton
        class="show-dog__random-btn"
        :loading="isChangeDogLoading"
        icon="el-icon-search"
        @click="changeDog"
      >
        换一张
      </ElButton>
      <ElButton class="show-dog__random-btn" @click="backHome">回到主页</ElButton>
    </div>
  </div>
</template>

<script lang='ts'>
import { useStore } from 'vuex'
import { computed, defineComponent } from 'vue'
import { GlobalStoreProps } from '@/store'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'RandomDog',
  setup(props, ctx) {
    const router = useRouter()
    const store = useStore<GlobalStoreProps>()
    const imgUrl = computed(() => store.state.dog.imgUrl)
    const isChangeDogLoading = computed(() => store.getters['global/isOpLoading']('SET_IMG_URL'))

    const changeDog = () => {
      store.dispatch('dog/fetchRandomDog')
    }
    const backHome = () => {
      router.push('/')
    }
    return { imgUrl, changeDog, backHome, isChangeDogLoading }
  },
})
</script>

<style lang="scss" scoped>
.random-dog {
  @include box-center;
  @include b(show-dog) {
    width: 300px;
    height: 250px;
    @include e(photo) {
      border: 1px solid black;
    }
    @include e(random-btn) {
      margin-top: 16px;
    }
  }
}
</style>
