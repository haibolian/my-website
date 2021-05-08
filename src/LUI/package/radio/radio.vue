<template>
  <label :class="[
   'l-radio',
    radioType ? `l-radio-${radioType}` : null,
    model === value && radioType === 'button' ? 'is-checked' : '',
    _radioGroup && _radioGroup.disabled ? '' : disabled ? 'is-disabled' : '']"
    :style="model === value ? activeStyle : ''"
    >
    <input
      :class="['l-radio-inner']"
      type="radio"
      :value="value"
      :name="name"
      :disabled="isDisabled"
      @change="handleChange"
      v-model="model"
    >
    <span class="l-radio-label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
<script>
  export default {
    name:'LRadio',
    emits:[ 'change' ],
    props:{
      modelValue:[String,Boolean,Number],
      value:[String,Boolean,Number],
      name:String,
      label:String,
      disabled:Boolean,
      type:String
    },
    data() {
      return {
        test:'',
      };
    },
    computed:{
      _radioGroup(){
        let parent = this.$parent
        while (parent) {
          if(parent.$options.componentName === 'LRadioGroup'){
            return parent
          }else{
            parent = parent.$parent
          }
        }
      },
      model:{
        get(){
          return this._radioGroup ? this._radioGroup.modelValue : this.modelValue
        },
        set(val){
          this._radioGroup ? this._radioGroup.$emit('update:modelValue',val) : this.$emit('update:modelValue',val)
        }
      },
      isDisabled(){
        return this.disabled || Boolean(this._radioGroup && this._radioGroup.disabled)
      },
      radioType(){
        return (this._radioGroup && this._radioGroup.type) || this.type
      },
      activeStyle(){
        if(!this._radioGroup || this._radioGroup.type !== 'button' || this._radioGroup.disabled) return
        let color = this._radioGroup.fill || null
        return {
          backgroundColor: color || '',
          borderColor: color || ''
        }
      }
    },
    methods:{
      handleChange(ev){
        this._radioGroup ? this._radioGroup.$emit('change',this.value,ev) : this.$emit('change',this.value,ev)
      },
    }
  };

</script>
