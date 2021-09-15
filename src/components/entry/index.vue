<template>
  <div class="entry" @click="handleClick">
    <span class="l-icon icon-direction-down"></span>
  </div>
</template>

<script>
export default {
  name:'',
  components:{},
  props:{},
  data(){
    return{
      
    }
  },
  methods:{
    handleClick(){
      this.$emit('click')
    }
  }
}
</script>

<style lang='scss' scoped>
  .entry {
    color: #ccc;
    font-size: 20px;
    position: absolute;
    bottom: 5%;
    right: 2%;
    .l-icon {
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 50%;
      // box-shadow: 0 0 20px 4px #ccc;
      &:hover {
        cursor:pointer;
        animation: huxi 1.5s;
        animation-timing-function:linear;
        animation-iteration-count: infinite;
        @keyframes huxi {
          0% { box-shadow: 0 0 30px 4px #ccc; }
          25% { box-shadow: 0 0 20px 4px #ccc; }
          50% { box-shadow: 0 0 10px 4px #ccc; }
          75% { box-shadow: 0 0 20px 4px #ccc; }
          100% { box-shadow: 0 0 30px 4px #ccc; }
        }
      }
    }
  }
</style>