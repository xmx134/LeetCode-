// 2665. 计数器 II

// 题目描述：
// 请你写一个函数 createCounter。这个函数接收一个初始的整数值 init。并返回一个包含三个函数的对象。
// 这三个函数是：
// increment() 将当前值加 1 并返回。
// decrement() 将当前值减 1 并返回。
// reset() 将当前值设置为 init 并返回。

// 题目分析：
// 题目考察闭包中应用函数的方式，最基础解法就是闭包直接返回三个函数
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let num = init
  return {
    increment: function () {
      return ++num
    },
    decrement: function () {
      return --num
    },
    reset: function () {
      num = init
      return num
    }
  }
}

// 也可以用到类来解决
// class Counter {
//     constructor(init) {
//       this.init = init;
//       this.currentCount = init;
//     }

//     increment() {
//       this.currentCount += 1;
//       return this.currentCount;
//     }

//     decrement() {
//       this.currentCount -= 1;
//       return this.currentCount;
//     }

//     reset() {
//       this.currentCount = this.init;
//       return this.currentCount;
//     }
//   }
//   var createCounter = function(init) {
//     return new Counter(init);
//   };

// 或者使用代理来解决
// var createCounter = function(init: number) {
//     let currentCount = init;
//     return new Proxy({}, {
//       get: (target, key) => {
//         switch(key) {
//           case "increment":
//             return () => ++currentCount;
//           case "decrement":
//             return () => --currentCount;
//           case "reset":
//             return () => (currentCount = init);
//           default:
//             throw Error("Unexpected Method")
//         }
//       },
//     });
//   };

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
