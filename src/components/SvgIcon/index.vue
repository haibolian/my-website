<template>
  <svg :class="classNames" aria-hidden="true">
    <use :xlink:href="iconClass"></use>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      required: true
    },
    className: {
      type: [Array,String]
    }
  },
  computed: {
    iconClass() {
      return `#icon-${this.iconName}`
    },
    classNames(){
      let defaultClass = ['svg-icon']
      if(typeof this.className === 'string'){
        defaultClass.push(this.className)
        return defaultClass
      }else{
        return defaultClass.concat(this.className)
      }
    }
  }
}
</script>

<style>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>