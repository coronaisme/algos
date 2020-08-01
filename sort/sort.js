const array = [1, 2, 3, 4, 5]
const unsortedArray = [2, 4, 3, 5, 1]

const builtInSort = (arr) => {
  return arr.sort((a, b) => a - b)
}

//vs quick sort

var sortArray = function(nums) {
  return quickSort(nums, 0, nums.length - 1);    
};

const quickSort = (arr, left, right) => {
  let index;
  if (arr.length > 1) {
      index = partition(arr, left, right);
      if (left < index - 1) {
          quickSort(arr, left, index - 1);
      }
      if (right > index) {
          quickSort(arr, index, right);
      }
  }
  return arr;
}

const partition = (arr, left, right) => {
  const pivot = arr[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
      while (arr[i] < pivot) {
          i++;
      }
      while (arr[j] > pivot) {
          j--;
      }
      if (i <= j) {
          swap(arr, i, j);
          i++;
          j--;
      }
  }
  return i;
}

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}