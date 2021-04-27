// 查找父组件下，componentName的组件
export function findLChildrens(parent,componentName){
  if(!parent || !componentName){
    console.error("function findLChildrens parent's parent and componentName can't be undefined");
    return []
  }
  let childrens = []
  if(parent.$children.length > 0){
    parent.$children.forEach(child=>{
      child.$options.componentName === componentName ? childrens.push(child) : child.$children.length > 0 ? findLCheckbox(child) : ''
    })
  }
  return childrens
}
