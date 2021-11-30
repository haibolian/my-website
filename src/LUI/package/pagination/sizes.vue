<template>
  <span class="l-pagination_sizes">
    <l-select v-model="size" @change="changePageSize">
      <l-option 
        v-for="s in pageSizes" 
        :key="s"
        :label="s + '条/页'"
        :value="s"
      />
    </l-select>
  </span>
</template>

<script>
import { defineComponent, onBeforeMount, onMounted, ref, inject } from 'vue'
export default defineComponent({
  name:'Sizes',
  components:{
    
  },
  props:{
    pageSizes: {
      type: Array
    },
    pageSize: {
      type: Number
    }
  },
  setup(props, ctx){
    const size = ref(props.pageSize)

    // changePageSize
    const cps = inject('changePageSize')
    const changePageSize = (s)=>{
      cps && cps(s)
    }
    return {
      size,
      changePageSize
    }
  }
})
</script>
