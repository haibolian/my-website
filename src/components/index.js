// 注册全局组件
import SvgIcon from './SvgIcon/index.vue'

let components = [
  SvgIcon
]

const install = (app)=> {
  components.forEach(component=>{
    app.component(component.name,component)
  })
}

export default { install }
