<template>
  <span class="l-pagination_prev" :class="{ 'is-disabled': isDisabled }">
    <i class="l-icon icon-arrow-right"></i>
  </span>
</template>

<script>
import { defineComponent, computed, ref, inject } from 'vue'
export default defineComponent({
  name:'Prev',
  props:{
    currentPage: {
      type: Number
    }
  },
  setup(props, { emit }){
    const isDisabled = computed(()=>{
      return props.currentPage <= 1
    })

    return {
      isDisabled
    }
  }
})
</script>