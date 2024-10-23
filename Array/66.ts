// 66. 加一
// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
// 你可以假设除了整数 0 之外，这个整数不会以零开头。
// 思路：
// 如果末位不为9，直接末位+1并返回数组；否则倒序遍历数组，找到不为9的数并将数+1，
// 所有遍历过等于9的数全部归0；如果数组全部数都是9，那就全部归0，并在数组首位插入0
// 核心：
// Array.unshift()
function plusOne(digits: number[]): number[] {
  if (digits[digits.length - 1] !== 9) {
    digits[digits.length - 1]++
    return digits
  }
  let i = digits.length - 1
  while (i >= 0) {
    if (digits[i] !== 9) {
      digits[i]++
      i = 0
    } else {
      digits[i] = 0
      if (i === 0) digits.unshift(1)
    }
    i--
  }
  return digits
}
