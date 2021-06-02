/**
 * @getType 获取数据类型
 * @returns 返回相应的数据类型（小写格式) example: object array null string
 */
export function getType(target){
  let type = typeof target
  if(type !== 'object') return type
  if(target && target.constructor) return target.constructor.name.toLowerCase()
  return Object.prototype.toString.call(target).replace(/^\[object (\S+)\]$/,'$1').toLowerCase()  // 此行方式不能识别自定义的class的名称
}

/**
 * @cloneshallow 浅拷贝
 */
export function cloneshallow(target){
  if(typeof target === 'object' && target !== null){
    let cloneTarget = Array.isArray(target) ? [] : {}
    for (const key in cloneTarget) {
      if (target.hasOwnProperty(key)) {
        cloneTarget[key] = target[key]
      }
    }
    return cloneTarget
  }else{
    return target
  }
}

/**
 * @clonedeep 深拷贝
 */
export function clonedeep(target){
  if(typeof target === 'object' && target !== null){
    let cloneTarget = Array.isArray(target) ? [] : {}
    
  }else{
    return target
  }
}