<template>
  <div class="sentence">
    <span
      v-for="(item,index) in words" 
      :key="'sakura-' + item + index" 
      :class="signs.includes(item) ? 'blockEl' : '' ">
        {{signs.includes(item) ? '' : item}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'sentence',
  props:{
    content:{
      type: String,
      default: '花间一壶酒，独酌无相亲。举杯邀明月，对影成三人。'
    },
    layout:{
      type: String,
      default: 'left-right',
      validator(prop){
        if(prop !== 'left-right' && prop !== 'up-down'){
          console.error("the layout should be 'left-right' or 'up-down'");
          return false
        }
        return true
      }
    }
  },
  data(){
    return{
      words:[],
      signs:[',','，','。','.']
    }
  },
  
  created(){
    this.printWords()
  },

  methods:{
    printWords(){
      let wordsArr = this.content.split('')
      let len = wordsArr.length
      for (let i = 0; i < len; i++) {
        setTimeout(this.handleWrite(i,wordsArr), this.getDelayed(i));
      }
      setTimeout(() => {
        this.$emit('finishWrite')
      }, this.getDelayed(len)+1000);

    },
    handleWrite(i,arr){
      return ()=>{
        this.words.push(arr[i])
      }
    },
    getDelayed(i){
      return i*200
    }
  }
}
</script>

<style lang="scss" scoped>
.sentence{
  font-size: 30px;
  color: #ccc;
  border: 1px solid #cccccc;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .blockEl::after{
    content: '';
    display: block;
  }
  span{
    animation: slotShow 0.7s;
    -webkit-animation: slotShow 0.7s;
  }
  @keyframes slotShow {
    0% { opacity: 0; }
    25% { opacity: 0.25; }
    50% { opacity: 0.5; }
    75% { opacity: 0.75; }
    100% { opacity: 1; }
  }
}
</style>