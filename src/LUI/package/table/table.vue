<template>
  <div :class="['l-table', border && 'l-table-border']">
    <table class="l-table-wrapper">
      <l-table-head :columns="columns"></l-table-head>
      <l-table-body :data="data" :columns="columns"></l-table-body>
    </table>
  </div>
</template>
<script>
import { defineComponent, ref, toRefs, computed, h, provide} from 'vue'
import LTableHead from './thead'
import LTableBody from "./tbody"
import { getAlignClass } from "./style"

export default defineComponent({
  name: 'LTable',
  componentName: 'LTable',
  components: {
    LTableBody,
    LTableHead
  },
  props:{
    data: {
      type: Array,
      default: ()=> []
    },
    highlightCurrentRow:{
      type: Boolean
    },
    border: {
      type: Boolean
    },
    headRowHeight: {
      type: [String, Number],
      default: '40px'
    },
    bodyRowHeight: {
      type: [String, Number],
      default: '40px'
    }
    
  },
  setup(props, ctx){
    const slots = ctx.slots.default?.()
    const columns = slots ? slots.map(slot => Object.assign({}, slot.props, { slots: slot.children })) : []
    return {
      columns,
      getAlignClass
    }

  }
});
</script>
