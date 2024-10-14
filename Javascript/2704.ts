// 2704. 相等还是不相等
// 请你编写一个名为 expect 的函数，用于帮助开发人员测试他们的代码。
// 它应该接受任何值 val 并返回一个包含以下两个函数的对象。
// toBe(val) 接受另一个值并在两个值相等（ === ）时返回 true 。如果它们不相等，则应抛出错误 "Not Equal" 。
// notToBe(val) 接受另一个值并在两个值不相等（ !== ）时返回 true 。如果它们相等，则应抛出错误 "Equal" 。
type ToBeOrNotToBe = {
  toBe: (val: any) => boolean
  notToBe: (val: any) => boolean
}

function expect(val: any): ToBeOrNotToBe {
  function toBe(target: any): boolean {
    if (val !== target) throw 'Not Equal'
    return true
  }

  function notToBe(target: any): boolean {
    if (val === target) throw 'Equal'
    return true
  }
  return {
    toBe,
    notToBe
  }
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
