<template>
  <div :class="[
          'l-input',
          size ? 'l-input-' + size : '',
          disabled ? 'is-disabled':'',
          $slots.append || append ? 'l-input-group-append' : '',
          $attrs.class
        ]"
      :style="`width:${width}`">
    <div v-if="$slots.prepend || prepend" class="l-input-prepend" @click="clickPrepend">
      <slot name="prepend">{{ prepend }}</slot>
    </div>
    <input
      ref="l-input_inner"
      v-bind="Object.assign({}, $attrs, { class: '' })"
      class="l-input_inner"
      :disabled="disabled"
      :value="modelValue"
      :type="showType"
      @compositionstart="handleCompositionstart"
      @compositionend="handleCompositionend"
      @input="handleInput"
      @change="handleChange"
      @blur="handleBlur"
      @focus="handleFocus"
      >
      <div v-if="$slots.append || append" class="l-input-append" @click="clickAppend">
        <slot name="append">{{ append }}</slot>
      </div>
      <span v-if="prefixIcon || $slots.prefix" ref="l-icon-prefix-box" class="l-icon-prefix-box">
        <i v-if="prefixIcon" :class="`l-icon icon-${prefixIcon} ${prefixIconClickable ? '' : 'l-icon-readonly'}`" @click="clickPrefixIcon"></i>
        <slot name="prefix"></slot>
      </span>
      <span v-if="clearable || suffixIcon || showPassword || $slots.suffix || openWordLimitPass" ref="l-icon-suffix-box" class="l-icon-suffix-box">
        <i v-if="clearable" v-show="modelValue" @click="clear" class="l-icon icon-error"></i>
        <i v-if="suffixIcon" :class="`l-icon icon-${suffixIcon} ${suffixIconClickable ? '' : 'l-icon-readonly'}`" @click="clickSuffixIcon"></i>
        <slot name="suffix"></slot>
        <i v-if="type === 'password' && showPassword" @click="toggleShow" :class="['l-icon',pswIconValue ? 'icon-browse' : 'icon-eye-close']"></i>
        <i v-if="showWordLimit" class="l-input-word-limit">{{ wordLength }}/{{ $attrs.maxlength }}</i>
      </span>
  </div>
</template>

<script>
export default {
  inheritAttrs:false,
  name:'LInput',
  emits:[ 'clear','clickPrefixIcon','clickSuffixIcon','input','change','blur','focus', 'click-prepend', 'click-append', 'update:modelValue' ],
  props:{
    modelValue:[String,Number],
    type: {
      type:String, 
      default: 'text',
      validator(val){
        let supportableType = ['text','password']
        if(supportableType.includes(val)) return true
        console.error(`the ${val} is not supportable type`);
      },
    },
    width:[String],
    size: { type:String },
    disabled: { type:Boolean },
    clearable: { type:Boolean },
    showPassword: { type:Boolean },
    prefixIcon: { type:String },
    suffixIcon: { type:String },
    prefixIconClickable: { type:Boolean,default:false },
    suffixIconClickable: { type:Boolean,default:false },
    prepend:{ type: String },
    append: { type:String },
    showWordLimit: { type:Boolean }
  },
  data(){
    return{
      showType:'',
      pswIconValue:false,
      wordLength:0,
      isComposition:false,
    }
  },
  created(){
    this.showType = this.type
  },
  mounted(){
    this.$nextTick(()=>{
      setTimeout(() => {
        this.setPaddingByIcons()
      }); 
    })
  },
  computed:{
    openWordLimitPass(){
      if(this.showWordLimit && this.$attrs.maxlength) return true
    }
  },
  methods:{
    clear(){
      this.$emit('update:modelValue','')
      this.$emit('clear')
      this.$refs['l-input_inner'].focus()
    },
    clickPrefixIcon(ev){
      if(this.prefixIconClickable) this.$emit('clickPrefixIcon',ev) 
    },
    clickSuffixIcon(ev){
      if(this.suffixIconClickable)  this.$emit('clickSuffixIcon',ev)
    },
    handleBlur(ev){
      this.$emit('blur',ev)
    },
    handleCompositionstart(){
      this.isComposition = true
    },
    handleCompositionend(ev){
      if(this.isComposition){
        this.isComposition = false
        this.handleInput(ev)
      }
    },
    handleFocus(ev){
      this.$emit('focus',ev)
    },
    handleInput(ev){
      if(this.isComposition) return 
      let value = ev.target.value
      let length = this.wordLength = value.length
      this.$emit('update:modelValue',value)
      this.$emit('input',value)
      if(this.clearable || this.openWordLimitPass)
        (length === 0 || length === 1 || length === 10 || length === 100) ? this.$nextTick(()=>{this.setPaddingByIcons()}) : ''
    },
    handleChange(ev){
      this.$emit('change',ev)
    },
    setPaddingByIcons(){
      let inner = this.$refs['l-input_inner']
      let suffixBox = this.$refs['l-icon-suffix-box']
      let prefixBox = this.$refs['l-icon-prefix-box']
      prefixBox && prefixBox.clientWidth ? inner.style.paddingLeft = prefixBox.clientWidth + 'px' : ''
      suffixBox && suffixBox.clientWidth ? inner.style.paddingRight = suffixBox.clientWidth + 'px' : ''
    },
    toggleShow(){
      this.pswIconValue = !this.pswIconValue
      this.showType = this.pswIconValue ? 'text' : 'password'
    },
    clickPrepend(ev){
      this.$emit('click-prepend',ev)
    },
    clickAppend(ev){
      this.$emit('click-append',ev)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
