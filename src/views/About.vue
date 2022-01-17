<template>
  <div style="width='300px'">
    <l-progress :percentage='percentage'></l-progress>
    <l-progress status="success" :percentage='percentage'></l-progress>
    <l-progress status="warning" :percentage='percentage'></l-progress>
    <l-progress status="danger" :percentage='percentage'></l-progress>
  </div>
</template>

<script>
export default {
  name:'About',
  components:{},
  props:{},
  data(){
    return{
      percentage: 10
    }
  },
  computed:{},
  methods:{
    
  },
  created(){},
  mounted(){}
}
</script>

<style lang='scss' scoped>

</style>