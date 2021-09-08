<template>
  <div class="l-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LForm",
  props: {
    model: {
      type: Object,
      default() {
        return {};
      },
    },
    rules:{
      type: Object,
      default(){
        return {}
      }
    },
  },
  provide(){
    return {
      $l_form: this
    }
  },
  data() {
    return {

    };
  },
  methods: {

  },
  created() {

  },
  mounted() {

  },
};
</script>

<style lang='scss' scoped>

</style>