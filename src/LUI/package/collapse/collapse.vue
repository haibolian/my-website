<script>
import { defineComponent, onMounted, ref, h } from 'vue'
export default defineComponent({
  name:'LCollapse',
  componentName: 'LCollapse',
  props: {
    accordion: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: [Array, String],
      default: () => [],
      validator: (value)=>{
        
      }
    }
  },
  setup(props, ctx){


    return () => [
      h()
    ]
  }
})
</script>
