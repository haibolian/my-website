<template>
  <div class="l-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
import { controlleds,controllers,mutations } from './store'
  export default {
    name:'LCheckboxGroup',
    componentName:'LCheckboxGroup',
    emits:['change', 'update:modelValue'],
    props:{
      modelValue:Array,
      allDye:Boolean,
      controlId:String,
      disabled:Boolean,
      min: { type:Number, default:undefined },
      max:{ type:Number, default:undefined }
    },
    data() {
      return {};
    },
    created(){
      this.controlId ? mutations.setControlleds(this.controlId,this) : ''
    }
  };

</script>