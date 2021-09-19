<template>
  <div class="l-counter">
    <span
      v-repeat-click='clickDecrease'
      :class="['l-counter--decrease', { 'is-disabled': disabledDecrease }]"
      >
      <i class="l-icon icon-minus"></i>
    </span>
    <l-input v-model="count" @blur="handleBlur">
    </l-input>
    <span
      v-repeat-click='clickIncrease'
      :class="['l-counter--increase', { 'is-disabled': disabledIncrease }]"
      >
      <i class="l-icon icon-add"></i>
    </span>
  </div>
</template>

<script>
import { ref, toRefs, computed, onBeforeMount, watch} from "vue"
import _ from "lodash"
import RepeatClick from '@LUI/directives/repeat-click'
export default {
  name: 'LCounter',
  emits:['update:modelValue', 'change'],
  directives:{
    RepeatClick
  },
  props:{
    modelValue: {
      type: Number,
    },
    min: {
      type: Number,
      default: -Infinity
    },
    max: {
      type: Number,
      default: Infinity
    },
    step: {
      type: Number,
      default: 1
    },
    stepStrictly: Boolean
  },
  setup (props, ctx) {
    let count = ref(props.modelValue)

    const disabledDecrease = computed(()=>{
      return count.value === props.min
    })

    const disabledIncrease = computed(()=>{
      return count.value === props.max
    })

    const clickDecrease = ()=>{
      if(disabledDecrease.value) return
      let temp = _.subtract(count.value, props.step)
      setCurrentValue(temp < props.min ? props.min : temp)
    }

    const clickIncrease = ()=>{
      if(disabledIncrease.value) return
      let temp = _.add(count.value, props.step)
      setCurrentValue(temp > props.max ? props.max : temp)
    }

    const setCurrentValue = (value)=>{
      count.value = value
      ctx.emit('update:modelValue', value)
    }

    const handleBlur = ev =>{
      defaultSetCurrentValue(parseInt(ev.target.value))
    }

    const defaultSetCurrentValue = value=>{
      if(typeof value !== 'number' || isNaN(value)){
        setCurrentValue(null)
        return
      }
      setCurrentValue(value)
      typeof props.max === 'number' && value > props.max && setCurrentValue(props.max)
      typeof props.min === 'number' && value < props.min && setCurrentValue(props.min)
      props.max < props.min && value < props.min && setCurrentValue(props.min)
    }

    watch(
      ()=>props.modelValue,
      value=>{
        defaultSetCurrentValue(value)
        ctx.emit('change', value)
      },
      { immediate: true }
    )
    return {
      count,
      disabledDecrease,
      disabledIncrease,
      clickDecrease,
      clickIncrease,
      handleBlur
    }
  },
}
</script>