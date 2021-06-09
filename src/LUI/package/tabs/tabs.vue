<template>
  <div class="l-tabs">
    <div class="l-tabs-navbar">
      <span class="l-tabs-bar" v-for="item in $slots.default()" :key="item.label">
        {{ item.props.label}}
      </span>
    </div>
    <div class="l-tabs-main">
      qweqweq
      <!-- <component :is="active"></component> -->
    </div>
  </div>
</template>

<script>
export default {
  name:'LTabs',
  components:{},
  props:{
    modelValue:{}
  },
  data(){
    return{
      active:'',
    }
  },
  computed:{},
  methods:{
    
  },
  created(){},
  mounted(){
    this.$slots.default()
    // debugger
  }
}
</script>

<style lang='scss' scoped>

</style>