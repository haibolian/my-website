<script>
import { defineComponent, ref, toRefs, computed, h, provide} from 'vue'
import LTableHead from './thead'
import LTableBody from "./tbody"
import { getCellClass, getValidHeight } from "./style"

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
    height: {
      type: [String, Number]      
    },
    headRowHeight: {
      type: [String, Number]
    },
    bodyRowHeight: {
      type: [String, Number]
    }
    
  },
  setup(props, ctx){
    const slots = ctx.slots.default?.()
    const columns = slots ? slots.map(slot => Object.assign({}, slot.props, { slots: slot.children })) : []
    const isFixedHaed = computed(()=>{
      return !!getValidHeight(props.height)
    })

    const tableStyle = computed(()=>{
      return {
        height: getValidHeight(props.height) 
      }
    })

    // refs
    const table = ref(null)
    const bodyWrapper = ref(null)
    const headerWrapper = ref(null)

    const bodyWrapperStyle = computed(() => {
      let height = ''
      if(table.value && headerWrapper.value) {
        height = table.value.offsetHeight - headerWrapper.value.offsetHeight + 'px'
      }
      return {
        height
      }
    })

    return {
      columns,
      getCellClass,
      tableStyle,
      isFixedHaed,
      table,
      bodyWrapper,
      headerWrapper,
      bodyWrapperStyle
    }
  },
  render(){
    const { border, isFixedHaed, tableStyle, columns, data, bodyWrapperStyle } = this
    return (
      <div 
        class={[
          'l-table', 
          border && 'l-table-border', 
          isFixedHaed && 'l-table-fix-head'
        ]}
        style={tableStyle}
        ref="table"
      >
        <div class="l-table-head__wrapper" ref="headerWrapper">
          <l-table-head columns={columns}></l-table-head>
        </div>
        <div class="l-table-body__wrapper" ref="bodyWrapper" style={bodyWrapperStyle}>
          <l-table-body data={data} columns={columns}></l-table-body>
        </div>
      </div>
    )
  }
});
</script>
