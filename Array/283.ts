// 283. 移动零
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
// 思路：
// 假设数组有n位不为0的数，其他都是0，将前n位替代成不为0的数，后面的数全部替换成0即可。
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let numIndex = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[numIndex] = nums[i]
      numIndex++
    }
  }
  for (let i = numIndex; i < nums.length; i++) {
    nums[i] = 0
  }
}
