/**
 * @param {number} millis
 * @return {Promise}
 */

// 题目描述：
// 请你编写一个异步函数，它接收一个正整数参数 millis ，并休眠 millis 毫秒。
// 要求此函数可以解析任何值。

// 题目解析：
// 最难的应该是搞懂题目的意思了，结合题目给的注释和示例，才能明白题目要一个结合了setTimeout和
// promise的函数。函数过程是使用setTimeout来延迟后续函数执行，返回值是一个promise即可。

async function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis))
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
