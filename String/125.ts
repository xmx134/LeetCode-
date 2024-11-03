// 125. 验证回文串
// 如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。
// 则可以认为该短语是一个 回文串 。
// 字母和数字都属于字母数字字符。
// 给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。
// 思路：
// 先用正则过滤掉非字母数字字符，然后利用首尾双指针比对，一旦双指针的数不相同就返回false，
// 直到双指针相遇才返回true。
function isLetterOrDigit(char) {
  return /^[a-zA-Z0-9]$/.test(char)
}

function isPalindrome(s: string): boolean {
  s = s.toLowerCase()
  let left = 0
  let right = s.length - 1

  while (left < right) {
    if (!isLetterOrDigit(s[left])) {
      left++
      continue
    }
    if (!isLetterOrDigit(s[right])) {
      right--
      continue
    }

    if (s[left] !== s[right]) {
      return false
    }

    left++
    right--
  }

  return true
}
