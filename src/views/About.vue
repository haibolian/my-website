<template>
  <div class="about">
    
  </div>
</template>

<script>
import { load as getSentence} from 'jinrishici'
// const jinrishici = require('jinrishici');
export default {
  name:'About',
  data(){
    return{
      
    }
  },
  computed:{

  },
  methods:{
    loadSentenc(){
      getSentence(res=>{
        
      })
    }
  },
  mounted(){
    this.loadSentenc()
  }
};
</script>

<style lang="scss" scoped>
.l-input{
  display: inline-block;
  margin: 20px;
}
canvas {
  padding: 0;
  margin: 0;
}

div.btnbg {
  position: fixed;
  left: 0;
  top: 0;
}
</style>
