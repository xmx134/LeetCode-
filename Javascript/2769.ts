// 2769. 找出最大的可达成数字
// 如果整数 x 可以在执行下述操作不超过 t 次的情况下变为与 num 相等，则称其为 可达成数字 ：
// 每次操作将 x 的值增加或减少 1 ，同时可以选择将 num 的值增加或减少 1 。
// 返回所有可达成数字中的最大值。可以证明至少存在一个可达成数字。
// 思路：
// 阅读理解，当num+1，目标数字-1，可以换算为一次操作num+2，所以目标数字就是num加上t次移动2
function theMaximumAchievableX(num: number, t: number): number {
  return num + 2 * t
}
