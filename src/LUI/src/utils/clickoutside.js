// 如果给每个组件单独设置一个监听事件，那么会有很多个监听事件
// 那么可以只设置一个监听事件，该监听事件循环所需要监听的组件，并执行响应的处理方法
const ctx = '@@l-clickoutside'

let seed = 0
let nodeList = []
let startClick
document.addEventListener('mousedown', e=> (startClick = e))
document.addEventListener('mouseup',(e)=>{
  nodeList.forEach(node=> node[ctx].documentHandler(e,startClick))
})

function createDocumentHandler(el,binding,vnode){
  return function(mouseup={},mousedown={}){
    if(
      !mouseup ||
      !mousedown ||
      el === mouseup.target ||
      el.contains(mousedown.target) ||
      el.contains(mouseup.target)
    ) return
    
    el[ctx] && el[ctx].bindingFn && el[ctx].bindingFn();
    // if (binding.expression &&
    //   el[ctx].methodName &&
    //   vnode.context[el[ctx].methodName]) {
    //   vnode.context[el[ctx].methodName]();
    // } else {
    //   el[ctx].bindingFn && el[ctx].bindingFn();
    // }

  }
}

export default {
  beforeMount(el,binding,vnode){
    nodeList.push(el)
    const id = seed++
    el[ctx] = {
      id,
      methodName : binding.expression,
      bindingFn : binding.value,
      documentHandler: createDocumentHandler(el,binding,vnode)
    }
  },
  updated(el,binding,vnode){
    el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
    el[ctx].methodName = binding.expression;
    el[ctx].bindingFn = binding.value;
  },
  unmounted(el){
    let len = nodeList.length
    for( let i = 0 ; i < len ; i++){
      if(el[ctx].id === nodeList[i][ctx].id){
        nodeList.splice(i,1)
        break
      }
    }
    Reflect.deleteProperty(el,ctx)
  }
}