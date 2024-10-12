// 2703. 返回传递的参数的长度
// 请你编写一个函数 argumentsLength，返回传递给该函数的参数数量。
// 思路：
// js福利题

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue }

function argumentsLength(...args: JSONValue[]): number {
  return args.length
}

/**
 * argumentsLength(1, 2, 3); // 3
 */
