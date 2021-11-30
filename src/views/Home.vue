<template>
  <div class="home">
    <h5>icon</h5>
    <svg-icon icon-name='search'></svg-icon>
    <h5>input</h5>
    <l-input v-model="testinput"></l-input>
    <h5>button</h5>
    <l-button size="" @click="handleBtnClick">按钮</l-button>
    <l-button size="medium" @click="handleBtnClick">按钮</l-button>
    <l-button size="small" @click="handleBtnClick">按钮</l-button>
    <l-button size="mini" @click="handleBtnClick">按钮</l-button>
    <br>
    <l-button size="" @click="handleBtnClick">按钮</l-button>
    <l-button type="success" @click="handleBtnClick">按钮</l-button>
    <l-button type="warning" @click="handleBtnClick">按钮</l-button>
    <l-button type="danger" @click="handleBtnClick">按钮</l-button>
    <br>
    <l-button plain size="" @click="handleBtnClick">按钮</l-button>
    <l-button plain type="primary" @click="handleBtnClick">按钮</l-button>
    <l-button plain type="success" @click="handleBtnClick">按钮</l-button>
    <l-button plain type="warning" @click="handleBtnClick">按钮</l-button>
    <l-button plain type="danger" @click="handleBtnClick">按钮</l-button>
    <br>
    <l-button circle class="el-icon-search"></l-button>
    <el-button size="small" circle class="el-icon-search"></el-button>
    <el-button size="mini" circle class="el-icon-search"></el-button>
    <h5>card</h5>
    <l-card shadow="always">
      <template #header>
        <span class="left">卡片名称</span>
        <el-button class="right" type="text">按钮阿萨德</el-button>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
  </l-card>
  <h5>checkbox</h5>
  <l-checkbox-group v-model="arr">
    <l-checkbox label='水果' value="rfsdnf"></l-checkbox>
    <l-checkbox label='香蕉' value="arfsdnf"></l-checkbox>
    <l-checkbox label='例子' value="r3fsdnf"></l-checkbox>
  </l-checkbox-group>
  <h5>radio</h5>
  <l-radio-group v-model="radio">
    <l-radio label="选项1" value="1"></l-radio>
    <l-radio label="选项2" value="2"></l-radio>
    <l-radio label="选项3" value="3"></l-radio>
  </l-radio-group>
  <h5>select</h5>
  <l-select v-model="select">
    <l-option value='11' label='黄金'></l-option>
    <l-option value='12' label='玉米'></l-option>
    <l-option value='13' label='高点'></l-option>
  </l-select>
  <h5>分页-element</h5>
  <el-pagination
    :page-sizes="[100, 200, 300, 400, 500]"
    :page-size="pageSize"
    :total="4000"
    layout="prev, pager,next, total, sizes, jumper, slot"
  >
  </el-pagination>
  <h5>分页-LUI</h5>
  <l-pagination
    layout="total, sizes, prev, pager, next, jumper, slot"
    :page-sizes="[100, 200, 300, 400, 500]"
    :page-size="pageSize"
    :page-count="20"
    :currentPage="4"
    @size-change="changePageSize"
    @page-change="changePage"
  >
  </l-pagination>
  
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
        testinput:'',
        arr:[],
        radio:'',
        select:'',
        pageSize: 200,
        currentPage:1
      }
    },
    methods:{
      handleBtnClick(e){
        console.log(e);
      },
      changePageSize(val){
        console.log('changePageSize', val);
      },
      changePage(val){
        console.log('changePage', val);
      }
    }
  }
</script>

<style lang="scss" scoped>
.home{
  padding-left: 100px;
}
</style>
