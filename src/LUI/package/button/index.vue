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
