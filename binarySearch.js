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
