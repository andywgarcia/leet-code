/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0

Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let nums = mergeSortedArrays(nums1, nums2);
  return getMedianOfArray(nums);
};

var mergeSortedArrays = function (arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }
  let sortedArray = [];
  let index1 = 0;
  let index2 = 0;
  while (index1 < arr1.length && index2 < arr2.length) {
    let num1 = arr1[index1];
    let num2 = arr2[index2];
    if (num1 < num2) {
      sortedArray.push(arr1[index1]);
      index1++;
    } else {
      sortedArray.push(arr2[index2]);
      index2++;
    }
  }
  while (index1 < arr1.length) {
    sortedArray.push(arr1[index1]);
    index1++;
  }
  while (index2 < arr2.length) {
    sortedArray.push(arr2[index2]);
    index2++;
  }
  return sortedArray;
};

function getMedianOfArray(arr) {
  if (arr.length % 2 === 0) {
    return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
  }
  return arr[parseInt(arr.length / 2)];
}

let nums1 = [1, 2];
let nums2 = [3, 4];

console.log("Result == 2.5", findMedianSortedArrays(nums1, nums2));

nums1 = [];
nums2 = [1];
console.log("Result == 1", findMedianSortedArrays(nums1, nums2));

nums1 = [3];
nums2 = [-2, -1];
console.log("Result == -1", findMedianSortedArrays(nums1, nums2));
