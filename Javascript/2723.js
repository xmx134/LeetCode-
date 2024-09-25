/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */

// 题目描述：
// 给定两个 promise 对象 promise1 和 promise2，返回一个新的 promise。
// promise1 和 promise2 都会被解析为一个数字。
// 返回的 Promise 应该解析为这两个数字的和。

// 题目解析：
// 题目考察的是对promise的理解
// 当需要同时执行多个异步操作并等待它们全部完成后，通常会使用 Promise.all() 方法。
// Promise.all() 方法用于同时处理多个 Promise。
// 它以一个 Promise 数组（或可迭代对象）作为输入，并返回一个新的 Promise，
// 在输入数组中的所有 Promise 都已解析时才会解析。
// 请注意：Promise.all() 不仅接受 Promise 作为输入，还可以接受只包含数字的数组，
// 它将解析这些数字，例如：
// await Promise.all([1, 2, Promise.resolve(3), Promise.resolve(4)]).then((value) => {
//     console.log(value)
//   }, (error) => {
//     console.log(error)
//   })
// Promise.all()方法等待所有Promise解决（无论是fulfilled还是 rejected）。
// 如果所有 Promise 都被解决，返回的 Promise 也会被解决，
// 而输入 Promise 的已解析值将按照输入 Promise 的顺序作为数组可用。
// 如果任何 Promise 被拒绝，返回的 Promise 将被拒绝，
// 并将使用第一个被拒绝的Promise的原因。例如，下面的代码将解析为 'error'，
// 尽管其他 3 个项目都已正确解析。
// await Promise.all([1, 2, Promise.resolve(3), Promise.reject('error')]).then(
//     value => {
//       console.log(value);
//     },
//     error => {
//       console.log(error);
//     }
//     );
// 方法 1：使用 Promise.all
// 思路：
// 我们可以使用 Promise.all() 创建一个新的 Promise，
// 该 Promise 在 promise1 和 promise2 都被解决时解决。
// 算法：
// 在函数内部，我们使用 Promise.all() 创建一个新的 Promise ，
// 该 Promise 在 promise1 和 promise2 都被解决时解决。
// Promise.all() 将一个包含 Promises 的数组作为其参数。
// 使用 Promise.all() 时，我们将使用 await 关键字暂停函数的执行，
// 直到由 Promise.all() 返回的 Promise 被解决。它等待 promise1 和 promise2 都被满足。
// 一旦由 Promise.all() 返回的 Promise 被满足，
// promise1 和 promise2 的已解析值将以数组的形式可用。
// 使用解构赋值，分别将这些值分配给 res1 和 res2 变量。
// 最后，我们返回 res1 和 res2 的和。也可以将整个逻辑放在 try{} 和 catch{} 块中。
// 实现：
// 以下附上Promise.all()解法
// var addTwoPromises = async function(promise1, promise2) {
//     try {
//       const [res1, res2] = await Promise.all([promise1, promise2]);
//       return res1 + res2;
//     } catch (error) {
//       console.error(error);
//       throw error; // 重新抛出错误以保持将错误传播给调用者的行为
//     }
//   };

// 方法 2：仅使用 await
// 思路：
// addTwoPromises 函数被定义为一个异步函数，允许我们在其中使用 await 。
// 这种方法的直观思想是等待 promise1 和 promise2 的解析，
// 然后计算它们的已解析值，即我们可以直接在 Promise 上使用 await，然后返回和。
// 请注意：直接在 promise1 和 promise2 上使用 await 不如使用 Promise.all() 并行，
// 因为一个接一个地等待 Promise 将导致总解析时间较长，与使用 Promise.all() 并行等待相比。
// 算法：
// addTwoPromises 函数被定义为异步函数，使用 async 关键字。
// 这使我们可以在函数内部使用 await，以暂停执行，直到 Promises 被解决。
// 在函数内部，直接在 promise1 和 promise2 上使用 await 关键字。
// 这将暂停函数的执行，直到 Promises 被解决并且值可用。
// 一旦 Promises 被解决，我们获得它们各自的已解析值。然后，使用 + 运算符将它们的已解析值相加。
// 最后，我们可以返回一个新的 Promise，该 Promise 将以 promise1 和 promise2 的已解析值之和解决。
// 实现：

var addTwoPromises = async function (promise1, promise2) {
  try {
    return (await promise1) + (await promise2)
  } catch (error) {
    console.error(error)
    throw error
  }
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
