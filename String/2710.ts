// 2710. 移除字符串中的尾随零
// 给你一个用字符串表示的正整数 num ，请你以字符串形式返回不含尾随零的整数 num 。
// 示例 1：
// 输入：num = "51230100"
// 输出："512301"
// 解释：整数 "51230100" 有 2 个尾随零，移除并返回整数 "512301" 。
// 示例 2：
// 输入：num = "123"
// 输出："123"
// 解释：整数 "123" 不含尾随零，返回整数 "123" 。
//  思路：
// 递归或者循环去掉末尾的0
function removeTrailingZeros(num: string): string {
  function check(num: string): string {
    if (num[num.length - 1] === '0') {
      num = num.substring(0, num.length - 1)
      num = check(num)
    }
    return num
  }
  num = check(num)
  return num
}
