const getAlignClass = col => ['left', 'center', 'right'].includes(col.align) ? `is-${col.align}` : 'is-left'

export {
  getAlignClass
}
