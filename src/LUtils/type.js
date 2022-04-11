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
 * @isOnlyNum 判断某个字符串中是否只含有数字
 */
 function isOnlyNumber(str){
  if(typeof str === 'number' && !isNaN(str)) return console.warn('isOnlyNumber: str is not a string, but a number') || true
  if(typeof str !== 'string') return new Error('str is not a string')
  const matcher = /^[\d]*$/
  return matcher.test(str)
}

export {
  isOnlyNumber
}