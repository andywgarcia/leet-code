/*

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var addTwoNumbers = function (l1, l2) {
//   let num1 = nodeListToNum(l1);
//   let num2 = nodeListToNum(l2);
//   return numToListNodes(num1 + num2);
// };

// function nodeListToNum(node) {
//   let sum = 0;
//   let multiplier = 1;
//   while (node !== null) {
//     sum += node.val * multiplier;
//     multiplier *= 10;
//     node = node.next;
//   }
//   return sum;
// }

// function numToListNodes(num) {
//   let firstNode = new ListNode(num % 10, null);
//   firstNode.next = nextNode(firstNode, parseInt(num / 10));
//   return firstNode;
// }

// function nextNode(node, num) {
//   console.log("nextNode", node, num);
//   if (parseInt(num / 10) < 1) {
//     console.log("base case", num);
//     return new ListNode(num, null);
//   }
//   //   num = parseInt();

//   let newNode = new ListNode(num % 10, null);
//   console.log("new node before", newNode, num);
//   let next = nextNode(newNode, parseInt(num / 10));
//   console.log("assigning", node, next);
//   node.next = next;
//   console.log("assigned", node);
//   //   console.log("new node after", newNode);

//   return newNode;
// }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0);
  let num1 = l1;
  let num2 = l2;
  let curr = head;
  let carry = 0;

  while (num1 !== null || num2 !== null) {
    let val1 = (num1 && num1.val) || 0;
    let val2 = (num2 && num2.val) || 0;
    let sum = val1 + val2 + carry;

    carry = parseInt(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (num1 !== null) {
      num1 = num1.next;
    }
    if (num2 !== null) {
      num2 = num2.next;
    }
  }
  if (carry > 0) {
    curr.next = new ListNode(carry);
  }
  return head.next;
};

let num1 = new ListNode(2, new ListNode(4, new ListNode(3, null)));
let num2 = new ListNode(5, new ListNode(6, new ListNode(4, null)));

console.log("Result", addTwoNumbers(num1, num2));
