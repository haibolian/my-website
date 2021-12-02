<template>
  <span class="l-pagination_jumper">
    前往  <l-input :disabled="disabled" v-model="targetPage" @change="handleChange"></l-input>  页
  </span>
</template>

<script>
import { defineComponent, inject, ref } from 'vue'
export default defineComponent({
  name:'Jumper',
  emits: ['update:currentPage'],
  props:{
    currentPage: {
      type: Number
    },
    pageCount: {
      type: Number
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, ctx){
    const targetPage = ref(null)
    const changePage = inject('changePage')

    const strToNum = (str)=>{
      
    }

    const handleChange = (ev)=>{
      let page = Number(targetPage.value)
      if(targetPage.value === '' || isNaN(page)) {
        targetPage.value = ''
        return
      }
      
      const { currentPage, pageCount } = props
      if(currentPage ===  page) return
      
      if(page < 1) page = targetPage.value = 1
      if(page > pageCount) page = targetPage.value = pageCount

      ctx.emit('update:currentPage', page)
      changePage && changePage(page)
      
    }
    return {
      targetPage,
      handleChange
    }
  }
})
</script>