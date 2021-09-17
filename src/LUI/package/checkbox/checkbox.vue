<template>
  <label
    :class="[
      'l-checkbox',
      isAllDye ? 'is-all-dye' : '',
      isChecked ? 'is-checked' : '',
      isIndeterminate ? 'is-indeterminate' : '',
      isDisabled ? 'is-disabled' : ''
    ]"
  >
    <span
      class="l-checkbox-inner"

    >
      <i :class="[
        'l-checkbox-icon',
        'l-icon',
        isChecked ? 'icon-select' : isIndeterminate ? 'icon-minus-bold' : '',
      ]"></i>
      <input
        v-if="trueValue !== undefined || falseValue !== undefined"
        type="checkbox"
        :true-value='trueValue'
        :false-value='falseValue'
        @change="handleChange"
        :disabled="isDisabled"
        v-model="model"
        >
      <input
        v-else
        type="checkbox"
        :value="value"
        @change="handleChange"
        :disabled="isDisabled"
        v-model="model"
        >

    </span>
    <span class="l-checkbox-label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
<script>
import { controllers,controlleds,mutations } from './store'
  export default {
    name:'LCheckbox',
    componentName:'LCheckbox',
    emits:['update:modelValue'],
    props:{
      modelValue:[String,Number,Boolean,Array],
      checked:Boolean,
      value: {
        type:[Number,String,Boolean],
        default:undefined
      },
      label: String,
      trueValue: {
        type: [String,Number,Boolean],
        default: undefined
      },
      falseValue:{
        type: [String,Number,Boolean],
        default: undefined
      },
      disabled:Boolean,
      allDye:Boolean,
      indeterminate:Boolean,
      controlId: String, /* 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系*/
      controls: String, /* 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系*/
      checkOptions:Array,
    },
    data() {
      return {
        controlledArr:[],
      };
    },
    computed:{
      _checkboxGroup(){
        let parent = this.$parent
        while (parent) {
          if(parent.$options.componentName === 'LCheckboxGroup') return parent
          parent = parent.$parent
        }
      },
      _checkboxGroupToControls(){
        if(!this.indeterminate && this.controls) return false
      },
      model:{
        get(){
          return this._checkboxGroup ? this._checkboxGroup.modelValue : this.modelValue
        },
        set(val){
          this._checkboxGroup ? this._checkboxGroup.$emit('update:modelValue',val) : this.$emit('update:modelValue',val)
          this.controls ?
            this.handleControl()
            : this._checkboxGroup && this._checkboxGroup.controlId && controllers[this._checkboxGroup.controlId] ? 
              (controllers[this._checkboxGroup.controlId].controlledArr = val) 
              : ''
        }
      },
      isChecked(){
        if(this.controls){
          return this.checkOptions.length > 0 ? this.controlledArr.length === this.checkOptions.length : false
        }else{
          if(Array.isArray(this.model)){
            return this.model.includes(this.value)
          }else{
            return this.trueValue === undefined ? this.model : this.model === this.trueValue
          }
        }
      },
      isIndeterminate(){
        if(this.controls){
          return this.controlledArr.length > 0 && this.controlledArr.length < this.checkOptions.length
        }else{
          return this.indeterminate
        }
      },
      isAllDye(){
        return this._checkboxGroup && this._checkboxGroup.allDye || this.allDye
      },
      isLimitDisabled() {
        if(!this._checkboxGroup) return false
        const { max, min } = this._checkboxGroup;
        return !!(max || min) &&
          (this.model.length >= max && !this.isChecked) ||
          (this.model.length <= min && this.isChecked);
      },
      isDisabled(){
        return (this._checkboxGroup && this._checkboxGroup.disabled) || this.disabled || this.isLimitDisabled
      },
    },
    methods:{
      handleChange(ev){
        setTimeout(() => {
          this._checkboxGroup ? this._checkboxGroup.$emit('change',this.model,ev) : this.$emit('change',this.model,ev)
        });
      },
      handleChecke(){
        if(Array.isArray(this.model)){
          !this.model.includes(this.value) ? this.model.push(this.value) : null
        }else{
          this.model = this.trueValue === undefined ? true : this.trueValue
        }
      },
      handleControl(){
        // 被控制的checkbox-group元素
        let controlled = controlleds[this.controls]
        // 绑定的数组
        let checked = controlled._props.value
        let checkedLength = checked.length
        if(checkedLength >= 0 && checkedLength < this.checkOptions.length){
          this.controlledArr = this.checkOptions
          controlled.$emit('update:modelValue',this.checkOptions)
        }else if(checkedLength === this.checkOptions.length){
          this.controlledArr = []
          controlled.$emit('update:modelValue',this.controlledArr)
        }
      }
    },
    created(){
      this.checked && this.handleChecke()
      this.controls ? mutations.setControllers(this.controls,this) : null
    },
    mounted(){}
  };

</script>
