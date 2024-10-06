// 2609. 最长平衡子字符串
// 给你一个仅由 0 和 1 组成的二进制字符串 s 。
// 如果子字符串中 所有的 0 都在 1 之前 且其中 0 的数量等于 1 的数量，
// 则认为 s 的这个子字符串是平衡子字符串。请注意，空子字符串也视作平衡子字符串。
// 返回  s 中最长的平衡子字符串长度。
// 子字符串是字符串中的一个连续字符序列。

// 题目分析：
// 思路：
// 题目是标准的贪心算法问题，追求局部最优解，不追求全局最高效率。
// 我们只需要把每次获得的平衡子字符串长度和已存储的“最优”平衡子字符串长度对比，将更长的值存储。
// 直到字符串遍历完，存储下来的平衡子字符串长度就是最优子字符串长度。
// 关键用法：
// Math.max可以快速对比获得各个平衡子字符串中最长的长度。
// new Array(2).fill(0) 快速创建一个二维空数组
// Code：
function findTheLongestBalancedSubstring(s: string): number {
  let res: number = 0
  const count: Array<number> = new Array(2).fill(0)
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '1') {
      count[1]++
      res = Math.max(res, 2 * Math.min(count[0], count[1]))
    } else if (i == 0 || s[i - 1] == '1') {
      count[0] = 1
      count[1] = 0
    } else {
      count[0]++
    }
  }
  return res
}
