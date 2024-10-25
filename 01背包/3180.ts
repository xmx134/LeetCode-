// 3180. 执行操作可获得的最大总奖励 I
// 给你一个整数数组 rewardValues，长度为 n，代表奖励的值。
// 最初，你的总奖励 x 为 0，所有下标都是 未标记 的。你可以执行以下操作 任意次 ：
// 从区间 [0, n - 1] 中选择一个 未标记 的下标 i。
// 如果 rewardValues[i] 大于 你当前的总奖励 x，
// 则将 rewardValues[i] 加到 x 上（即 x = x + rewardValues[i]），并 标记 下标 i。
// 以整数形式返回执行最优操作能够获得的 最大 总奖励。
// 思路：
// 因为求的是最大总奖励，所以我们可以先拿下数组中最大的值，
// 而题目的规则说累计数之和得小于下一个数，如果我们把最大值定义为n，也就是说最大总奖励不会超过2n-1。
// 所以我们求一下能达到在2n-1范围内，数组内的值相加能达到的最大值即可。
// 算法：
// 先排序原数组，求出最大值ma并缓存，创建一个2*ma-1位，全部数位都填充0的数组dp；
// 将dp的首位设为1，表示什么值都不取的时候就返回0；
// 遍历数组中的数element，求每个数的上限，也就是2*element-1，将每个能通过计算取出的数都设为1；
// 原数组中全部数遍历后，再遍历dp数组，返回能取到的最大值。
function maxTotalReward(rewardValues: number[]): number {
  rewardValues.sort((a, b) => a - b)
  const ma: number = rewardValues[rewardValues.length - 1]
  const dp: number[] = new Array(2 * ma - 1).fill(0)
  dp[0] = 1
  for (let element of rewardValues) {
    for (let num = 2 * element - 1; num >= element; num--) {
      if (dp[num - element] === 1) {
        dp[num] = 1
      }
    }
  }
  let res = 0
  for (let i = 0; i < dp.length; i++) {
    if (dp[i] === 1) {
      res = i
    }
  }
  return res
}
