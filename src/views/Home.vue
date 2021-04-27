<template>
  <div class="home">
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <el-select filterable clearable v-model="value" placeholder="请选择">
      <el-option
        v-for="item in cities"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        <!-- <span style="float: left">{{ item.label }}</span> -->
        <!-- <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span> -->
      </el-option>
    </el-select>
    <el-select filterable clearable v-model="value" placeholder="请选择">
      <el-option
        v-for="item in cities"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        <!-- <span style="float: left">{{ item.label }}</span> -->
        <!-- <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span> -->
      </el-option>
    </el-select>
    <br>
    <br>
    <l-select filterable v-model="value" placeholder="请选择">
      <l-option
        v-for="item in cities"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        <!-- <span style="float: left">{{ item.label }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span> -->
      </l-option>
    </l-select>

    <l-select v-if="sss" v-model="value" placeholder="请选择">
      <l-option
        v-for="item in cities"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        <!-- <span style="float: left">{{ item.label }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span> -->
      </l-option>
    </l-select>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br>
    <l-button @click="sss = false">删除</l-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sss:true,
        test:'',
        cities: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }, {
          value: 'jinan',
          label: '济南'
        }, {
          value: 'haikou',
          label: '海口'
        }, {
          value: 'xainggang',
          label: '香港'
        }, {
          value: 'aomen',
          label: '澳门'
        }],
        value: 'jinan'
      }
    }
  }
</script>

<style lang="scss" scoped>
.home{
  padding: 100px;
  .l-scrollbar ul{
    width: 100px;
    height: 100px;
  }  
  .el-scrollbar ul{
    width: 100px;
    height: 100px;
  }
}
</style>
