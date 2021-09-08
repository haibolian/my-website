<template>
  <div class="l-form-item">
    <div class="l-form-item_label"> {{ label }} </div>
    <div class="l-form-item_content">
      <slot></slot>
    </div>
    <div v-if="error" class="l-form-item_error">{{ error }}</div>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  name: "LFormItem",
  props: {
    label: String,
    prop: String,
  },
  inject: {
    form: '$l_form'
  },
  data() {
    return {
      error: ''
    };
  },
  computed: {
    
  },
  methods: {
    validate(){
      const value = this.form.model[this.prop]
      const rule = this.form.rules[this.prop]
      const description = { [this.prop]: rule}
      let schame = new Schema(description)
      
    }
  },
  created() {},
  mounted() {},
};
</script>

<style lang='scss' scoped>
</style>