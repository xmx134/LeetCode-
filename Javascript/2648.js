// 2648. 生成斐波那契数列

// 请你编写一个生成器函数，并返回一个可以生成 斐波那契数列 的生成器对象。
// 斐波那契数列 的递推公式为 Xn = Xn-1 + Xn-2 。
// 这个数列的前几个数字是 0, 1, 1, 2, 3, 5, 8, 13 。

// 解题思路：本题考察的是JavaScript中的生成器功能，我们先介绍一下生成器和它的使用场景
// 想看题目答案的直接拉到最后就可以了。

// 1、定义和基本概念
// 在 JavaScript 中，Generator（生成器）是一种特殊的函数类型，通过function*语法定义。
// 它提供了一种迭代器（Iterator）的实现方式，允许你暂停和恢复函数的执行。
// 从本质上讲，生成器是一个返回迭代器对象的函数。这个迭代器对象有一个next()方法，
// 用于控制生成器函数的执行流程，每次调用next()都会使生成器函数从上次暂停的地方继续执行，
// 直到遇到下一个yield语句或者函数结束。
// 2、yield关键字与生成器的工作原理
// yield是生成器函数中的关键元素。当生成器函数执行到yield语句时，它会暂停函数的执行，
// 并将yield后面的值作为当前next()调用的返回值。
// 3、应用场景
// 异步编程：在 ES6 的async/await出现之前，生成器可以用于更优雅地处理异步操作。
// 通过结合一些工具函数（如co模块），可以将异步操作以类似同步的方式编写。
// 例如，将多个基于回调的异步函数转换为看起来像是顺序执行的代码。
// 数据生成和遍历：
// 可以用于生成一系列的数据，比如生成一个自定义的数列。例如，生成斐波那契数列
// function* fibonacciGenerator() {
//     let a = 0, b = 1;
//     while (true) {
//       yield a;
//       let temp = a;
//       a = b;
//       b = temp + b;
//     }
//   }
//   let fibGen = fibonacciGenerator();
//   console.log(fibGen.next().value); // 0
//   console.log(fibGen.next().value); // 1
//   console.log(fibGen.next().value); // 1
//   console.log(fibGen.next().value); // 2
//   console.log(fibGen.next().value); // 3

// 也可以用于遍历一些复杂的数据结构，特别是当数据是动态生成或者懒加载的情况。
// 例如，遍历一个可能包含大量数据的树形结构，每次只生成和处理当前需要的数据节点。
// 状态机：生成器可以用于实现简单的状态机。每个yield点可以表示一个状态的转换，
// 而生成器函数内部的代码可以处理状态转换的逻辑。例如，实现一个简单的交通信号灯状态机：
// function* trafficLight() {
//     while (true) {
//       yield 'green';
//       yield 'yellow';
//       yield 'red';
//     }
//   }
//   let light = trafficLight();
//   console.log(light.next().value); // green
//   console.log(light.next().value); // yellow
//   console.log(light.next().value); // red

// 4、与迭代器（Iterator）的关系
// 生成器是一种创建迭代器的便捷方式。在 JavaScript 中，迭代器是一个具有next()方法的对象，
// 这个方法返回一个包含value（当前迭代的值）和done（表示迭代是否结束）的对象。
// 生成器函数返回的生成器对象满足这个迭代器的定义。
// 例如，手动创建一个简单的迭代器和使用生成器创建的迭代器对比：
// 手动创建迭代器：
// function customIterator(values) {
//     let index = 0;
//     return {
//       next: function () {
//         if (index < values.length) {
//           return { value: values[index++], done: false };
//         } else {
//           return { done: true };
//         }
//       }
//     };
//   }
//   let myIterator = customIterator([1, 2, 3]);
//   console.log(myIterator.next().value); // 1
//   console.log(myIterator.next().value); // 2
//   console.log(myIterator.next().value); // 3
//   console.log(myIterator.next().value); // undefined，因为迭代已经结束

// 使用生成器创建迭代器
// function* generatorIterator() {
//     yield 1;
//     yield 2;
//     yield 3;
//   }
//   let genIterator = generatorIterator();
//   console.log(genIterator.next().value); // 1
//   console.log(genIterator.next().value); // 2
//   console.log(genIterator.next().value); // 3
//   console.log(genIterator.next().value); // undefined，因为迭代已经结束

/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  let pre = arguments[0] || 0
  cur = arguments[1] || 1

  yield pre
  // 使用return可以用于终止状态机或返回最终结果，本题中不加return也可以
  return yield* fibGenerator(cur, pre + cur)
}

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
