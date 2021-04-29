<template>
  <div class="random-dog">
    <div class="show-dog">
      <icon name="toggles" class="show-dog__costom-icon" />
      <img class="show-dog__photo" :src="imgUrl" />
      <ElButton
        :loading="isRandomLoading"
        class="show-dog__random-btn"
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
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'

import Icon from '@/components/common/Icon.vue'
import { DogApiUrl } from '@/api'

export default defineComponent({
  name: 'RandomDog',
  components: { Icon },
  setup(props, ctx) {
    const router = useRouter()
    const store = useStore()
    const isRandomLoading = computed(() =>
      store.getters['global/isOpLoading'](DogApiUrl.RANDOM_DOG),
    )
    const imgUrl = computed(() => store.state.dog.imgUrl)

    const changeDog = async () => {
      await store.dispatch('dog/FETCH_RANDOM_DOG')
    }
    const backHome = () => {
      router.push('/')
    }
    return { imgUrl, changeDog, backHome, isRandomLoading }
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
    @include e(costom-icon) {
      width: 60px;
      height: 60px;
      color: red;
    }
  }
}
</style>
