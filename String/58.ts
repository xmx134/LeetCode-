// 58. 最后一个单词的长度
// 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。
// 思路：
// 以空格号为分隔符，将字符串拆分成数组，再倒序遍历数组，找到第一项有长度的子字符串。
// 核心：
// String.split()
function lengthOfLastWord(s: string): number {
  let temp: Array<string> = s.split(' ')
  let i: number = temp.length - 1
  while (i >= 0) {
    if (temp[i].length > 0) return temp[i].length
    i--
  }
  return 0
}
// 时间单百
