// Given the root node of a binary search tree, return the
// sum of values of all nodes with value between L and R (inclusive).

// The binary search tree is guaranteed to have unique values.

// Example 1:

// Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
// Output: 32
// Example 2:

// Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
// Output: 23

const rangeSumBST = (root, l, r) => {
  if (root === null) {
    return 0;
  } else {
    return (
      (root.val >= l && root.val <= r ? root.val : 0) +
      rangeSumBST(root.left, l, r) +
      rangeSumBST(root.right, l, r)
    );
  }
};
