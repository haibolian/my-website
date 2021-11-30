// 奇数
export function isOddNumber(num: number) : boolean {
  if(num === Infinity || num === -Infinity) throw Error('infinity is a invalid param')
  return !!(num % 2)
}

// 偶数
export function isEvenNumber(num: number) : boolean {
  if(num === Infinity || num === -Infinity) throw Error('infinity is a invalid param')
  return !(num % 2)
}
