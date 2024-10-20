// 908. 最小差值 I
// 给你一个整数数组 nums，和一个整数 k 。
// 在一个操作中，您可以选择 0 <= i < nums.length 的任何索引 i 。将 nums[i] 改为 nums[i] + x ，
// 其中 x 是一个范围为 [-k, k] 的任意整数。对于每个索引 i ，最多 只能 应用 一次 此操作。
// nums 的 分数 是 nums 中最大和最小元素的差值。
// 在对  nums 中的每个索引最多应用一次上述操作后，返回 nums 的最低 分数 。
// 思路
// 先排序，然后比较最小值+k和最大值-k的值，只有当最小值+k仍然小于最大值-k时，返回值不为0
// 解题过程
// nums.sort()排序
// Code
function smallestRangeI(nums: number[], k: number): number {
  if (nums.length === 1) return 0
  nums.sort((a, b) => a - b)
  if (nums[0] + Math.abs(k) >= nums[nums.length - 1] - Math.abs(k)) return 0
  return nums[nums.length - 1] - 2 * Math.abs(k) - nums[0]
}
// 第一次做每日一题
// 第三天时间复杂度破百了
