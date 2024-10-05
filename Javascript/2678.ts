// 2678. 老人的数目
// 题目描述：
// 给你一个下标从 0 开始的字符串 details 。details 中每个元素都是一位乘客的信息，
// 信息用长度为 15 的字符串表示，表示方式如下：
// 前十个字符是乘客的手机号码。
// 接下来的一个字符是乘客的性别。
// 接下来两个字符是乘客的年龄。
// 最后两个字符是乘客的座位号。
// 请你返回乘客中年龄 严格大于 60 岁 的人数。

// 题目分析：
// 题目考察的是数组迭代+字符串的拆分。
// 数组迭代使用for...of或者for都可以，字符串拆分可以使用String.substring或者String.slice
function countSeniors(details: string[]): number {
  let num: number = 0
  for (let element of details) {
    if (Number(element.substring(11, 13)) > 60) num++
  }
  return num
}
