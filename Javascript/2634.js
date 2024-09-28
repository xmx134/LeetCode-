// 给定一个整数数组 arr 和一个过滤函数 fn，并返回一个过滤后的数组 filteredArr 。
// fn 函数接受一个或两个参数：
// arr[i] - arr 中的数字
// i - arr[i] 的索引
// filteredArr 应该只包含使表达式 fn(arr[i], i) 的值为 真值 的 arr 中的元素。
// 真值 是指 Boolean(value) 返回参数为 true 的值。
// 请在不使用内置的 Array.filter 方法的情况下解决该问题。

// 题目解析：考察对Array.filter的理解，使用Array.push + 迭代器实现一个最简易的Aray.filter即可
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let filteredArr = []
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i])
    }
  }
  return filteredArr
}
// 进阶：预分配内存
// 将元素推入数组可能是一个慢操作。这是因为数组可能没有足够的空间来存储新元素，因此需要调整大小。
// 通过使用 new Array(size) 初始化数组，可以避免这些高代价的调整大小操作。
// 最后，我们将通过从数组末尾弹出来删除空元素。
// 请注意，当原始数组中移除的元素较少时，此算法的性能最佳。
// var filter = function (arr, fn) {
//   let size = 0
//   const newArr = new Array(arr.length)
//   for (let i = 0; i < arr.length; ++i) {
//     if (fn(arr[i], i)) {
//       newArr[size] = arr[i]
//       size++
//     }
//   }
//   // 确保新数组的长度为 size
//   while (newArr.length > size) {
//     newArr.pop()
//   }
//   return newArr
// }
