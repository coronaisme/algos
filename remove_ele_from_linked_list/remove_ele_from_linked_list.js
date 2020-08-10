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

const removeElements2 = (head, val) => {
  let prev = null;
  let current = head;
  //assign placeholders

  while (current !== null) {
    //once current = null we have eliminated all nodes that we dont want
    if (current.val === val) {
      //check for val to remove
      if (prev === null) {
        //check if the val we wanted to remove was head
        head = current.next;
      } else {
        //if not original head, skip current to remove it
        prev.next = current.next;
      }
    } else {
      //traverse list
      prev = current;
    }
    //traverse list
    current = current.next;
  }
  return head;
};
