// 28. 找出字符串中第一个匹配项的下标
// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中
// 找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。
// 如果 needle 不是 haystack 的一部分，则返回  -1 。
// 思路：
// 遍历大数组，当遇到字符与小数组起始位置的字符一致时，判断后续字符串是否一致，当全部一致时返回起始下标
// 核心：
// String.slice()
function strStr(haystack: string, needle: string): number {
  if (needle.length === 0) return 0
  let i: number = 0
  while (i < haystack.length) {
    if (haystack[i] === needle[0]) {
      if (haystack.slice(i, i + needle.length) === needle) {
        return i
      }
    }
    i++
  }
  return -1
}
// 执行用时单百
