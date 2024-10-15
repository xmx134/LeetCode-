// 2715. 执行可取消的延迟函数
// 给定一个函数 fn ，一个参数数组 args 和一个以毫秒为单位的超时时间 t ，
// 返回一个取消函数 cancelFn 。
// 在 cancelTimeMs 的延迟后，返回的取消函数 cancelFn 将被调用。
// setTimeout(cancelFn, cancelTimeMs)
// 最初，函数 fn 的执行应该延迟 t 毫秒。
// 如果在 t 毫秒的延迟之前调用了函数 cancelFn，它应该取消 fn 的延迟执行。
// 否则，如果在指定的延迟 t 内没有调用 cancelFn，则应执行 fn，并使用提供的 args 作为参数。
type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue }
type Fn = (...args: JSONValue[]) => void

function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
  const timeoutId = setTimeout(() => {
    fn.apply(null, args)
  }, t)
  const cancelFn: Function = () => {
    clearTimeout(timeoutId)
  }
  return cancelFn
}

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
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
 *  const maxT = Math.max(t, cancelTimeMs);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */
// 你能解释在 setTimeout 回调中使用的 apply 方法的作用吗？
// apply 方法用于使用提供的 args 数组作为参数调用延迟执行的函数 fn。
// 它允许我们将 args 数组中的参数动态传递给 fn，以确保在最终执行 fn 时传递正确的参数。
// 此外，使用 null 作为第一个参数的 apply 允许我们在不指定特定上下文（this 值）的情况下调用函数。
// 由于延迟执行的函数不依赖于特定的上下文，因此使用 null 是合适的。

// 如何处理延迟函数需要特定上下文（this 值）的执行情况？
// 在延迟函数依赖特定上下文（this 值）的情况下，可以使用 bind 方法将所需的上下文绑定到 fn。
// 这会创建一个具有指定上下文的新函数，然后您可以将绑定的函数传递给 setTimeout 以进行延迟执行。

// 是否可以修改实现以支持在执行过程中动态更改延迟？
// 是的，可以改进可取消函数的实现以支持动态更改延迟。您可以修改实现以存储计时器ID，
// 并在设置新延迟之前使用 clearTimeout 来清除计时器。这样，您可以动态更改延迟。

// 有哪些适用于带延迟的可取消函数的潜在用例？
// 具有延迟的可取消函数在需要在一定延迟后执行某个操作的情况下非常有用，
// 但在可能需要在执行前取消该操作的情况下。例如，在用户界面中的场景中，
// 用户执行某个动作后，可能需要在一定延迟后显示通知。
// 但是，如果用户执行了使通知无关紧要的不同动作，可以取消通知的计划显示。
// 另一个场景可能是在游戏环境中，需要在延迟后执行某个动作，
// 但是中间的用户动作或游戏事件可能需要取消计划的动作。
// 需要注意的是，这些用例与防抖或节流的情况不同，
// 后者旨在控制函数调用的速率，而不是安排和取消可能的操作。

// 使用 setTimeout 来安排延迟执行的函数的执行的潜在缺点或限制是什么？
// 一个限制是 setTimeout 不是精确的，可能受到系统负载等其他因素的影响。
// 如果需要精确的定时，一些情况下会使用替代方法，如 Web Workers 或 Web 动画 API，
// 但它们用途不同，不能总是直接替代 setTimeout。
// 使用 performance.now() 方法可以实现更精确的时间控制，它提供了子毫秒分辨率的时间戳测量，
// 但仍然不能保证函数会在指定的延迟后运行，因为 JavaScript 是单线程的。

// 是否可以修改可取消函数以支持在执行过程中可以动态更改的延迟？
// 是的，可以增强可取消功能以支持延迟的动态变化。
// 您可以修改实现以存储超时 ID，并在使用更新的延迟设置新的超时之前使用 clearTimeout。

// 你能解释一下“防抖”的概念吗？它与可取消的延迟功能有何关系？
// 防抖是一种编程实践，用于确保耗时的任务不会如此频繁地触发，
// 这在处理用户输入事件等可能频繁而快速触发事件的情况下尤其有用。
// 防抖的核心概念是在执行函数之前设置延迟，然后在延迟到期之前每次请求函数时重置该延迟。
// 虽然带有延迟的可取消函数与防抖有相似之处，因为两者都涉及可以取消的延迟函数执行，
// 但它们并没有内在联系。可取消函数更适合动作或计算在执行前就被废弃的情况。
// 另一方面，防抖通常不涉及显式创建可取消函数；相反，它直接在函数内清除并重置计时器。
