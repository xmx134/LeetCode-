// 2760. 最长奇偶子数组
// 给你一个下标从 0 开始的整数数组 nums 和一个整数 threshold 。
// 请你从 nums 的子数组中找出以下标 l 开头、下标 r 结尾 (0 <= l <= r < nums.length)
//  且满足以下条件的 最长子数组 ：
// nums[l] % 2 == 0
// 对于范围 [l, r - 1] 内的所有下标 i ，nums[i] % 2 != nums[i + 1] % 2
// 对于范围 [l, r] 内的所有下标 i ，nums[i] <= threshold
// 以整数形式返回满足题目要求的最长子数组的长度。
// 注意：子数组 是数组中的一个连续非空元素序列。
// 思路：
// 遍历nums数组，当数值超过threshold时，temp与最大值比较后归零。
// 当temp为0时，只有在当前值%2等于0，temp才启动，
// 当temp大于0时，只有当前值和前一个值%2不相等时才加1，否则归零。
function longestAlternatingSubarray(nums: number[], threshold: number): number {
  let i: number = 0
  let temp: number = 0
  let num: number = 0
  while (i < nums.length) {
    if (nums[i] > threshold) {
      num = Math.max(num, temp)
      temp = 0
    } else {
      if (temp > 0) {
        if ((nums[i] - nums[i - 1]) % 2 != 0) temp++
        else {
          num = Math.max(num, temp)
          temp = 0
        }
      }
      if (temp === 0) {
        if (nums[i] % 2 === 0) temp++
      }
    }
    i++
  }
  num = Math.max(num, temp)
  return num
}
