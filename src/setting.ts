/**
 * @type { boolean }
 * @description 竖版诗词
 */
const verticalVerse = localStorage.getItem('VERTICALVERSE') == 'true' ? true : false
/**
 * @type { boolean }
 * @description 保留颜色名称
 */
const keepColorName = localStorage.getItem('KEEPCOLORNAME') == 'true' ? true : false

export { verticalVerse, keepColorName}
