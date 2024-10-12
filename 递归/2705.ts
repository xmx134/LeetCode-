// 2705.精简对象
// 现给定一个对象或数组 obj，返回一个 精简对象 。
// 精简对象 与原始对象相同，只是将包含 假 值的键移除。该操作适用于对象及其嵌套对象。
// 数组被视为索引作为键的对象。当 Boolean(value) 返回 false 时，值被视为 假 值。
// 你可以假设 obj 是 JSON.parse 的输出结果。换句话说，它是有效的 JSON。
// 示例 1：
// 输入：obj = [null, 0, false, 1]
// 输出：[1]
// 解释：数组中的所有假值已被移除。
// 示例 2：
// 输入：obj = {"a": null, "b": [false, 1]}
// 输出：{"b": [1]}
// 解释：obj["a"] 和 obj["b"][0] 包含假值，因此被移除。
// 示例 3：
// 输入：obj = [null, 0, 5, [0], [false, 16]]
// 输出：[5, [], [16]]
// 解释：obj[0], obj[1], obj[3][0], 和 obj[4][0] 包含假值，因此被移除。
// 思路：
// 基本情况：如果当前值是假值，则返回 false。如果当前值不是对象，则返回该值。
// 处理数组：如果当前值是数组，我们遍历数组并递归处理每个项。
// 如果递归调用的返回值为真，我们将其添加到一个新数组中。
// 处理对象：如果当前值是对象，我们遍历对象的键，并递归处理每个值。
// 如果递归调用的返回值为真，我们将其添加到一个新对象中。
// 返回结果：最后，我们返回清理后的对象或数组。
// 核心：
// Array.isArray()判断是否是数组，以此确认后续操作步骤。
type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue }
type Obj = Record<string, JSONValue> | Array<JSONValue>

function compactObject(obj: Obj): Obj {
  function dfs(obj: any): any {
    if (!obj) return false
    if (typeof obj !== 'object') return obj

    if (Array.isArray(obj)) {
      const newArr: any[] = []
      for (let i = 0; i < obj.length; i++) {
        const curr = obj[i]
        const subRes = dfs(curr)
        if (subRes) {
          newArr.push(subRes)
        }
      }
      return newArr
    }
    const newObj: Obj = {}

    for (const key in obj) {
      const subRes = dfs(obj[key])
      if (subRes) {
        newObj[key] = subRes
      }
    }
    return newObj
  }
  return dfs(obj)
}
