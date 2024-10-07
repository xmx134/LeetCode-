// 2726. 使用方法链的计算器
// 你的 Calculator 类应包含以下方法：
// add - 将给定的数字 value 与 result 相加，并返回更新后的 Calculator 对象。
// subtract - 从 result 中减去给定的数字 value ，并返回更新后的 Calculator 对象。
// multiply - 将 result 乘以给定的数字 value ，并返回更新后的 Calculator 对象。
// divide - 将 result 除以给定的数字 value ，并返回更新后的 Calculator 对象。如果传入的值为 0 ，
// 则抛出错误 "Division by zero is not allowed" 。
// power - 计算 result 的幂，指数为给定的数字 value ，并返回更新后的 Calculator 对象。
// （result = result ^ value ）
// getResult - 返回 result 的值。
// 结果与实际结果相差在 10-5 范围内的解被认为是正确的。

// 思路：
// 实现一个计算器并不难，本题考察的是对方法链的理解，方法链是一种在单个语句中调用多个方法的技术。
// 当每个方法返回一个对象时，就可以将这些调用链接在一起。方法链背后的基本原则是，
// 每个方法返回一个对象，然后在该对象上调用另一个方法。
class Calculator {
  private num: number
  constructor(value: number) {
    this.num = value
  }

  add(value: number): Calculator {
    this.num += value
    return this
  }

  subtract(value: number): Calculator {
    this.num -= value
    return this
  }

  multiply(value: number): Calculator {
    this.num *= value
    return this
  }

  divide(value: number): Calculator {
    if (value === 0) throw 'Division by zero is not allowed'
    this.num /= value
    return this
  }

  power(value: number): Calculator {
    this.num **= value
    return this
  }

  getResult(): number {
    return this.num
  }
}
