<template>
  <div id="app">
    <waves v-if="showAnimation"></waves>
    <div v-else>
      <div id="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于</router-link>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  name:'APP',
  components:{
    Waves: defineAsyncComponent(()=>import('@/components/waves/index'))
  },
  data(){
    return{
      showAnimation:false,
    }
  },
  methods:{
    finishWrite(){ 
      this.showAnimation = false
    }
  }
}
</script>

<style lang="scss" scoped>
#nav{
  animation: getInto 0.75s;
  -webkit-animation: getInto 0.75s;
}
@keyframes getInto {
  from {opacity: 0;}
  to {opacity: 1;}
}
</style>