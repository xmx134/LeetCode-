// 2619.数组原型对象的最后一个元素

// 题目描述：
// 请你编写一段代码实现一个数组方法，使任何数组都可以调用 array.last() 方法，
// 这个方法将返回数组最后一个元素。如果数组中没有元素，则返回 -1 。
// 你可以假设数组是 JSON.parse 的输出结果。

// 题目解析：
// 本题考察的是原型链+上下文的理解，在Array的原型链上添加了一个方法，
// 方法内的上下文就是Array实例，察觉到这一步，后面把逻辑补充完整即可，
// 使用三元运算符判断Array实例是否有元素，有的话返回最后一个元素，没有元素就返回-1。

interface Array<T> {
  last(): T | -1
}

Array.prototype.last = function () {
  return this.length > 0 ? this[this.length - 1] : -1
}

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
