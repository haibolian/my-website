import { defineComponent, h, ref } from "vue";
import { getAlignClass, getValidHeight } from "./style"

export default defineComponent({
  name: 'LTableHead',
  componentName: 'LTableHead',
  props: {
    columns: {
      type: Array,
      default: () => []
    }
  },
  setup(props, ctx){

  },
  render(){
    const trAttrs = {
      class: 'l-table-head-tr',
      style: { 
        height: getValidHeight(this.$parent.headRowHeight)
      }
    }
    const trs = h('tr', trAttrs, this.columns.map(col => {
      return h('th', { class: getAlignClass(col)}, col.label)
    }))
    return h('thead', { class: 'l-table-head' }, trs)
  }
})