<template>
  <div id="app">
    <waves v-if="showAnimation" class="app-waves"></waves>
    <div v-else class="app-navs">
      <div id="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于</router-link>
      </div>
      <l-dock @boat-click="clickBoat" show-hidden>
        <l-dock-boat to="/" title="首页" icon="home"></l-dock-boat>
        <l-dock-boat to="/" title="文件" icon="file-open"></l-dock-boat>
        <l-dock-boat to="/" title="仓库" icon="layers"></l-dock-boat>
        <l-dock-boat to="/" title="通知" icon="notification"></l-dock-boat>
        <l-dock-boat to="/" title="首页" icon="home"></l-dock-boat>
        <l-dock-boat to="/" title="文件" icon="file-open"></l-dock-boat>
        <l-dock-boat to="/" title="仓库" icon="layers"></l-dock-boat>
        <l-dock-boat to="/" title="通知" icon="notification"></l-dock-boat>
        <l-dock-boat to="/" title="首页" icon="home"></l-dock-boat>
        <l-dock-boat to="/" title="文件" icon="file-open"></l-dock-boat>
        <l-dock-boat to="/" title="仓库" icon="layers"></l-dock-boat>
        <l-dock-boat to="/" title="通知" icon="notification"></l-dock-boat>
        <l-dock-boat to="/" title="首页" icon="home"></l-dock-boat>
        <l-dock-boat to="/" title="文件" icon="file-open"></l-dock-boat>
        <l-dock-boat to="/" title="仓库" icon="layers"></l-dock-boat>
        <l-dock-boat to="/" title="通知" icon="notification"></l-dock-boat>
      </l-dock>
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
    clickBoat(callback, ev){
      callback()
    },
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