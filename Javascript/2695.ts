// 2695. 包装数组
// 当使用 + 运算符将两个该类的实例相加时，结果值为两个数组中所有元素的总和。
// 当在实例上调用 String() 函数时，它将返回一个由逗号分隔的括在方括号中的字符串。例如，[1,2,3] 。
// 思路：
// 包装一个数字数组，赋予数字数组相加和字符串输出的形式。
class ArrayWrapper {
  private numArray: number[]
  constructor(nums: number[]) {
    this.numArray = nums
  }

  valueOf(): number {
    if (this.numArray.length === 0) return 0
    let num: number = 0
    for (let element of this.numArray) {
      num += element
    }
    return num
  }

  toString(): string {
    if (this.numArray.length === 0) return '[]'
    let s: string = '['
    let i: number = 0
    while (i < this.numArray.length - 1) {
      s += this.numArray[i] + ','
      i++
    }
    s += this.numArray[this.numArray.length - 1]
    s += ']'
    return s
  }
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
