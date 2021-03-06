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
// 针对对象循环使用 WeakMap ， 因为 WeakMap 只接受object作为键名，其中的引用类型都是弱引用类型，且不计入垃圾回收机制
export function clonedeep(target, hash = new WeakMap()){
  if( target && target.constructor === Date ) return new Date(target)
  if( target && target.constructor === RegExp ) return new RegExp(target)
  if(typeof target === 'object' && target !== null){
    if(hash.has(target)) return hash.get(target)
    let allDescp = Object.getOwnPropertyDescriptors(target)
    let cloneTarget = Array.isArray(target) ? 
      [] : Object.create(Object.getPrototypeOf(target),allDescp)
    hash.set(target,cloneTarget)
    for (const key of Reflect.ownKeys(target)) {
      // target[key] === target ?  // 对于对象循环，也可通过做判断来解决
      // cloneTarget[key] = cloneTarget :
      cloneTarget[key] = clonedeep(target[key],hash )
    } 
    return cloneTarget
  }else{
    return target
  }
}