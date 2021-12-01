<template>
  <span class="l-pagination_next" :class="{ 'is-disabled': isDisabled }">
    <i class="l-icon icon-arrow-right"></i>
  </span>
</template>

<script>
import { defineComponent, onBeforeMount, computed, onMounted, ref, inject } from 'vue'
export default defineComponent({
  name:'Next',
  props:{
    currentPage: {
      type: Number
    },
    pageCount: {
      type: Number
    }
  },
  setup(props, ctx){
    const isDisabled = computed(()=>{
      return props.currentPage >= props.pageCount
    })

    return {
      isDisabled
    }
  }
})
</script>