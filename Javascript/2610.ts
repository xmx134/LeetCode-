// 2610. 转换二维数组
// 给你一个整数数组 nums 。请你创建一个满足以下条件的二维数组：
// 二维数组应该 只 包含数组 nums 中的元素。
// 二维数组中的每一行都包含 不同 的整数。
// 二维数组的行数应尽可能 少 。
// 返回结果数组。如果存在多种答案，则返回其中任何一种。
// 请注意，二维数组的每一行上可以存在不同数量的元素。

// 思路
// 创建一个二维数组，称作结果数组。遍历传入的数组nums，
// 将nums中的每个值与现有的结果数组的值进行对比，结果数组的子数组中依次判断是否有当下遍历的值，
// 找到不存在当下遍历值的子数组时，插入到数组末尾，并跳出子数组循环，继续nums的遍历。
// 当nums数组走完遍历，将结果数组返回即可
// 解题过程
// 核心方法：Array.every/Array.push
// 使用Array.every来寻找子数组中是否存在nums[j]，不存在就用Array.push插入到对应的子数组中。
// Code
function findMatrix(nums: number[]): number[][] {
  let returnArr: number[][] = [[]]
  let j: number = 0
  while (j < nums.length) {
    let i: number = 0
    let takein: boolean = false
    while (!takein) {
      if (returnArr[i].every(element => element != nums[j])) {
        returnArr[i].push(nums[j])
        takein = true
      }
      i++
      if (i == returnArr.length && !takein) {
        returnArr[i] = [nums[j]]
        takein = true
      }
    }
    j++
  }
  return returnArr
}
