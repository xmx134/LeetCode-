// 118. 杨辉三角
// 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
// 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
// 思路：
// 分析杨辉三角，可知每一行的第一个数和最后一个数都是1，中间的数分别是左上角和右上角的数的和，
// 如果当前数的列坐标是j，它就是上一行的j-1和j数的和。
function generate(numRows: number): number[][] {
  const num: number[][] = []
  for (let i = 0; i < numRows; i++) {
    const row: number[] = new Array(i + 1).fill(1)
    for (let j = 0; j <= i; j++) {
      if (j !== 0 && j !== i) {
        row[j] = num[i - 1][j - 1] + num[i - 1][j]
      }
    }
    num.push(row)
  }
  return num
}
