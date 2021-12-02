<template>
  <span class="l-pagination_next l-icon icon-arrow-right pager-btn" :class="{ 'is-disabled': disabled }">
  </span>
</template>

<script>
import { defineComponent, onBeforeMount, computed, onMounted, ref, inject } from 'vue'
export default defineComponent({
  name:'Next',
  props:{
    disabled: {
      type: Boolean
    }
  },
  setup(props, ctx){
    
  }
})
</script>