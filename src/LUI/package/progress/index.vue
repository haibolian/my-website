<template>
  <div :class="['l-progress', `l-progress-${status}`]">
    <div 
      :class="['l-progress_bar', 'l-progress_top', `l-progress-${status}_top`]"
      :style="{ width: progress + '%' }"
    />

    <div 
      :class="['l-progress_bar', 'l-progress_bottom', `l-progress-${status}_bottom`]"
      :style="{ width: strokeWidth + 'px' }"
    />
  </div>

</template>

<script>
import { defineComponent, onBeforeMount, onMounted, ref, computed } from 'vue'
export default defineComponent({
  name:'LProgress',
  components:{},
  props:{
    percentage: {
      type: Number,
      default: 50
    },
    status: {
      type: String,
      default: 'primary'
    },
    strokeWidth: {
      type: [Number, String],
      default: 300
    }
  },
  setup(props, ctx){
    const progress = computed(()=>{
      let result = Math.ceil((props.percentage / 100) * props.strokeWidth)
      if(typeof result !== 'number'){
        result = 0
      }
      return result
    })

    return { 
      progress
    }

  }
})
</script>