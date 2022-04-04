<template>
  <div class="l-input-number">
    <input 
      type="text"
      :value="showValue"
      @input="handleInput"
      @blur="handleBlur"
      >
  </div>
</template>

<script>
import { defineComponent, computed, ref, onUnmounted } from "vue"
import { handleMinus, handleFormat, handlePrecision, handleInputtingValue } from "./utils";
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
      default: true
    },
    minus: {
      type: Boolean,
      default: true,
    },
    trigger: {
      type: String,
      default: 'input'
    }
  },
  setup(props, ctx){
    const showValue = computed(()=>{
      return props.modelValue;
    })

    const isInputTrigger = computed(()=>{
      return props.trigger !== 'blur'
    })
    const handleInput = (event)=>{
      let value = event.target.value?.replace(/[^-\d.]/g, '');
      const { minus, precision, isFormatted } = props;
      value = handleInputtingValue(value, { minus, precision, isFormatted });
      event.target.value = value;
      ctx.emit('update:modelValue', Number(value))
    }

    const handleBlur = (event)=>{
      // let value = event.target.value?.replace(/[^-\d.]/g, '');
      // const { minus, precision, isFormatted } = props
      // value = handleMinus(value, minus);
      // value = handlePrecision(value, precision);
      // value = handleFormat(value, isFormatted);
      // ctx.emit('update:modelValue', value)
    }

    return {
      showValue,
      handleInput,
      handleBlur
    }
  }
})
</script>
