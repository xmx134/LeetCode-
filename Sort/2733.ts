// 2733. 既不是最小值也不是最大值
// 给你一个整数数组 nums ，数组由 不同正整数 组成，
// 请你找出并返回数组中 任一 既不是 最小值 也不是 最大值 的数字，如果不存在这样的数字，返回 -1 。
// 返回所选整数。
// 思路：
// 先排序，然后返回第二个值即可，因为这个数组由【不同正整数组成】
// 核心：
// Array.sort()
function findNonMinOrMax(nums: number[]): number {
  if (nums.length < 3) return -1
  nums = nums.sort((a: number, b: number): number => a - b)
  return nums[1]
}
