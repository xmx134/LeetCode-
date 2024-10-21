// 910. 最小差值 II
// 给你一个整数数组 nums，和一个整数 k 。
// 对于每个下标 i（0 <= i < nums.length），将 nums[i] 变成 nums[i] + k 或 nums[i] - k 。
// nums 的 分数 是 nums 中最大元素和最小元素的差值。
// 在更改每个下标对应的值之后，返回 nums 的最小 分数 。
// 如 最小差值 I 问题的解决方法，较小的 nums[i] 将增加，较大的 nums[i] 将变小。
// 我们可以对上述想法形式化表述：如果 nums[i] 小于 nums[j]，
// 我们不必考虑当 nums[i] 增大时 nums[j] 会减小。
// 这是因为区间 (nums[i]+k,nums[j]−k) 是 (nums[i]−k,nums[j]+k) 的子集。
// 其中当 a>b 时, (a,b) 表示 (b,a)。
// 这意味着对于 (up,down) 的选择一定不会差于 (down,up)。我们可以证明其中一个区间是另一个的子集，
// 通过证明 nums[i]+k 和 nums[j]−k 是在 nums[i]−k 和 nums[j]+k 之间。
// 对于有序的数组，设 nums[i] 是最大的需要增长的 i，那么 nums[0]+k,nums[i]+k, nums[i+1]−k,
// nums[n−1]−k 就是计算结果的唯一值。
function smallestRangeII(nums: number[], k: number): number {
  nums.sort((a, b) => a - b)
  const mi = nums[0],
    ma = nums[nums.length - 1]
  let res = ma - mi
  for (let i = 0; i < nums.length - 1; i++) {
    const a = nums[i],
      b = nums[i + 1]
    res = Math.min(res, Math.max(ma - k, a + k) - Math.min(mi + k, b - k))
  }
  return res
}
