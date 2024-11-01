// 169. 多数元素
// 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
// 思路：
// 中心点的数就是想要的数。
function majorityElement(nums: number[]): number {
  nums.sort((a, b) => a - b)
  return nums[Math.floor(nums.length / 2)]
}
