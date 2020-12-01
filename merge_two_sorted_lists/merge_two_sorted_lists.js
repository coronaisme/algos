// Merge two sorted linked lists and return it as a new sorted list.
// The new list should be made by splicing together the nodes of the first two lists.

// Example 1:

// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: l1 = [], l2 = []
// Output: []

const mergeTwoLists = (l1, l2) => {
  if (!l1 || !l2) {
    return l1 || l2;
  }

  let node = null;

  if (l1.val < l2.val) {
    node = l1;
    node.next = mergeTwoLists(l1.next, l2);
  } else {
    node = l2;
    node.next = mergeTwoLists(l1, l2.next);
  }
  return node;
};
