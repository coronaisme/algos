// Remove all elements from a linked
// list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

const removeElements = (head, val) => {
  let currentNode = head;
  if (!head) return null;
  // we forward look; delete the future, instead of present
  while (currentNode.next) {
    // remove all but last
    while (currentNode.next.val === val) {
      // remove consecutive values
      currentNode.next = currentNode.next.next;
      if (currentNode.next === null) break; // the new next is last
    }
    if (currentNode.next) {
      // if after removal, not at last
      currentNode = currentNode.next; // hop to next link
    }
    //console.log("current node val", currentNode.val)
  } // end of while
  if (head.val === val) head = head.next; // handle deletion of head
  return head;
};
