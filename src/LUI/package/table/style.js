import { isOnlyNumber } from "../../src/utils/type"

const getCellClass = (col, index) => {
  return [
    ['left', 'center', 'right'].includes(col.align) ? `is-${col.align}` : '',
    `l-table-column_${index + 1}`
  ]
}


const getValidHeight = target => {
  if(typeof target !== 'string') return ''

  const matcher = /^\d*$|^\d*(px|em|pt|pc|mm|cm|q|rem|ex|ch|vh|vw|vmin|vmax|in|fr)$/
  return isOnlyNumber(target) ? `${target}px` : matcher.test(target) ? target : ''
}

export {
  getCellClass,
  getValidHeight
}