// 题目描述：
// 请你编写一个函数，它接收一个函数数组 [f1, f2, f3，…， fn] ，
// 并返回一个新的函数 fn ，它是函数数组的 复合函数 。
// [f(x)， g(x)， h(x)] 的 复合函数 为 fn(x) = f(g(h(x))) 。
// 一个空函数列表的 复合函数 是 恒等函数 f(x) = x 。
// 你可以假设数组中的每个函数接受一个整型参数作为输入，并返回一个整型作为输出。

// 解题思路：
// 把functions当做一个数组，compose要做的事情就是从末位往前一次读取数组中的值，
// 唯一不同的是，读取参数的方式变成调用方法的形式，知道方法后我们就行动吧。
// 方式一：for循环
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    if (functions.length === 0) return x
    for (let i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x)
    }
    return x
  }
}
// 方式二：for...of...循环配合array.reverse()
// var compose = function (functions) {
//     return function (x) {
//       if (functions.length === 0) return x;
//       let input = x;

//       for (const func of functions.reverse()) {
//         input = func(input);
//       }

//       return input;
//     };
//   };
// 方式三：Array.reduce数组累加器，不过是Array.reduceRight，从右向左实现累加器
// var compose = function(functions) {
//     return x => functions.reduceRight((acc, f) => f(acc), x);
// };

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
