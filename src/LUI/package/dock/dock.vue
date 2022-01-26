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
      type: String,
      validator(val){
        return ['left', 'right', 'top', 'bottom'].includes(val)
      }
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
          <span class="l-dock-close">
            <i class="l-icon icon-minus-circle"></i>
          </span>
        </div>
      </teleport>
    )
  }
})
</script>