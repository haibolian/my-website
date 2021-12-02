<template>
  <span class="l-pagination_sizes">
    <l-select :disabled="disabled" v-model="size" @change="changePageSize">
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
  emits:['changePageSize'],
  components:{
    
  },
  props:{
    pageSizes: {
      type: Array
    },
    pageSize: {
      type: Number
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, ctx){
    const size = ref(props.pageSize)

    // changePageSize
    // const cps = inject('changePageSize')
    const changePageSize = (s)=>{
      ctx.emit('changePageSize', s)
      // cps && cps(s)
    }
    return {
      size,
      changePageSize
    }
  }
})
</script>
