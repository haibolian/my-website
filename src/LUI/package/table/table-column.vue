<template>
  <slot></slot>
</template>
<script>
import { defineComponent, ref, toRefs, computed, h, provide} from 'vue'

export default {
  name: 'LTableColumn',
  componentName: 'LTableColumn',
  props:{
    prop: {
      type: String,
      defualt: ''
    },
    label: {
      type: String,
      default: ''
    },
    align: {
      type: String,
      default: 'left'
    }
  },
  setup(props, ctx){
    
  },
};
</script>