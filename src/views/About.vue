<template>
  <div class="about">
    <l-counter :min="33" :step='3' @change="change" v-model="num"></l-counter>
    <!-- <el-input-number :min="33" :step='3' @change="change" v-model="num" /> -->
    <!-- <l-input v-model="num" @blur="handleBlur"></l-input> -->
    {{num}}
    <!-- <el-input v-model="num" placeholder="">
      <template v-slot:prepend>
        asdasd
      </template>
    </el-input> -->
      <!-- <el-input-number
    v-model="num"
    @change="change"
    :max="10"
    :min="11"
    label="描述文字"
  ></el-input-number> -->
    <!-- <l-form :model='form' ref="form">
      <l-form-item prop='username' label='账号'>
        <l-input v-model="form.username"></l-input>
      </l-form-item>
      <l-form-item prop='password' label='密码'>
        <l-input v-model="form.password"></l-input>
      </l-form-item>
    </l-form> -->
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
      },
      num: 44,
    }
  },
  computed:{

  },
  methods:{
    loadSentenc(){
      getSentence(res=>{
        
      })
    },
    change(eee){
      console.log('change 了',eee);
    },
    handleBlur(ev){
      this.num = parseInt(ev.target.value)
    }
  },
  mounted(){
    this.loadSentenc()
  }
};
</script>
