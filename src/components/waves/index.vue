<template>
  <div class="waves">
    <iframe class="waves-iframe" src="./waves/index.html" frameborder="0"></iframe>
    <verse :verseDrection="verseDrection"/>
    <transition name="fade">
      <div v-show="showColorName" class="colorName">
        <color-name @hasGetColorName="hasGetColorName"></color-name>
      </div>
    </transition>
    <i class="l-icon icon-setting waves-setting"></i>
    
  </div>
</template>

<script>
import Verse from '@/components/Verse/index'
import ColorName from "@/components/ColorName"
export default {
  components:{
    Verse,
    ColorName
  },
  data(){
    return{
      content: '',
      showColorName:true
    }
  },
  computed:{
    verseDrection(){
      return this.$store.state.setting.writingMode
    }
  },
  methods:{
    revise(){ 
      this.$store.commit('setting/changeSetting',{
        key:'writingMode',
        value: this.verseDrection == 'horizontal' ? 'vertical' : 'horizontal'
      })
    },
    finishWrite(){
      this.$emit('finishWrite')
    },
    hasGetColorName(){
      setTimeout(() => {
        this.showColorName = false
      }, 2500);
    }
  }
}
</script>

<style lang="scss" scoped>
.waves{
  position: relative;
  .waves-iframe{
    width: 100%;
    height: calc(100vh);
  } 
  .waves-verse{
    height: calc(100vh);
    width: 100%;
    position: absolute;
    top: 30vh;
    left: 50vw;
    transform: translate( -50%,-50% );
  }
  .waves-verse-vertical{
    top: 40vh;
  }
  .fade-enter-active,
  .fade-leave-active{
    transition: opacity 0.5s ease;
  }
  .fade-enter-from,
  .fade-leave-to{
    opacity: 0;
  }
}
.waves-setting{
  font-size: 25px;
  color: rgb(214, 214, 214);
  position: absolute;
  bottom: 4vh;
  left: 2vw;
}
</style>

