<template>
  <span class="l-pagination_prev l-icon icon-arrow-right pager-btn" :class="{ 'is-disabled': disabled }">
  </span>
</template>

<script>
import { defineComponent, computed, ref, inject } from 'vue'
export default defineComponent({
  name:'Prev',
  props:{
    disabled: {
      type: Boolean
    }
  },
  setup(props, { emit }){
    
  }
})
</script>