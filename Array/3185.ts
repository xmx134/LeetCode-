// 3185. 构成整天的下标对数目 II
// 给你一个整数数组 hours，表示以 小时 为单位的时间，返回一个整数，
// 表示满足 i < j 且 hours[i] + hours[j] 构成 整天 的下标对 i, j 的数目。
// 整天 定义为时间持续时间是 24 小时的 整数倍 。
// 例如，1 天是 24 小时，2 天是 48 小时，3 天是 72 小时，以此类推。
// 思路
// 先求模再求和
// 解题过程
// 先创建一个统计24个数的数组nums，再计算原数组各数求模24的值并使nums数组对应的值+1。
// 统计完成后，分别处理0/12以及其他的的数即可。
function countCompleteDayPairs(hours: number[]): number {
  let num: number = 0
  let nums: number[] = new Array(24)
  nums.fill(0, 0, 24)
  let i: number = 0
  while (i < hours.length) {
    nums[hours[i] % 24]++
    i++
  }
  i = 1
  if (nums[0] > 0) num = (nums[0] * (nums[0] - 1)) / 2
  if (nums[12] > 0) num += (nums[12] * (nums[12] - 1)) / 2
  while (i < 12) {
    num += nums[i] * nums[24 - i]
    i++
  }
  return num
}
// 时间复杂度100
