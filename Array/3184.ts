// 3184. 构成整天的下标对数目 I
// 给你一个整数数组 hours，表示以 小时 为单位的时间，返回一个整数，
// 表示满足 i < j 且 hours[i] + hours[j] 构成 整天 的下标对 i, j 的数目。
// 整天 定义为时间持续时间是 24 小时的 整数倍 。
// 例如，1 天是 24 小时，2 天是 48 小时，3 天是 72 小时，以此类推。
function countCompleteDayPairs(hours: number[]): number {
  let i: number = 0
  let j: number = 1
  let num: number = 0
  while (i < hours.length - 1) {
    j = i + 1
    while (j < hours.length) {
      if ((hours[i] + hours[j]) % 24 === 0) num++
      j++
    }
    i++
  }
  return num
}
// 时间复杂度单百
