// 2739. 总行驶距离
// 卡车有两个油箱。给你两个整数，mainTank 表示主油箱中的燃料（以升为单位），
// additionalTank 表示副油箱中的燃料（以升为单位）。
// 该卡车每耗费 1 升燃料都可以行驶 10 km。每当主油箱使用了 5 升燃料时，如果副油箱至少有 1 升燃料，
// 则会将 1 升燃料从副油箱转移到主油箱。
// 返回卡车可以行驶的最大距离。
// 注意：从副油箱向主油箱注入燃料不是连续行为。这一事件会在每消耗 5 升燃料时突然且立即发生。
// 思路：此题有三种解法，层层递进，第一层是最简单的遍历，主油箱每5+1，副油箱-1，
// 找到主油箱不满5或者副油箱为空时的值返回即可。
// function distanceTraveled(mainTank: number, additionalTank: number): number {
//     let ans = 0;
//     while (mainTank >= 5) {
//         mainTank -= 5;
//         ans += 50;
//         if (additionalTank > 0) {
//             additionalTank--;
//             mainTank++;
//         }
//     }
//     return ans + mainTank * 10;
// };
// 思路：
// 设置一个参数min作为副油箱还需要向主油箱加的最小油升数，主油箱每剩余5升，min值加一，
// 设置一个point参数作为指针，指向min*5的位置，也就是副油箱已经加过油的刻度，
// 每次加完油，主油箱加上min数量，副油箱减去min数量，
// 当min值为0时，返回当前主油箱油升数。当副油箱小于min值时，返回主油箱+副油箱的值。
// 核心：
// 递归
function distanceTraveled(mainTank: number, additionalTank: number): number {
  if (mainTank < 5) return mainTank * 10
  let point: number = 0
  function getNum(): number {
    let min: number = Math.floor((mainTank - point) / 5)
    if (min < 1) return mainTank * 10
    if (additionalTank <= min) return (mainTank + additionalTank) * 10
    point = min * 5 + point
    mainTank += min
    additionalTank -= min
    return getNum()
  }
  return getNum()
}
// 思路：
// 可以直接推理以数学算法计算出终点
// function distanceTraveled(mainTank: number, additionalTank: number): number {
//     return 10 * (mainTank + Math.min(Math.floor((mainTank - 1) / 4), additionalTank));
// };
