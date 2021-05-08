<template>
  <component
    :class="[
    'l-radio-group',
    type ? `l-radio-group-${type}` : '',
    disabled ? 'is-disabled' : ''
    ]"
   :is="tagShow">
   <div class="l-radio-group-content">
      <slot></slot>
   </div>
  </component>
</template>
<script>
  export default {
    name:'LRadioGroup',
    emits:['change'],
    componentName:'LRadioGroup',
    props:{
      modelValue:[String,Number,Boolean],
      disabled:Boolean,
      type:String,
      fill:String
    },
    provide(){
      return {}
    },
    created(){},
    data() {
      return {};
    },
    computed:{
      tagShow(){
        return 'div'
      }
    },
    watch:{
    }
  };

</script>