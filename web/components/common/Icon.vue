<template>
  <span class="icon-wrapper" :style="{ ...style }">
    <svg class="icon">
      <use :href="svgHref"></use>
    </svg>
  </span>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue'
export default defineComponent({
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true,
    },
    style: {
      type: Object,
      default: () => ({}),
    },
    prefix: {
      type: String,
      default: 'paixin-',
    },
  },
  setup(props, ctx) {
    const svgHref = computed(() => `#${props.prefix}${props.name}`)
    return { svgHref }
  },
})
</script>

<style lang="scss" scoped>
.icon-wrapper {
  display: inline-block;
  .icon {
    width: 100%;
    height: 100%;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
}
</style>
