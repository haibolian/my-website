<script>
import { computed, defineComponent, onBeforeMount, onMounted, ref, Teleport } from 'vue'
export default defineComponent({
  name:'LDock',
  componentName: 'LDock',
  emits:['boat-click'],
  components:{
    Teleport
  },
  props:{
    position: {
      type: String
    }
  },
  setup(props, ctx){
    const positionClass = computed(()=>{
      const { position } = props
      return ['top', 'right', 'bottom', 'left'].includes(position) ? `l-dock-${position}` : 'l-dock-bottom'
    })
    
    return {
      positionClass
    }
  },
  render(){
    return (
      <teleport to='body'>
        <div class="l-dock" class={this.positionClass}>
          { this.$slots.default() }
        </div>
      </teleport>
    )
  }
})
</script>