// 奇数
export function isOddNumber(num) {
  if(num === Infinity || num === -Infinity) throw Error('infinity is a invalid param')
  return !!(num % 2)
}

// 偶数
export function isEvenNumber(num) {
  if(num === Infinity || num === -Infinity) throw Error('infinity is a invalid param')
  return !(num % 2)
}

