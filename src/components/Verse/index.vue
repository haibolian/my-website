<template>
  <div
    v-if="changeDirection"
    :class="verseClass"
    :style="{ 'font-family': 'fzls, fzjt' }">
    <div class="verse">{{ verse }}</div>
    <div class="title-author">
      <span class="title">「 {{ title }}」</span>
      <span class="author">{{ author }}</span>
    </div>
  </div>
</template>

<script>
import jinrishici from '@/utils/jinrishici'
import { nextTick } from 'vue'
export default {
  props:{
    verseDrection: String
  },
  data(){
    return {
      changeDirection:true,
      verse: '',
      verseObj:null,
      author:'', 
      title:'',
      index:0
    }
  },
  computed:{
    verseClass(){
      return {
        'verse-container': true,
        'is-verse-vertical': this.verseDrection == 'vertical'
      }
    },
  },
  methods:{
    async getVerse(){
      let { data, status } = await jinrishici()
      if(status){
        this.verseObj = data
        this.verse = this.verseDrection == 'vertical' ? this.filterSign(data.content) : data.content
        this.author = data.origin.author
        this.title = data.origin.title
      }
    },
    filterSign(str){
      return str.replace(/，|。|？|！|、/g,' ')
    },
  },
  created(){},
  mounted(){
    this.getVerse()
  },
  watch:{
    verseDrection(val){
      this.changeDirection = false
      nextTick(()=>{
        this.changeDirection = true
      })
      this.verse = val == 'vertical' ? this.filterSign(this.verse) : this.verseObj.content
    }
  },
}
</script>

<style lang="scss" scoped>
.verse-container{
  width: 100%;
  text-align: center;
  color: #111111;
  position: absolute;
  top: 30vh;
  left: 50vw;
  transform: translate( -50%,-50% );
  animation: fade-in 1s ease;
  -webkit-animation: fade-in 1s ease ;
}
.is-verse-vertical{
  width: unset;
  text-align: unset;
  top: 42vh;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
  word-break: keep-all;
  -webkit-word-break: keep-all;
  .title-author{ margin-top:unset; margin-right: 1.5vw; text-align: unset; }
}
.verse{
  font-size: 50px;
  width: auto;
  line-height: 1.5;
}
.title-author{
  margin-top: 3vh;
  text-align: center;
}
.title{
  font-size: 27px;
}
.author{
    font-size: 20px;
    background: rgb(194,0,0);
    color: #fff;
    border-radius: 6px;
    margin: 5px;
    padding: 1px 2px 0;
}
@keyframes fade-in {
  0% { opacity: 0; }
  25% { opacity: 0.25; }
  50% { opacity: 0.5; }
  75% { opacity: 0.75; }
  100% { opacity: 1; }
}
</style>