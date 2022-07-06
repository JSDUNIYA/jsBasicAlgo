const { useSearchParams } = require("react-router-dom");

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rigthIndex = arr.length;
  let mid;

  // when target is not found, this will go will go into rightindex & reduce its value becuase of else condtion
  // is satisfied always.
  while (leftIndex <= rigthIndex) {
    mid = Math.floor((leftIndex + rigthIndex) / 2);

    if (arr[mid] == target) {
      return mid;
    }

    if (target > arr[mid]) {
      leftIndex = mid + 1;
    } else {
      rigthIndex = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));

//Binary Search Using recusrive

function recusriveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightindex) {
  if (leftIndex > rightindex) {
    return -1;
  }

  let mid = Math.floor((leftIndex + rightindex) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (target < arr[mid]) {
    return search(arr, target, leftIndex, mid - 1);
  } else {
    return search(arr, target, mid + 1, rightindex);
  }
}

console.log(recusriveBinarySearch([-5, 2, 3, 4, 5], -5)); // 2
