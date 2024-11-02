// 228. 汇总区间
// 给定一个  无重复元素 的 有序 整数数组 nums 。
// 返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表 。也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 nums 的数字 x 。
// 列表中的每个区间范围 [a,b] 应该按如下格式输出：
// "a->b" ，如果 a != b
// "a" ，如果 a == b
function summaryRanges(nums: number[]): string[] {
  if (nums.length == 0) return []
  if (nums.length == 1) return [nums[0].toString()]
  let i: number = 0
  //   形式所迫，测试用例逆天的，-1都有
  let start: number = null
  const strArr: string[] = []
  while (i < nums.length - 1) {
    if (start === null) {
      if (nums[i + 1] - nums[i] === 1) {
        start = nums[i]
      } else {
        strArr.push(nums[i].toString())
      }
    } else {
      if (nums[i + 1] - nums[i] !== 1) {
        strArr.push(`${start}->${nums[i]}`)
        start = null
      }
    }
    i++
  }
  if (start != null) {
    strArr.push(`${start}->${nums[i]}`)
    start = null
  } else {
    strArr.push(nums[i].toString())
  }
  return strArr
}
