<script>
import { computed, defineComponent, ref, Teleport } from 'vue'
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
    },
    showHidden: {
      type: Boolean
    }
  },
  // todo: 1. 当前节点高亮 2. 导航栏项目较多时样式问题 3. 拖拽
  setup(props, ctx){
    // dock 栏位置
    const positionClass = computed(()=>{
      const { position } = props
      return ['top', 'right', 'bottom', 'left'].includes(position) ? `l-dock-${position}` : 'l-dock-bottom'
    })
    
    // 控制隐藏按钮的显示
    let mouseoverDock = ref(false)
    const showHiddenIcon = computed(()=>{
      return props.showHidden && mouseoverDock.value ? '' : 'none'
    })

    // 控制 dock 栏的显示
    let showDock = ref(true)
    const hiddenDock = () => {
      showDock.value = false
    }

    // bank
    const clickBank = () => {
      showDock.value = true
    }

    return {
      positionClass,
      showHiddenIcon,
      showDock,
      mouseoverDock,
      hiddenDock,
      clickBank,
    }
  },
  render(){
    // 隐藏按钮图标
    const hiddenElement = (
      <span style={ { display: this.showHiddenIcon } } class="l-dock-hidden" onClick={ this.hiddenDock }>
        <i class="l-icon icon-error"></i>
      </span>
    )
    const dock = (
      <div class="l-dock"
        class={this.positionClass} 
        onMouseover={ ()=> this.mouseoverDock = true } 
        onMouseleave={ ()=> this.mouseoverDock = false }
      >
        { this.$slots.default?.() }
        { this.showHidden && hiddenElement }
      </div>
    )
    const bank = (
      <div class="l-dock-bank" onClick={ this.clickBank }>
        <l-color-icon icon-name='category'></l-color-icon>
      </div>
    )
    return (
      <teleport to='body'>
        { this.showDock ? dock : bank}
      </teleport>
    )
  }
})
</script>