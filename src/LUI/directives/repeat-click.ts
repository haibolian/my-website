import type { ObjectDirective } from "vue"

export default {
  beforeMount(el,binding){
    let interval: any = null
    let startTime: number
    const handler = ()=> binding.value && binding.value()
    function clear(){
      // 如果鼠标down和up间隔小于100，定时器还没执行就被clear了
      if(Date.now() - startTime < 100) handler()
      clearInterval(interval)
      interval = null
    }
    el.addEventListener('mousedown', (e: any)=>{
      startTime = Date.now()
      interval = setInterval(handler,100)
    })
    el.addEventListener('mouseup',clear)
  }
} as ObjectDirective