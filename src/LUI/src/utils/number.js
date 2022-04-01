// Number 的 toFixed 有问题，它并不会正常的四舍五入，它在四舍五入的时候有一些规则，所以要重新定义我们需要的正常的四舍五入
export function toFixedPlus(target, precision, isRounding = true){
  if(typeof target !== 'number') return console.error('target is not a number at toFixedPlus')
  if(precision ==undefined ) return target
  // 先利用 toFixed 将数字小数化， 得到小数点前后数字组成的数组
  const virtualValue = target.toFixed(precision + 2)
  const arrValue = virtualValue.split('.')
  let integer = Number(arrValue[0]) 
  // 得到小数位。以及精度后的以为，作为进位的工具。
  let decimals = arrValue[1].substr(0, precision)
  //  是否需要进位
  const isNeedCarry = Number(arrValue[1].substr(precision, 1)) >= 5

  if(precision === 0){
    target = isNeedCarry ? (++integer).toString() : integer
  }else{
    if(isNeedCarry) ++decimals 
    
    target = integer.toString() + '.' + decimals
  }

  return target
  
}