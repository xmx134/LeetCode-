// 3194. 最小元素和最大元素的最小平均值
// 你有一个初始为空的浮点数数组 averages。另给你一个包含 n 个整数的数组 nums，其中 n 为偶数。
// 你需要重复以下步骤 n / 2 次：
// 从 nums 中移除 最小 的元素 minElement 和 最大 的元素 maxElement。
// 将 (minElement + maxElement) / 2 加入到 averages 中。
// 返回 averages 中的 最小 元素。
// 思路：
// 先排序，每轮取出数组首和数组末尾两个数求和再除以二，得出每轮的结果。再比较每轮结果，取最小值。
function minimumAverage(nums: number[]): number {
  nums.sort((a, b) => a - b)
  let i: number = 0
  let res: number = nums[nums.length - 1]
  while (i < nums.length / 2) {
    res = Math.min(res, (nums.pop() + nums.shift()) / 2)
  }
  return res
}
