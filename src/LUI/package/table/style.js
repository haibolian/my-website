import { isOnlyNumber } from "../../src/utils/type"


const getAlignClass = col => ['left', 'center', 'right'].includes(col.align) ? `is-${col.align}` : 'is-left'

const getValidHeight = target => {
  if(typeof target == 'number' && !isNaN(target)) return `${target}px`
  if(typeof target !== 'string') return '40px'
  return target
  // if(isOnlyNumber(target)){
  //   return `${target}`
  // }else{
  //   const try_delete_px_result = target.replace('px', '')
  //   if(isOnlyNumber(try_delete_px_result)){
  //     return `${try_delete_px_result}px`
  //   }else{
  //     return '40px'
  //   }
  // }
}

export {
  getAlignClass,
  getValidHeight
}