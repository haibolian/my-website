<template>
  <div
  :class="['l-switch', size ? `l-switch--${size}` : '' ,toggleClass]" 
  @click="handleClick">
    <div class="l-switch-inner">

    </div>
  </div>
</template>
<script>
import { ref, computed } from 'vue'
export default {
  name:'LSwitch',
  props: {
    modelValue: Boolean,
    disabled: Boolean,
    size: String
  },
  emits:['update:modelValue','change'],
  setup(props, ctx){
    const switchDisabled = computed(()=>{
      return props.disabled
    })
    const handleClick = (ev)=>{
      !switchDisabled.value && ctx.emit('update:modelValue', !props.modelValue)
      ctx.emit('change', !props.modelValue)
    }
    const toggleClass = computed(()=>{
      return {
        'l-switch-on': props.modelValue,
        'l-switch-off': !props.modelValue,
        'is-disabled': props.disabled
      }
    }) 

    return {
      handleClick,
      toggleClass
    }
  }
};
</script>
