<template>
  <div class="about">
    <l-input width="200px" v-model="loanAmount"></l-input>
    <l-input width="200px" v-model="interest"></l-input>
    <l-input width="200px" v-model="loanYears"></l-input>
    <l-button @click="calculate">计算</l-button>
    <div ref="result">

    </div>
  </div>
</template>

<script>
import { getType, cloneshallow} from '@/utils/index'
export default {
  name:'About',
  data(){
    return{
      loanAmount:'',
      interest:'',
      loanYears:''
    }
  },
  computed:{

  },
  methods:{
    calculate(){
      let loanAmount = Number(this.loanAmount)
      let interest = Number(this.interest)
      let loanMonths = Number(this.loanYears) * 12

      let monthlyReturn = loanAmount / loanMonths
      let allInterestAmount = 0
      let allReturnAmount = 0
      for( let i = 1 ; i <= loanMonths ; i++ ){
        let currentInterestAmount = loanAmount * interest
        allInterestAmount = allInterestAmount + currentInterestAmount
        console.log('本月应还：' + (monthlyReturn + currentInterestAmount));
        allReturnAmount = allReturnAmount + monthlyReturn + currentInterestAmount
        loanAmount = loanAmount - monthlyReturn
      }
      console.log('总利息：' + allInterestAmount);
      console.log('总还款金额：' + allReturnAmount);


      
    }
  },
  created(){
    let str = '',
        num = 1,
        bool = true,
        undefine = undefined,
        nul = null,
        obj = {},
        arr = [],
        symb = Symbol(),
        func = function(){},
        repx = /d/g
    console.log(getType(str) + '   str');   
    console.log(getType(num) + '   num');
    console.log(getType(bool) + '   bool');
    console.log(getType(undefine) + '   undefine');
    console.log(getType(nul) + '   nul');
    console.log(getType(obj) + '   obj');
    console.log(getType(arr) + '   arr');
    console.log(getType(symb) + '   symb');
    console.log(getType(func) + '   func');
    console.log(getType(repx) + '   repx');
    class Person {
    }
    let ming = new Person()
    console.log(ming.constructor.name);
    console.log(getType(ming) + '   person');

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
