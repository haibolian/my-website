import { defineComponent, h, getCurrentInstance, watch, ref } from "vue"
import { getAlignClass } from "./style"

export default defineComponent({
  name: 'LTableBody',
  componentName: 'LTableBody',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    }
  },
  setup(props, ctx){
    const instance = getCurrentInstance()
    let currentRow = ref(null)

    watch(props.data, (newData)=>{
      handleCurrentRow(newData)
    })
    const handleCurrentRow = (newData) => {
      if(!currentRow.value) return
      if(!newData.includes(currentRow.value)) currentRow.value = null
    }

    watch(currentRow, (newRow, oldRow)=>{
      instance.parent?.emit('currentRow-change', newRow)
    })


    const rowClick = function(row, col){
      return (e)=> {
        currentRow.value = row
        instance.parent?.emit('row-click', row, col, e)
      }
    }

    const dbRowClick = (row, col) => {
      return (e)=> {
        instance.parent?.emit('row-dblclick', row, col, e)
      }
    }
    return {
      rowClick,
      dbRowClick,
      currentRow
    }
  },
  render(){
    const tds = (row, $index)=> {
      return this.columns.map(col => h(
        'td',
        {
          class: getAlignClass(col),
          onClick: this.rowClick(row, col),
          onDblclick: this.dbRowClick(row, col)
        }, 
        col.slots && col.slots.default ? col.slots.default({ row, $index }) : row[col.prop]))
    }

    const trs = this.data.map((row, index) => {
      return h(
        'tr', 
        {
          class: ['l-table-row', row == this.currentRow ? 'is-current' : '']
        }, 
        tds(row, index))
    })

    return h('tbody', { class: 'l-table-body' }, trs)
  }

})