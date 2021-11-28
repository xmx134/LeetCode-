/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    // 创建两个指针A、B分别指向两个链表，创建一个新的链表ret负责存储比较后的值，
    // 比较两个链表的指针值大小，若A小于B，则将A插入ret末尾；若A大于B，则将B插入ret末尾；若A等于B，则将A、B插入ret末尾；
    // 直到其中一个链表所有值都插入ret后，将另一个链表的所有值都插入ret，返回ret
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode cur1 = list1;
        ListNode cur2 = list2;
        ListNode ret = new ListNode();
        if (cur1 == null) {
            return list2;
        }
        if (cur2 == null) {
            return list1;
        }
        if (cur1.val < cur2.val) {
            ret = cur1;
            cur1 = cur1.next;
        } else {
            ret = cur2;
            cur2 = cur2.next;
        }
        ListNode head = ret;
        while(cur1 != null && cur2 != null) {
            if (cur1.val < cur2.val) {
                head.next = cur1;
                head = head.next;
                cur1 = cur1.next;
            } else if(cur1.val > cur2.val) {
                head.next = cur2;
                head = head.next;
                cur2 = cur2.next;
            } else {
                head.next = cur1;
                head = head.next;
                cur1 = cur1.next;
                head.next = cur2;
                head = head.next;
                cur2 = cur2.next;
            }
        }
        if (cur1 == null) {
            head.next = cur2;
        }
        if (cur2 == null) {
            head.next = cur1;
        }
        return ret;
    }
}