<template>
  <ul class="l-pagination_pager">
    <li 
      class="pager-number pager-btn" 
      :class="{ 'is-current_page': currentPage === 1 }" 
      v-if="pageCount > 0"
      @click="clickPage(1)"
    >
      1
    </li>

    <li
      class="pager-prev pager-btn"
      :class="['l-icon', isHoverOnPrev ? 'icon-arrow-double-left' : 'icon-elipsis']"
      @mouseover="disabled ? null : isHoverOnPrev = true"
      @mouseleave="disabled ? null : isHoverOnPrev = false"
      v-if="showPrevMore"
      @click="clickPrevMore" 
    >
    </li>

    <li
      class="pager-number pager-btn"
      :class="{ 'is-current_page': currentPage === page }"
      v-for="page in pages" 
      :key="page"
      @click="clickPage(page)"
    >
      {{ page }}
    </li>
      
    <li
      class="pager-next pager-btn"
      :class="['l-icon', isHoverOnNext ? ' icon-arrow-double-right' : 'icon-elipsis']"
      @mouseover="disabled ? null : isHoverOnNext = true"
      @mouseleave="idisabled ? null : sHoverOnNext = false"
      v-if="showNextMore" 
      @click="clickNextMore"
    >   
    </li>

    <li 
      class="pager-number pager-btn"  
      :class="{ 'is-current_page': currentPage === pageCount }" 
      v-if="pageCount > 1" 
      @click="clickPage(pageCount)">
      {{ pageCount }}
    </li>
  </ul>
</template>

<script>
import { 
  defineComponent,
  onBeforeMount,
  onMounted,
  ref,
  inject,
  computed
} from 'vue'
export default defineComponent({
  name:'Pager',
  components:{},
  emits:['update:currentPage'],
  props:{
    size: {
      type: Number
    },
    currentPage: {
      type: Number,
    },
    pageCount: {
      type: Number
    },
    maxShowCount: {
      type: Number
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  setup(props, ctx){
    const showPrevMore = ref(false)
    const showNextMore = ref(false)

    function generatePage(endNum, startNum = 2) { 
      const arr = []
      for (let index = startNum; index <= endNum; index++) {
        arr.push(index)
      }
      return arr
    }
    const pages = computed(()=>{
      const { currentPage, maxShowCount, pageCount } = props
      const halfMiddlePage = (maxShowCount - 2 - 1) / 2
      showPrevMore.value = maxShowCount >= pageCount ? false :currentPage - halfMiddlePage > 2
      showNextMore.value = maxShowCount >= pageCount ? false : pageCount - (currentPage + halfMiddlePage) >= 2
      let arr = []
      if(!showPrevMore.value && showNextMore.value) {
        arr = generatePage(maxShowCount - 1)
      }
      if(showPrevMore.value && showNextMore.value) {
        arr = generatePage(currentPage + halfMiddlePage, currentPage - halfMiddlePage)
      }
      if(showPrevMore.value && !showNextMore.value) {
        arr = generatePage(pageCount - 1, pageCount - maxShowCount + 2)
      }
      if(!showPrevMore.value && !showNextMore.value) {
        arr = generatePage(pageCount -1 ,2)
      }
      return arr
    })


    //emit event
    const rootEmitPageChange = inject('changePage')
    const emitPageChange = (page)=> {
      ctx.emit('update:currentPage', page)
      rootEmitPageChange && rootEmitPageChange(page)
    }

    const clickPage = page=>{
      const { disabled, currentPage } = props
      if(disabled || page === currentPage) return
      emitPageChange(page)
    }
    const clickPrevMore = ()=>{
      const { currentPage, maxShowCount, pageCount, disabled } = props
      if(disabled) return
      let page = currentPage - (maxShowCount - 2)
      if(page < 1) page = 1
      emitPageChange(page)
    }
    const clickNextMore = ()=>{
      const { currentPage, maxShowCount, pageCount, disabled } = props
      if(disabled) return
      let page = currentPage + (maxShowCount - 2)
      if(page > pageCount) page = pageCount
      emitPageChange(page)
    }

    return {
      pages,
      showPrevMore,
      showNextMore,
      clickPage,
      clickPrevMore,
      clickNextMore,
      isHoverOnPrev: ref(false),
      isHoverOnNext: ref(false),
    }
  }
})
</script>
