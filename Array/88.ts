// 88. 合并两个有序数组
// 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，
// 另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
// 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
// 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。
// 为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，
// 应忽略。nums2 的长度为 n 。
// 思路：
// 分三步，先删除多余元素，再合并数组，最后排序
// 核心：
// 必须用改变原数组的api，而不是需要开辟新空间的api
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  nums1.splice(m, nums1.length)
  nums2 = nums2.slice(0, n)
  nums1.push(...nums2)
  nums1.sort((a, b) => a - b)
}
