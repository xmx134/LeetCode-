class Solution {
  // 题目：2089. 找出数组排序后的目标下标
    public List<Integer> targetIndices(int[] nums, int target) {
        // 创建两个 int，一个记录比 target 小的数值的数量，一个记录与 target 相同的数值的数量
        // 创建一个 List，存储需要返回的列表
        // 通过遍历 nums 数组找出比 target 小的数值的数量，作为返回下标列表的起始值，找出 target 相同数值的数量，作为返回下标列表的长度。如果没有与 target 相同数值的元素，直接返回空 List。
        int littleNum = 0;
        int targetNum = 0;
        List retList = new ArrayList();
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] < target) {
                littleNum++;
            }
            if (nums[i] == target) {
                targetNum++;
            }
        }
        if (targetNum == 0) {
            return retList;
        }
        int endIndex = targetNum + littleNum;
        for (int i = littleNum; i < endIndex; i++) {
            retList.add(i);
        }
        return retList;
    }
}