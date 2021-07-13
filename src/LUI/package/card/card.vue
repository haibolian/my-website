<template>
  <div :class="['l-card', 'l-shadow-' + shadow]">
    <!-- header -->
    <div class="l-card-header" v-if="showHeader">
      <slot name="header" >
        <span>{{ title }}</span>
      </slot>
    </div>
    <!-- body -->
    <div class="l-card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'LCard',
  components:{},
  props:{
    title: {
      type: String,
      default: ''
    },
    shadow:{
      type: String,
      default: 'always'
    }
  },
  data(){
    return{
      
    }
  },
  computed:{
    showHeader(){
      return this.title || this.$slots.header().length
    }
  },
  methods:{
    
  },
  created(){
    
  },
  mounted(){}
}
</script>

<style lang='scss' scoped>

</style>