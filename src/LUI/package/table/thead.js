import { defineComponent, h, ref } from "vue";
import { getCellClass, getValidHeight } from "./style"

export default defineComponent({
  name: 'LTableHead',
  componentName: 'LTableHead',
  props: {
    columns: {
      type: Array,
      default: () => []
    },
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
    const trs = h('tr', trAttrs, this.columns.map((col, index) => {
      return h('th', { class: getCellClass(col, index)}, col.label)
    }))
    return (
      <table class="l-table-head__table">
        <colgroup>
          { h('col') }
        </colgroup>
        <thead class="l-table-head">
          { trs }
        </thead>
      </table>
    )
  }
})