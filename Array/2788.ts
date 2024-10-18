// 2788. 按分隔符拆分字符串
// 给你一个字符串数组 words 和一个字符 separator ，请你按 separator 拆分 words 中的每个字符串。
// 返回一个由拆分后的新字符串组成的字符串数组，不包括空字符串 。
// 注意
// separator 用于决定拆分发生的位置，但它不包含在结果字符串中。
// 拆分可能形成两个以上的字符串。
// 结果字符串必须保持初始相同的先后顺序。
// 思路：
// 先按照分隔符拆分字符串，再将非空字符串按顺序存储到temp数组中，
// 再将temp全部拼接到stringArray数组中，返回stringArray
// 核心：
// string.split()，Array.map(),Array.push(),Array.concat()
function splitWordsBySeparator(words: string[], separator: string): string[] {
  let stringArray: string[] = []
  for (let element of words) {
    const w: string[] = element.split(separator)
    const temp: string[] = []
    w.map((element) => {
      if (element.length > 0) {
        temp.push(element)
      }
    })
    stringArray = stringArray.concat(temp)
  }
  return stringArray
}
// 这一题时间单100
