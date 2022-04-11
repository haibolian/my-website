// 查找父组件下，componentName的组件
export function findChildrens(parent,componentName){
  if(!parent || !componentName){
    console.error("function findChildrens parent's parent and componentName can't be undefined");
    return []
  }
  let childrens = []
  if(parent.$children.length > 0){
    parent.$children.forEach(child=>{
      child.$options.componentName === componentName ? childrens.push(child) : child.$children.length > 0 ? findLCheckbox(child) : ''
    })
  }
  return childrens
}


/**
 * @findInObjArr 在对象数组中查找多个指定字段值
 * @param array Array: 在该数组中执行查找
 * @param key String: 查找字段名称为 key 的项
 * @param valueArr Array: 要查找的所有的key的value所组成的数组
 * @param ... String: 从第四个参数开始，传入层级字段，支持查找多个层级下的某一项，给多少层，查第多少层
 * @return Iterable 返回的是一个迭代器对象 https://es6.ruanyifeng.com/#docs/iterator
 * @description 1. 可以 new 一个 Set 将该迭代器生成一个 Set 然后转换成 Array，
 *              例如 let arr = [...new Set(findInObjArr(array, key, valueArr,'level1','level2','level3','level4'))]
 *              上例中的 arr 就是所查找的各个项所组成的数组
 *              2. 也可以使用 for of 直接遍历迭代器操作对象
 *              例如：
 *              for ( let item of findInObjArr(array, key, valueArr,'level1','level2','level3','level4') ){
 *                console.log( item )
 *              }
 */
 export function* findInObjArr(array, key, valueArr) {
  for (const element of array) {
    let levelArr = [].slice.call(arguments, 3)
    if (levelArr[0]) {
      let nextLevelField = levelArr.splice(0, 1)[0]
      if(element[nextLevelField]){
        for (const nextElement of findInObjArr(element[nextLevelField], key, valueArr, ...levelArr)) {
          yield nextElement
        }
      }
    } else {
      if (valueArr.includes(element[key])) yield element
    }
  }
}