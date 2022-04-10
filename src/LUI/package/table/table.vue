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
    virtualList:{
      type: Boolean,
      default: false
    },
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
    const slots = ctx.slots.default?.()?.filter(col => col.type?.componentName == 'LTableColumn')
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

    // 返回显示的数据
    let startIndex = ref(0)
    const showLength = computed(()=>{
      return 7
    })
    const endIndex = computed(()=>{
      let index = startIndex.value + showLength.value
      if( index > props.data.length ){
        index = props.data.length
      }
      return index
    })
    const blankFill = computed(()=>{
      return {
        'box-sizing': 'content-box',
        'padding-top': startIndex.value * 40 + 'px',
        'padding-bottom': (props.data.length - endIndex.value) * 40 + 'px'
      }
    })
    const scrollWrapper = function(e){
      const { scrollTop } = e.target
      startIndex.value = Math.floor(scrollTop / 40)
      console.log('startIndex.value',startIndex.value);
      console.log('endIndex.value',endIndex.value);
    }
    const showData = computed(()=>{
      const { virtualList, data } = props
      if(virtualList){
        // debugger
        return data.slice(startIndex.value, endIndex.value)
      }else{
        return data
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
      bodyWrapperStyle,
      showData,
      scrollWrapper,
      blankFill
    }
  },
  render(){
    const { border, isFixedHaed, tableStyle, columns, showData, bodyWrapperStyle, blankFill } = this
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
        <div 
          class="l-table-body__wrapper" 
          ref="bodyWrapper"
          style={bodyWrapperStyle}
          onScroll={ this.scrollWrapper }>
          <div style={ blankFill }>
            <l-table-body data={showData} columns={columns}></l-table-body>
          </div>
        </div>
      </div>
    )
  }
});
</script>
