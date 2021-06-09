<template>
  <div class="setting">
    <div v-for="item in settingItems" :key="item.code" class="setting-item">
      <span>{{ item.name }}</span>
      <el-switch v-model="item.value" :active-value="true" :inactive-value="false" @change="changeEvent(item)">
      </el-switch>
    </div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return{
      verticalVerse:false,
      settingItems: [{
        name: '竖版诗词',
        value: false,
        code:'verticalVerse'
      },{
        name: '保留颜色名称',
        value:false,
        code:'keepColorName'
      }]
    }
  },
  computed:{},
  methods:{
    changeEvent(item){
      this.$store.commit('setting/changeSetting',{
        key: item.code,
        value: item.value
      })
    },
    getLocalStorageData(){
      this.settingItems.forEach(item => {
        item.value = this.$store.state.setting[item.code]
      });
    }
  },
  created(){
    this.getLocalStorageData()
  },
  mounted(){}
}
</script>

<style lang='scss' scoped>
.setting{
  padding: 10px 0;
}
.setting-item{
  font-weight: 500;
  color: rgba($color: #000, $alpha: 0.7);
  padding: 6px 12px;
  display: flex;
  justify-content: space-between;
  &:hover{
    background-color: #f1f1f1;
  }
}
</style>