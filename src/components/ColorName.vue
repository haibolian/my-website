<template>
  <div class="color-name" :style="{ 'font-family': 'fzls,fzjt' }">
    <div class="name-item" v-for="(item,index) in colorName" :key="`${item}${index}`">{{ item }}</div>
  </div>
</template>

<script>
export default {
  name:'ColorName',
  data(){
    return {
      colorName:''
    }
  },
  methods:{
    getColorName(){
      let data = JSON.parse(sessionStorage.getItem('WAVECOLOR'))
      if(data){
        let { name } = data
        this.colorName = name.split('')
        this.$emit('hasGetColorName')
      }else{
        setTimeout(()=>{
          this.getColorName()
        },200)
      }
    }
  },
  mounted(){
    this.getColorName()
  },
  beforeUpdate(){
    sessionStorage.removeItem('WAVECOLOR')
  },
  updated() {
    this.getColorName()
  },
}
</script>

<style lang="scss" scoped>
.color-name{
  position: absolute;
  // font-family: 'fzls';
  right: 20px;
  top: 20px;
  color: #ccc;
  font-size: 8em;
}

</style>