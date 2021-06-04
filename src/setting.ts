/**
 * @type { String }
 * @description 书写方式：horizontal 为水平方向， vertical 为竖向书写
 */
const writingMode = localStorage.getItem('WRITINGMODE') || 'horizontal';

export { writingMode }
