<template>
  <span :class="classes">
    <slot></slot>
    <i class="l-icon l-icon-close" @click="handleClick"></i>
  </span>
</template>

<script>
import { computed } from 'vue'
export default {
  name:'LTag',
  props:{
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    }
  },
  setup(props,ctx){
    const classes = computed(()=>{
      return ['l-tag', `l-tag-${type}`, size ? `l-tag--${size}`:null]
    })
    const handleClick = ev=>{
      ctx.emit('close',ev)
    }
    return {
      classes,
      handleClick
    }
  }
}
</script>

<style lang="scss" scoped>

</style>