// 3175. 找到连续赢 K 场比赛的第一位玩家
// 有 n 位玩家在进行比赛，玩家编号依次为 0 到 n - 1 。
// 给你一个长度为 n 的整数数组 skills 和一个 正 整数 k ，其中 skills[i] 是第 i 位玩家的技能等级。
// skills 中所有整数 互不相同 。
// 所有玩家从编号 0 到 n - 1 排成一列。
// 比赛进行方式如下：
// 队列中最前面两名玩家进行一场比赛，技能等级 更高 的玩家胜出。
// 比赛后，获胜者保持在队列的开头，而失败者排到队列的末尾。
// 这个比赛的赢家是 第一位连续 赢下 k 场比赛的玩家。
// 请你返回这个比赛的赢家编号。
// 思路
// 暴力解不通，只能取巧了，
// 当k大于等数组长度时，只需要取最大值；当k小于数组长度时，遍历一遍数组，
// 遍历过程中如果能找到符合题目的值直接返回，找不到的话说明数组需要重排了，
// 而此时能走到最后的值必定是最大值，可以进行遍历重排的值也是最大值，所以不用写数组重排过程，
// 遍历完直接取最大值返回即可。
// 解题过程
// 当k大于等于数组长度，先缓存原数组，再使用Array.sort()排序数组，
// 拿到数组最大值后用Array.findIndex()找到最大值的索引。
function findWinningPlayer(skills: number[], k: number): number {
  if (k >= skills.length) {
    const sorSkills: number[] = [...skills]
    skills.sort((a, b) => a - b)
    return sorSkills.findIndex(
      (element) => element === skills[sorSkills.length - 1]
    )
  }
  let index: number = 0
  let num: number = 0
  let ma: number = skills[0]
  let i: number = 0
  while (i < skills.length - 1) {
    if (ma > skills[i + 1]) num++
    else {
      ma = skills[i + 1]
      num = 1
      index = i + 1
    }
    if (num === k) return index
    i++
  }
  return index
}
