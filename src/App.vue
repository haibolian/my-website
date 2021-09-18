<template>
  <div id="app">
    <waves v-if="showAnimation" class="app-waves"></waves>
    <div v-else class="app-navs">
      <div id="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于</router-link>
      </div>
      <router-view/>
    </div>
    <entry v-if="showAnimation" type='right' @click="handleEntry"/>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  name:'APP',
  components:{
    Waves: defineAsyncComponent(()=>import('@/components/waves/index')),
    Entry: defineAsyncComponent(()=>import('@/components/entry/index'))
  },
  data(){
    return{
      showAnimation:false,
    }
  },
  methods:{
    finishWrite(){ 
      this.showAnimation = false
    },
    handleEntry(){
      this.showAnimation = false
    }
  }
}
</script>

<style lang="scss" scoped>
.app-waves {
  
}
</style>