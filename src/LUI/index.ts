let components: any[] = []
let files = require.context('./package',true,/\.vue$/)
files.keys().forEach(key=>{
  components.push(files(key).default)
})

const install = (Vue:any)=>{
  components.forEach(component=>{
    Vue.component(component.name,component)
  })
}

import './icon-color.js'

export default { install }
