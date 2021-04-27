<template>
  <div class="sakura-animation">
    <iframe class="sakura-iframe" src="./sakura/index.html" frameborder="0"></iframe>
    <div class="verse">
      <sentence :content="content" @finishWrite="finishWrite" layout="left-right" />
    </div>
  </div>
</template>

<script>
import Sentence from "@/components/sentence/index.vue"
export default {
  components:{
    Sentence
  },
  data(){
    return{
      content: '清晨起来不见波，辗转反侧难入睡。想你想的起不来，希望与你在一起。'
    }
  },
  methods:{
    finishWrite(){
      this.$emit('finishWrite')
    }
  }
}
</script>

<style lang="scss" scoped>
.sakura-animation{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .sakura-iframe{
    width: 100%;
    height: calc(100vh);
  } 
  .verse{
    position: absolute;
  }

}
</style>

