<template>
  <span class="l-pagination_total">
    共 {{ total }} 条
  </span>
</template>

<script>
import { defineComponent, onBeforeMount, onMounted, ref } from 'vue'
export default defineComponent({
  name:'Total',
  components:{},
  props:{
    total: {
      type: Number
    }
  },
  setup(props, ctx){
    
  }
})
</script>

<style lang='scss' scoped>

</style>