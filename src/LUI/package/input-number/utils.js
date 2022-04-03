// import { toFixedPlus } from "../../src/utils/number"
// Number.prototype.toFixedPlus = toFixedPlus
import { isOddNumber } from "../../src/utils/math";

export function handleMinus(target, minus){
  if(typeof target === 'number' && !isNaN(target)){
    target = target.toString()
  }
  if(minus){
    // 负号去重
    const minusCount = target.match(/-/g)?.length || 0
    target = target.replace(/-/g, '')
    if(isOddNumber(minusCount)) {
      target = '-'.concat(target)
    }
  }else{
    target = target.replace(/-/g, '')
  }
  return target
}

export function handlePrecision(target, precision){
  if(target !== '' && typeof precision == 'number') {
    target = Number(target).toFixed(precision)
  }
  return target
}

export function handleFormat(target, isFormatted){
  if(!isFormatted || target === '') return target
  return target.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
}

export function handleInputtingValue(target, {minus, precision ,isFormatted}){
  target = handleMinus(target, minus);
  const arrValue = target.split('.');
  let decimals = arrValue[1]
  if(decimals){
    decimals = decimals.substr(0, precision)
    target = [arrValue[0], decimals].join('.')
  }
  target = handleFormat(target, isFormatted)
  return target;
  
  
}


