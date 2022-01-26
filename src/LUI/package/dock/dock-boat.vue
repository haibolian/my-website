<template>
  <div class="l-dock-boat" :title="title" @click="clickBoat">
    <slot>
      <i :class="`l-icon icon-${icon}`"></i>
    </slot>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount, onMounted, ref, getCurrentInstance } from 'vue'
import { useRoute, useRouter } from "vue-router"
export default defineComponent({
  name:'LDockBoat',
  componentName:'LDockBoat',
  components:{},
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

    return {
      clickBoat
    }
  }
})
</script>