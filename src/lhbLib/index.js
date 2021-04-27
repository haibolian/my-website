import LButton from './package/button/index.vue'
import LMenu from './package/menu/menu.vue'
import LSubMenu from "./package/menu/submenu.vue"
import LMenuItem from "./package/menu/menu-item.vue"
import LInput from "./package/input/index.vue"
import LRadio from './package/radio/radio.vue'
import LRadioGroup from './package/radio/radio-group.vue'
import LCheckbox from './package/checkbox/checkbox.vue'
import LCheckboxGroup from './package/checkbox/checkbox-group.vue'
import LSelect from "./package/select/select.vue"
import LOption from "./package/select/option.vue"
let components = [
  LButton,
  LMenu,
  LSubMenu,
  LMenuItem,
  LInput,
  LRadio,
  LRadioGroup,
  LCheckbox,
  LCheckboxGroup,
  LSelect,
  LOption
]

const install = (Vue)=>{
  components.forEach(component=>{
    Vue.component(component.name,component)
  })
}

export default { install }