// import { toFixedPlus } from "../../src/utils/number"
// Number.prototype.toFixedPlus = toFixedPlus
export function handleMinus(target, minus){
  if(minus) return target;
  if(typeof target === 'number' && !isNaN(target)){
    target = target.toString()
  }
  return target.replace(/-/g, '')

}

export function handlePrecision(target, precision){
  if(target !== '' && typeof precision == 'number') {
    target = Number(target).toFixed(precision)
  }
  return target
}

export function handleFormat(target, isFormatted){
  if(target === '') return target
  return target.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
}

