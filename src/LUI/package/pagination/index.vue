<script>
import { defineComponent, ref, toRefs, computed, h, provide} from 'vue'
import { isOddNumber } from  '../../src/utils/math'
import Total from './total.vue'
import Sizes from './sizes.vue'
import Prev from './prev.vue'
import Pager from './pager.vue'
import Next from './next.vue'
import Jumper from './jumper.vue'
export default defineComponent({
  name: 'LPagination',
  componentName: 'LPagination',
  components:{
    Total,
    Sizes,
    Prev,
    Pager,
    Next,
    Jumper
  },
  props:{
    total: {
      type: Number
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default(){
        return [10, 20, 30, 40]
      }
    },
    currentPage: {
      type: Number,
      default: 1
    },
    pageCount: {
      type: Number
    },
    maxShowCount: {
      type: Number,
      default: 7,
      validator(val){
        return val >= 5 && val <= 21 && isOddNumber(val)
      }
    },
    layout: {
      type: String,
      default: 'prev, pager, next, jumper'
    }
  },

  setup(props, { emit }){
    
    // define internal-currentPage
    const { currentPage, total, pageSize, pageCount }  = props
    const internalCurrentPage = ref(currentPage) 
    const internalPageCount = ref(total ? Math.ceil(total / pageSize) : (pageCount ?? 0))

    // provide - changePageSize
    const changePageSize = (val)=>{
      emit('size-change', val)
      emit('update:pageSize', val)
    }
    // provide - changeCurrentPage
    const changePage = (val)=>{
      emit('page-change', val)
      emit('update:currentPage', val)
    }

    provide('changePageSize', changePageSize)
    provide('changePage', changePage)
    provide('hasTotal', props.hasOwnProperty('total'))
    provide('hasPageCount', props.hasOwnProperty('pageCount'))

    return {
      internalCurrentPage,
      internalPageCount
    }
  },

  render(){
    const components = this.layout.split(',').map(c => c.trim())
    const childrenNodes = []
    const rightWrapperChildrenNodes = []
    const TEMPLATE_MAP = {
      total: h(Total, {
        total:  this.total || 0
      }),
      sizes: h(Sizes,{
        pageSize: this.pageSize,
        pageSizes: this.pageSizes
      }),
      pager: h(Pager,{
        currentPage: this.internalCurrentPage,
        'onUpdate:currentPage': val => this.internalCurrentPage = val,
        size: this.pageSize,
        pageCount: this.internalPageCount,
        maxShowCount: this.maxShowCount,
      }),
      prev: h(Prev),
      next: h(Next),
      jumper: h(Jumper),
      slot: this.$slots?.default?.() ?? null
    }

    let haveRightWrapper = false

    components.forEach(c => {
      if( c === '->') {
        haveRightWrapper = true
      }
      if(haveRightWrapper) {
        rightWrapperChildrenNodes.push(TEMPLATE_MAP[c])
      }else{
        childrenNodes.push(TEMPLATE_MAP[c])
      }
    });
    const rightWrapperNode = h('span', { class: 'l-pagination_rightWapper' }, rightWrapperChildrenNodes)
    return h('div', { class: 'l-pagination' }, [...childrenNodes, rightWrapperNode])
  }


  
})
</script>
