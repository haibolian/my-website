<script>
import { computed, defineComponent } from 'vue'
export default defineComponent({
  name:'LColorIcon',
  componentName: 'LColorIcon',
  props:{
    iconName: {
      type: String,
      default: null
    }
  },
  setup(props, ctx){
    const href = computed(()=>{
      const icon = props.iconName
      return icon ? '#color-' + icon : null
    })
    return {
      href
    }
  },
  render(){
    return (
      <span class='l-color-icon'>
        { this.href ?
          <svg class='l-color-icon-svg' aria-hidden='true'>
            <use xlink:href={ this.href }></use>
          </svg>
        : null }
      </span>
    )
  }
})
</script>