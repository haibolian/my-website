<template>
  <div class="l-input-number">
    <input 
      type="text"
      :value="showValue"
      @input="handleInput"
      >
  </div>
</template>

<script>
import { defineComponent, computed, ref, onUnmounted } from "vue"
import { handleMinus, handleFormat, handlePrecision } from "./utils";
export default defineComponent({
  componentName: 'LInputNumber',
  name: 'LInputNumber',
  props: {
    modelValue: [String, Number],
    precision: {
      type: Number
    },
    isFormatted: {
      type: Boolean,
      default: false
    },
    minus: {
      type: Boolean,
      default: false,
    }
  },
  setup(props, ctx){
    const showValue = computed(()=>{
      return props.modelValue;
    })

    const handleInput = (event)=>{
      // let value = event.target.value?.replace(/[^-\d.]/g, '');
      // const { minus, precision, isFormatted } = props
      // value = value
      //   ._handleMinus(minus)
      //   ._handlePrecision(precision)
      //   ._handleFormat(isFormatted)
      // ctx.emit('update:modelValue', value)
    }



    return {
      showValue,
      handleInput
    }
  }
})
</script>
