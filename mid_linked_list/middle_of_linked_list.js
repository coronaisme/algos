// Given a non-empty, singly linked list with head node head,
// return a middle node of linked list.

// If there are two middle nodes, return the second middle node.

// Input: [1,2,3,4,5]
// Output: Node 3 from this list (Serialization: [3,4,5])
// The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
// Note that we returned a ListNode object ans, such that:
// ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.

const middleNode = function (head) {
  let count = 0;
  let currentNode = head;
  let target;
  let finalCount = 0;
  // count the nodes
  while (currentNode) {
    count += 1;
    currentNode = currentNode.next;
  }
  if (count % 2 === 0) {
    target = count / 2 + 1;
  } else {
    // odd
    target = Math.ceil(count / 2);
  }
  // find middle num
  currentNode = head;
  while (finalCount < target - 1) {
    finalCount += 1;
    currentNode = currentNode.next;
  }
  return currentNode;
};
