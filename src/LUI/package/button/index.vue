<template>
  <button
    class="l-button"
    :class="[
      type ? 'l-button-' + type : null,
      size ? 'l-button-' + size : null,
      disabled ? 'is-disabled' : null
    ]"
    @click="click" 
    @dblclick="dblclick"
    :disabled="disabled"
    >
    <span>
      <slot name="default"></slot>
    </span>
  </button>
</template>

<script>
export default {
  name:'LButton',
  emits:['click','dblclick'],
  props:{
    size:{
      type: String,
      default: ''
    },
    type:{
      type: String,
      default: 'primary'
    },
    disabled:{
      type: Boolean,
      default:false
    }
  },
  data(){
    return {

    }
  },

  methods:{
    click(event){
      this.$emit('click',event)
    },
    dblclick(event){
      this.$emit('dblclick',event)
    },
  }

}
</script>

<style lang="scss" scoped>
.l-button{
  color: #fff;
  padding: 5px 15px;
  font-size: 16px;
  line-height: 32px;
  display: inline-block;
  border-radius: 4px;
  background-color: transparent;
  border: none;
  outline: none;
}
.l-button-primary{
  background-color: #00B4A0;
}
.l-button-primary:not(.is-disabled){
  &:focus{
    opacity: 0.6;
  }
  &:hover{
    cursor: pointer;
    opacity: 0.6;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    transition: all 0.4s;
  }

  &:active{
    opacity: 1;
  }
}

.is-disabled{
  opacity: 0.4;
  cursor: not-allowed;
}

.l-button-medium{
  line-height: 28px;
  font-size: 16px;
}

.l-button-small{
  line-height: 24px;
  font-size: 16px;
}

.l-button-mini{
  line-height: 20px;
  font-size: 14px;
}
</style>
