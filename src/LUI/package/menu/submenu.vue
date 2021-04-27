<template>
  <div class="l-submenu">
    <slot name="title">
      <li>{{ title }}</li>
    </slot>
    <ul class="l-submenu-items">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name:'LSubmenu',
  props:{
    title:{
      type:String
    }
  }
}
</script>

<style lang="scss" scoped>
.l-submenu-items{
  li{
    padding: 0 45px;
  }
}
</style>
