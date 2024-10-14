// 2706. 购买两块巧克力
// 给你一个整数数组 prices ，它表示一个商店里若干巧克力的价格。同时给你一个整数 money ，表示你一开始拥有的钱数。
// 你必须购买 恰好 两块巧克力，而且剩余的钱数必须是 非负数 。同时你想最小化购买两块巧克力的总花费。
// 请你返回在购买两块巧克力后，最多能剩下多少钱。如果购买任意两块巧克力都超过了你拥有的钱，请你返回 money 。
// 注意剩余钱数必须是非负数。
// 示例 1：
// 输入：prices = [1,2,2], money = 3
// 输出：0
// 解释：分别购买价格为 1 和 2 的巧克力。你剩下 3 - 3 = 0 块钱。所以我们返回 0 。
// 示例 2：
// 输入：prices = [3,2,3], money = 3
// 输出：3
// 解释：购买任意 2 块巧克力都会超过你拥有的钱数，所以我们返回 3 。
// 思路：
// 先排序，再计算
// 核心：
// Array.sort()
function buyChoco(prices: number[], money: number): number {
  if (prices.length === 0) return money
  if (prices.length === 1) return money >= prices[0] ? money - prices[0] : money
  prices.sort((a, b) => a - b)
  return money - prices[0] - prices[1] >= 0
    ? money - prices[0] - prices[1]
    : money
}
