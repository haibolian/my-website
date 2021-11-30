<template>
  <ul class="l-pagination_pager">
    <li class="pager-number" v-if="pageCount > 0"
      @click="clickPage(1)"
    >
      1
    </li>

    <li class="pager-prev" v-if="showPrevMore" @click="clickPrevMore">
      {{'<<'}}
    </li>

    <li
      class="pager-number"
      v-for="page in pages" 
      :key="page"
      @click="clickPage(page)"
    >
      {{ page }}
    </li>
    
    <li class="pager-next" v-if="showNextMore" @click="clickNextMore"> {{ '>>' }} </li>

    <li class="pager-number" v-if="pageCount > 1" @click="clickPage(pageCount)">
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
      showPrevMore.value = currentPage - halfMiddlePage > 2
      showNextMore.value = pageCount - (currentPage + halfMiddlePage) >= 2
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
      return arr
    })

    const clickPage = page=>{
      ctx.emit('update:currentPage', page)
    }

    const clickPrevMore = ()=>{
      const { currentPage, maxShowCount, pageCount } = props
      let page = currentPage - (maxShowCount - 2)
      if(page < 1) page = 1
      ctx.emit('update:currentPage', page)
    }
    const clickNextMore = ()=>{
      const { currentPage, maxShowCount, pageCount } = props
      let page = currentPage + (maxShowCount - 2)
      if(page > pageCount) page = pageCount
      ctx.emit('update:currentPage', page)
    }
    return {
      pages,
      showPrevMore,
      showNextMore,
      clickPage,
      clickPrevMore,
      clickNextMore
    }
  }
})
</script>
