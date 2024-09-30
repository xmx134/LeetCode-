// 题目：转换数组中的每个元素
// 编写一个函数，这个函数接收一个整数数组 arr 和一个映射函数  fn ，通过该映射函数返回一个新的数组。
// 返回数组的创建语句应为 returnedArray[i] = fn(arr[i], i) 。
// 请你在不使用内置方法 Array.map 的前提下解决这个问题。

// 题目解析：
// 题目中最关键参数是arr[i]、i 也就是数组元素的key和value
// 利用for...in...获取数组的key，再把key传入回调函数fn(arr[i],[i])即可
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  for (const key in arr) {
    arr[key] = fn(arr[key], parseInt(key))
  }
  return arr
}

// 性能讲解：
// 方法 1：将值写入初始为空的数组
// 在 JavaScript 中，你可以读取和写入不在范围 [0, arr.length) 内的索引。与普通对象一样，
// 访问不存在的索引会返回 undefined。通常不鼓励写入不存在的索引，因为除了令人困惑之外，
// 它还会导致性能慢且不可预测。这种方法对 500 万个元素需要约 250 毫秒。
// var map = function(arr, fn) {
//     const newArr = [];
//     for (let i = 0; i < arr.length; ++i) {
//     newArr[i] = fn(arr[i], i);
//     }
//     return newArr;
//     };
// 方法 2：使用 for...in 循环
// for...in 循环更常用于遍历对象的键。但是，它们也可以用于遍历数组的索引。这种方法之所以引人注目，
// 是因为它遵守稀疏数组。例如，如果你编写了 let arr = Array(100); arr[1] = 10;，
// 这种方法只会转换一个元素。这种方法对 500 万个元素需要约 1000 毫秒。值得注意的是，
// 这是最接近内置 Array.map 工作方式的方法。因为 Array.map 需要处理稀疏数组，
// 所以通常比一个假设数组不稀疏的最佳自定义实现慢几倍。
// var map = function(arr, fn) {
//     const newArr = new Array(arr.length);
//     for (const i in arr) {
//     newArr[i] = fn(arr[i], Number(i));
//     }
//     return newArr;
//     };
// 方法 3：将值推入数组
// JavaScript 数组的命名会让人困惑，因为传统上数组具有固定大小。然而，在 JavaScript 中，
// 数组可以附加元素，平均时间复杂度为 O(1)。
// 你可以通过逐个将每个元素附加到末尾来构建一个转换后的数组。
// 这种方法对 500 万个元素需要约 200 毫秒。
// var map = function(arr, fn) {
//     const newArr = [];
//     for (let i = 0; i < arr.length; ++i) {
//     newArr.push(fn(arr[i], i));
//     }
//     return newArr;
//     };
// 方法 4：预先分配内存
// 你可以使用 new Array(len) 构造函数创建一个具有一些长度的空数组。请注意，内存已分配，
// 但数组实际上不包含任何元素。与将元素附加到数组末尾相比，这种技术性能更好。
// 这是因为每当你将值推入数组时，数组可能没有分配足够的内存，因此需要重新分配内存。
// 这是一个昂贵的操作。初始化内存可以获得更好的性能。这种方法对 500 万个元素需要约 40 毫秒。
// var map = function(arr, fn) {
//     const newArr = new Array(arr.length);
//     for (let i = 0; i < arr.length; ++i) {
//     newArr[i] = fn(arr[i], i);
//     }
//     return newArr;
//     };
// 方法 5：32 位整数数组
// JavaScript 允许你使用类型化数组（typed arrays）。这不像普通的 JavaScript 数组，
// 因为它们只允许特定的数据类型，并且它们的大小不能被改变。
// 这些是在想要以节省内存的方式存储大量数据时有用的工具。传统数组可能会占用大量内存，
// 因为它们不是固定大小的，可以存储任意数据。这种方法对 500 万个元素需要约 20 毫秒。
// var map = function(arr, fn) {
// const newArr = new Int32Array(arr.length);
// for (let i = 0; i < arr.length; ++i) {
// newArr[i] = fn(arr[i], i);
// }
// return newArr;
// };
// 方法 6：内存中的转换
// 为了实现最佳性能，你可以简单地重用已分配给第一个数组的内存。需要注意的是，
// 通常不鼓励函数修改传递给它的值。这可能导致用户意外的副作用和错误。
// 内置的 Array.map 不会修改原始数组。这种方法对 500 万个元素需要约 10 毫秒。
// var map = function(arr, fn) {
// for (let i = 0; i < arr.length; ++i) {
// arr[i] = fn(arr[i], i);
// }
// return arr;
// };
