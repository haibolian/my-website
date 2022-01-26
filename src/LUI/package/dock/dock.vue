<template>
  <teleport to='body'>
    <div class="l-dock">
      <slot></slot>
    </div>
  </teleport>
</template>

<script>
import { defineComponent, onBeforeMount, onMounted, ref } from 'vue'
export default defineComponent({
  name:'LDock',
  componentName: 'LDock',
  emits:['boat-click'],
  components:{},
  props:{
    
  },
  setup(props, ctx){
    
  }
})
</script>