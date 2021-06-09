<template>
  <div class="setting-panel"> 
    <div class="setting-options">
      <div
        v-for="item in options"
        :key="item.code"
        @click="handleClickOption(item)"
        class="setting-options-item"
        :class="{'is-active': item.code === currentItem}">{{ item.name }}</div>
    </div>
    <div class="setting-body">
      <component :is='currentItem'></component>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  name:'SettingPanel',
  components:{
    Setting: defineAsyncComponent(()=>import('./Setting.vue')),
    Font: defineAsyncComponent(()=>import('./Font.vue'))
  },
  props:{},
  data(){
    return{
      options:[{
        name: '设置',
        code: 'setting'
      },{
        name: '字体',
        code: 'font'
      }],
      currentItem: 'setting'
    }
  },
  computed:{},
  methods:{
    handleClickOption(item){
      this.currentItem = item.code
    },
  },
  created(){},
  mounted(){}
}
</script>

<style lang='scss' scoped>
.is-active{
  color: rgb(16, 112, 202);
  background-color: rgba(16, 112, 202,0.15);
  border-radius: 4px;
}
.setting-panel{
  width: 500px;
  height: 300px;
  display: grid;
  grid-template-columns: 2fr 8fr;
  font-size: 14px;
  position: absolute;
  bottom: 40px;
  background-color: #fff;
  box-shadow: 0 3px 10px rgb(117, 117, 117);
  border-radius: 6px;
  .setting-options,.setting-body{
    display: inline-block;
    box-sizing: border-box;
  }
  .setting-options{
    font-weight: 500;
    color: rgba($color: #000000, $alpha: 0.7);
    padding: 10px;
    .setting-options-item{
      cursor: pointer;
      margin-bottom: 5px;
      height: 28px;
      line-height: 28px;
      padding-left: 10px;
      &:not(.is-active):hover{
        background-color: rgba(16, 112, 202,0.15);
        border-radius: 4px;
      }
    }
  }
  .setting-body{
    padding: unset;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background-color: rgb(249, 249, 251);
  }
}
</style>