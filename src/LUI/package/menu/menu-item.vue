<template>
  <li class="l-menu-item">
    {{ title }}
  </li>
</template>

<script>
export default {
  name:'LMenuItem',
  props:{
    title:{
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>

</style>