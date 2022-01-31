<template>
  <div class="l-dock-boat" :class="isCurrent" :title="title" @click="clickBoat">
    <slot>
      <l-color-icon v-if="svg" :icon-name="icon"></l-color-icon>
      <i v-else :class="`l-icon icon-${icon}`"></i>
    </slot>
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance, inject } from 'vue'
import { useRoute, useRouter } from "vue-router"
import LColorIcon from "../color-icon/color-icon"
import BOAT from './store/boat'
export default defineComponent({
  name:'LDockBoat',
  componentName:'LDockBoat',
  components:{
    LColorIcon
  },
  props:{
    title: {
      type: String
    },
    icon: {
      type: String
    },
    to: {
      type: String
    },
    svg: {
      type: Boolean
    }
  },
  setup(props, ctx){
    const router = useRouter()
    const { parent } = getCurrentInstance()
    const next = () => {
      props.to && router.push(props.to)
    }
    const clickBoat = (ev) => {
      parent.emit('boat-click', next, ev)
    }
    
    const isCurrent = () => {

    }
    return {
      clickBoat,
      isCurrent
    }
  }
})
</script>
