<script>
import { defineComponent, ref, toRefs, computed, h, provide} from 'vue'
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
      type: Number,
      default: 100
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
    layout: {
      type: String,
      default: 'prev, pager, next, jumper'
    }
  },

  setup(props, { emit }){
    // layout-arr
    const layoutArr = computed(()=>{
      return props.layout.split(',').map(item => item.trim())
    })


    // provide - changePageSize
    const changePageSize = (val)=>{
      emit('changePageSize', val)
      emit('update:pageSize', val)
    }
    provide('changePageSize', changePageSize)


    return {
      layoutArr
    }
  },

  render(){
    const components = this.layout.split(',').map(c => c.trim())
    const childrenNodes = []
    const rightWrapperChildrenNodes = []
    const TEMPLATE_MAP = {
      total: h(Total, {
        total: this.total
      }),
      sizes: h(Sizes,{
        sizes: this.sizes,
        pageSize: this.pageSize,
        pageSizes: this.pageSizes
      }),
      pager: h(Pager,{
        total: this.total,
        size: this.size,
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
