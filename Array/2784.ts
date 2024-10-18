// 2784. 检查数组是否是好的
// 给你一个整数数组 nums ，如果它是数组 base[n] 的一个排列，我们称它是个 好 数组。
// base[n] = [1, 2, ..., n - 1, n, n] （换句话说，它是一个长度为 n + 1 且包含 1 到 n - 1
// 恰好各一次，包含 n  两次的一个数组）。比方说，base[1] = [1, 1] ，base[3] = [1, 2, 3, 3] 。
// 如果数组是一个好数组，请你返回 true ，否则返回 false 。
// 注意：数组的排列是这些数字按任意顺序排布后重新得到的数组。
// 思路：
// 先排序，再根据末尾值判断长度，长度不对的直接返回false，
// 再依次遍历数组1~length-1的值，除了末尾的值外，其他的值都遵循增量为1的规律，
// 一旦有不遵循这个规律的值出现就返回false，否则返回true
// 核心：
// Array.sort()
function isGood(nums: number[]): boolean {
  nums = nums.sort((a, b) => a - b)
  if (nums.length != nums[nums.length - 1] + 1) return false
  let i: number = 1
  while (i < nums.length - 1) {
    if (nums[i] - nums[i - 1] != 1) return false
    i++
  }
  return true
}
// 本题解法双百分
