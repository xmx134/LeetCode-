// 2682. 找出转圈游戏输家
// n 个朋友在玩游戏。这些朋友坐成一个圈，按 顺时针方向 从 1 到 n 编号。
// 准确的说，从第 i 个朋友的位置开始顺时针移动 1 步会到达第 (i + 1) 个朋友的位置（1 <= i < n），
// 而从第 n 个朋友的位置开始顺时针移动 1 步会回到第 1 个朋友的位置。
// 游戏规则如下：
// 第 1 个朋友接球。
// 接着，第 1 个朋友将球传给距离他顺时针方向 k 步的朋友。
// 然后，接球的朋友应该把球传给距离他顺时针方向 2 * k 步的朋友。
// 接着，接球的朋友应该把球传给距离他顺时针方向 3 * k 步的朋友，以此类推。
// 换句话说，在第 i 轮中持有球的那位朋友需要将球传递给距离他顺时针方向 i * k 步的朋友。
// 当某个朋友第 2 次接到球时，游戏结束。
// 在整场游戏中没有接到过球的朋友是 输家 。
// 给你参与游戏的朋友数量 n 和一个整数 k ，请按升序排列返回包含所有输家编号的数组 answer 作为答案。

// 思路
// 首先通过记录每轮游戏的碰球人，将每个碰球人下标整理成数组，当新的碰球人下标已经在数组内时，
// 我们称这个数组为赢家数组，游戏结束，进入统计阶段。
// 统计阶段从1开始数到n，每个数字看看有没有在赢家数组出现过，出现过的不记录到输家数组内，
// 其余的都记录进输家数组。
// 最后将输家数组返回即可。
// 解题过程
// 核心点就是Array.every，这个方法接收一个回调方法，回调方法内返回一个boolean值，
// 利用这个方法构建两个while循环，第一个循环找出重复赢家，第二个循环找出游戏者中的赢家并排除在外，
// 剩下的就是输家。
function circularGameLosers(n: number, k: number): number[] {
  const answer: number[] = []
  const winner: number[] = []
  let newWinner: number = 1
  let times: number = 1
  while (winner.every(currentValue => currentValue != newWinner)) {
    winner.push(newWinner)
    newWinner = (times * k + newWinner) % n === 0 ? n : (times * k + newWinner) % n
    times++
  }
  let i: number = 1
  while (i <= n) {
    if (winner.every(currentValue => currentValue != i)) {
      answer.push(i)
    }
    i++
  }
  return answer
}
