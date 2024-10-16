// 2717. 半有序排列
// 给你一个下标从 0 开始、长度为 n 的整数排列 nums 。
// 如果排列的第一个数字等于 1 且最后一个数字等于 n ，则称其为 半有序排列 。
// 你可以执行多次下述操作，直到将 nums 变成一个 半有序排列 ：
// 选择 nums 中相邻的两个元素，然后交换它们。
// 返回使 nums 变成 半有序排列 所需的最小操作次数。
// 排列 是一个长度为 n 的整数序列，其中包含从 1 到 n 的每个数字恰好一次。
// 思路：
// 当nums的开头和末尾刚好是1和nums.length时，无需移动，返回0次。
// 找到元素1的坐标，计算这个坐标到开头的距离，
// 找到元素nums.length的坐标，计算这个坐标到末尾的距离，
// 当1的坐标大于nums.length时，减一次，否则直接返回。
// 核心：
// Array.findIndex()
function semiOrderedPermutation(nums: number[]): number {
  if (nums[0] === 1 && nums[nums.length - 1] === nums.length) return 0
  let startIndex: number = nums.findIndex((element) => element === 1)
  let endIndex: number = nums.findIndex((element) => element === nums.length)
  if (startIndex > endIndex) {
    return startIndex + (nums.length - 1 - endIndex) - 1
  }
  return startIndex + (nums.length - 1 - endIndex)
}
