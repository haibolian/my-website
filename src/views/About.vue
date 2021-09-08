<template>
  <div class="about">
    <l-form :model='form' ref="form">
      <l-form-item prop='username' label='账号'>
        <l-input v-model="form.username"></l-input>
      </l-form-item>
      <l-form-item prop='password' label='密码'>
        <l-input v-model="form.password"></l-input>
      </l-form-item>
    </l-form>
  </div>
</template>

<script>
import { load as getSentence} from 'jinrishici'
// const jinrishici = require('jinrishici');
export default {
  name:'About',
  data(){
    return{
      form:{
        username: '',
        password: ''
      }
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
