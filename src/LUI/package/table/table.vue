<template>
  <div class="l-table">
    <table class="l-table-wrapper">
      <thead class="l-table-head">
        <tr>
          <th
            :class="getAlignClass(col)"
            v-for="(col, index) in columns"
            :key="index + '-' + col.prop"
          >
            {{ col.label }}
          </th>
        </tr>
      </thead>
      <l-table-body :data="data" :columns="columns"></l-table-body>
    </table>
  </div>
</template>
<script>
import { defineComponent, ref, toRefs, computed, h, provide} from 'vue'
import LTableBody from "./tbody"
import { getAlignClass } from "./style"

export default {
  name: 'LTable',
  componentName: 'LTable',
  components: {
    LTableBody
  },
  props:{
    data: {
      type: Array,
      default: ()=> []
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
};
</script>
