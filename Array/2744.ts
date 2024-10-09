// 2744. 最大字符串配对数目
// 如果字符串 words[i] 与字符串 words[j] 满足以下条件，我们称它们可以匹配：
// 字符串 words[i] 等于 words[j] 的反转字符串。
// 0 <= i < j < words.length
// 请你返回数组 words 中的 最大 匹配数目。
// 注意，每个字符串最多匹配一次。

// 双重循环直接解决
function maximumNumberOfStringPairs(words: string[]): number {
  const n: number = words.length
  let ans: number = 0
  for (let i: number = 0; i < n; ++i) {
    for (let j: number = i + 1; j < n; ++j) {
      if (words[i][0] == words[j][1] && words[i][1] == words[j][0]) {
        ++ans
      }
    }
  }
  return ans
}
