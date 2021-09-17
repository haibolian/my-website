<template>
  <div
  :class="['l-switch', toggleClass]" 
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
    disabled: Boolean
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
<style lang="scss" scoped>
.l-switch {
  width: 50px;
  height: 18px;
  padding: 5px;
  border-radius: 30px;
  cursor: pointer;
  position: relative;
  .l-switch-inner {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    position: absolute;
    background-color: #fff;
  }
  &.l-switch-on {
    background-color: rgb(52, 81, 248);
    .l-switch-inner { right: 5px; }
  }

  &.l-switch-off {
    background-color: #ddd;
    .l-switch-inner { left: 5px; }
  }

  &.is-disabled {
    cursor: not-allowed;
  }
}
</style>
