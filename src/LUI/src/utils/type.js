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