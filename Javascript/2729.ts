// 2729. 判断一个数是否迷人
// 如果经过以下修改得到的数字 恰好 包含数字 1 到 9 各一次且不包含任何 0 ，那么我们称数字 n 是 迷人的 ：
// 将 n 与数字 2 * n 和 3 * n 连接 。
// 如果 n 是迷人的，返回 true，否则返回 false 。
// 连接 两个数字表示把它们首尾相接连在一起。比方说 121 和 371 连接得到 121371 。

// 思路：
// 拆解题目，可知题目要的是一个只包含1~9的字符串。所以我们可以先判断字符串是否包含0，
// 再判断长字符串是否只有9位数，
// 最后遍历9位数长字符串，看看是否包含1~9
// 核心方法：
// String.includes()方法直接判断字符串中是否包含某个数字
function isFascinating(n: number): boolean {
  if (n.toString().includes('0')) return false
  let i: number = 1
  let nString: string = `${n}${n * 2}${n * 3}`
  if (nString.length > 9) return false
  while (i < 10) {
    if (!nString.includes(i.toString())) return false
    i++
  }
  return true
}
