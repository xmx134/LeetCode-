// 2727. 判断对象是否为空
// 一个空对象不包含任何键值对。
// 一个空数组不包含任何元素。
// 你可以假设对象或数组是通过 JSON.parse 解析得到的。

// 我们可以使用 Object.keys() 检查键的长度，如果它为 0，则返回 true，否则返回 false。
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
  return Object.keys(obj).length === 0
}
