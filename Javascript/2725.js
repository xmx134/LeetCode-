// 2725. 间隔取消

// 题目描述：
// 现给定一个函数 fn，一个参数数组 args 和一个时间间隔 t，返回一个取消函数 cancelFn。
// 在经过 cancelTimeMs 毫秒的延迟后，将调用返回的取消函数 cancelFn。
// setTimeout(cancelFn, cancelTimeMs)
// 函数 fn 应立即使用参数 args 调用，然后每隔 t 毫秒调用一次，
// 直到在 cancelTimeMs 毫秒时调用 cancelFn。

// 题目解析：
// 这道题是实际场景抽象出来的题目，实际场景如下：

// 编辑应用中的自动保存： 在使用文本编辑器、文档处理器或其他内容创建工具时，
// 经常需要有一个自动保存功能，以定期保存更改。你可以使用间隔取消来安排定期自动保存。
// 如果用户明确保存文档或退出应用程序，你可以取消间隔以防止不必要的保存操作。

// 动画和幻灯片播放定时： 在开发过程中，你可能想要创建动画或幻灯片，
// 以自动在不同状态或图像之间进行切换。你可以使用间隔取消来控制这些切换的时间。
// 如果用户与动画或幻灯片进行交互，你可以取消间隔以暂停或停止自动切换。

// 注意： 对于更复杂或性能关键的动画，建议使用 requestAnimationFrame 方法，
// 而不是 setInterval，因为它提供更好的性能和效率。

// 基于时间的提醒： 考虑一个任务管理应用程序，用户可以为特定任务设置提醒。
// 你可以使用间隔取消来触发指定间隔的提醒。一旦用户确认了提醒或任务已完成，
// 你可以取消间隔以停止后续的提醒。

// 往小了说，这里就是一个练习setInterval和clearInterval，
// 以及了解和区分setInterval与setTimeout的场景。
// 解答如下：
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  fn(...args)
  const interval = setInterval(() => fn(...args), t)
  return function () {
    clearInterval(interval)
  }
}

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 2;
 *  const args = [4], t = 35, cancelTimeMs = 190;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [
 *                           //     {"time":0,"returned":8},
 *                           //     {"time":35,"returned":8},
 *                           //     {"time":70,"returned":8},
 *                           //     {"time":105,"returned":8},
 *                           //     {"time":140,"returned":8},
 *                           //     {"time":175,"returned":8}
 *                           // ]
 *  }, cancelTimeMs + t + 15)
 */
