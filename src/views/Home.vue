<template>
  <div class="home">
    <h5>icon</h5>
    <svg-icon icon-name='search'></svg-icon>
    <h5>input</h5>
    <l-input v-model="testinput"></l-input>
    <h5>button</h5>
    <l-button @click="handleBtnClick">按钮</l-button>
    <h5>card</h5>
    <l-card>
      <template #header>
        <span class="left">卡片名称</span>
        <el-button class="right" type="text">按钮阿萨德</el-button>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
  </l-card>
  </div>
</template>

<script>  
// import SvgIcon from '@/components/SvgIcon/index'
  export default {
    components:{
      // SvgIcon
    },
    data() {
      return {
        testinput:''
      }
    },
    methods:{
      handleBtnClick(e){
        console.log(e);
      }
    }
  }
</script>

<style lang="scss" scoped>
.home{
  padding-left: 100px;
}
</style>
