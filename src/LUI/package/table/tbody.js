import { defineComponent, h, getCurrentInstance, watch, ref, } from "vue"
import { getCellClass, getValidHeight } from "./style"

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

    // 观察data变化
    watch(props.data, (newData)=>{
      handleCurrentRow(newData)
    })
    const handleCurrentRow = (newData) => {
      if(!currentRow.value) return
      if(!newData.includes(currentRow.value)) currentRow.value = null
    }

    // 当前行变化
    watch(currentRow, (newRow, oldRow)=>{
      instance?.emit('currentRow-change', newRow)
    })

    // 单击事件
    const rowClick = function(row, col){
      return (e)=> {
        currentRow.value = row
        instance?.emit('row-click', row, col, e)
      }
    }
    // 双击事件
    const dbRowClick = (row, col) => {
      return (e)=> {
        instance?.emit('row-dblclick', row, col, e)
      }
    }

    const drawRow = (row, rowIndex, col, colIndex) => {
      if(col.slots && col.slots.default) {
        return col.slots.default({ row, rowIndex })
      }
      if(col.type == 'index') {
        return rowIndex + 1
      }
      if(col.type == 'selection') {
        
      }
      return row[col.prop]
      
    }
    return {
      rowClick,
      dbRowClick,
      currentRow,
      drawRow
    }
  },
  render(){
    const tds = (row, $index)=> {
      return this.columns.map((col, colIndex) => h(
        'td',
        {
          class: getCellClass(col, colIndex),
          onClick: this.rowClick(row, col),
          onDblclick: this.dbRowClick(row, col)
        },
        this.drawRow(row, $index, col, colIndex)
      ))}

    const trs = this.data.map((row, rowIndex) => {
      const { highlightCurrentRow, bodyRowHeight } = this.$parent
      return h(
        'tr',
        {
          class: ['l-table-body-tr', highlightCurrentRow && row == this.currentRow ? 'is-current' : ''],
          style: {
            height: getValidHeight(bodyRowHeight)
          }
        }, 
        tds(row, rowIndex))
    })

    return (
      <table class="l-table-body__table">
        <colgroup>
          { h( 'col') }
        </colgroup>
        <tbody class="l-table-body">
          { trs }
        </tbody>
      </table>
    )
  }

})