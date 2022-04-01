<template>
  <div class="about">
    <l-input-number v-if="ssss" :precision="2" v-model="numberValue"></l-input-number>
    <l-input-number v-if="ssss2" :precision="2" v-model="numberValue"></l-input-number>
    <div class="wwwww">
      <l-table highlight-current-row border height="300" :data="tableData" @row-click="clickw" @row-dblclick="cliockrr" @currentRow-change="changeCuure">
        <l-table-column prop="name" label="姓名"></l-table-column>
        <l-table-column align="center" prop="age" label="年龄"></l-table-column>
        <l-table-column prop="address" label="地址"></l-table-column>
      </l-table>
    </div>

    <div class="wwwww">
      <l-table highlight-current-row border height="300" :data="tableData" @row-click="clickw" @row-dblclick="cliockrr" @currentRow-change="changeCuure">
        <l-table-column prop="name" label="姓名"></l-table-column>
        <l-table-column align="center" prop="age" label="年龄"></l-table-column>
        <l-table-column prop="address" label="地址"></l-table-column>
      </l-table>
    </div>
    <!-- <hr> -->
    <br>
    <br>

    <l-button @click="ddddd">增加</l-button>
    <l-button @click="dele">杀出</l-button>
    <l-button @click="revisename">改名</l-button>
    <div class="wwwww">
      <el-table  height="300" border highlight-current-row :data="tableData" @row-click="clickw" @row-dblclick="cliockrr">
        <el-table-column prop="name" label="姓名">
          <template v-slot:default="{row}">
            {{ row.name }}
          </template>
        </el-table-column>
        <el-table-column align="center" prop="age" label="年龄"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { load as getSentence} from 'jinrishici'
// const jinrishici = require('jinrishici');
export default {
  name:'About',
  data(){
    return{
      ssss: true,
      ssss2: true,
      numberValue: null,
      tableData: [
        { name: '张三', age: 24, address: '北京市西城区监狱' },
        { name: '李斯', age: 22, address: '秦国咸阳' },
        { name: '李白', age: 22, address: '大唐长安' },
        // { name: '苏轼', age: 22, address: '浙江杭州' },
        // { name: '曹操', age: 22, address: '许昌' },
        // { name: '孙权', age: 22, address: '江东' },
        // { name: '孙权', age: 22, address: '江东' },
        // { name: '孙权', age: 22, address: '江东' },
        // { name: '孙权', age: 22, address: '江东' },
        // { name: '孙权', age: 22, address: '江东' },
        // { name: '孙权', age: 22, address: '江东' },
        // { name: '孙权', age: 22, address: '江东' },
        // { name: '孙权', age: 22, address: '江东' },
        // { name: '孙权', age: 22, address: '江东' },
        // { name: '孙权', age: 22, address: '江东' },
        // { name: '孙权', age: 22, address: '江东' },
        // { name: '孙权', age: 22, address: '江东' },
      ],
      form:{
        username: '',
        password: '',
      },
      num: 44,
    }
  },
  computed:{

  },
  methods:{
    clickBoat(callback, ev){
      callback()
    },
    dele(){
      this.tableData.splice(0,1)
    },
    ddddd(){
      this.tableData.push(
        { name: '关羽', age: 54, address: '我也不知道哪里' }
      )
    },
    revisename(){
      this.tableData[0].name = Date.now()
    },
    changeCuure(){
      console.log('change');
    },
    clickw(){
      console.log('asdasd');
    },
    cliockrr(){
      console.log('123123');
    },
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
<style lang="scss" scoped>
.dock {
  width: 800px;
}
.wwwww{
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  // height: 200px;
}
</style>