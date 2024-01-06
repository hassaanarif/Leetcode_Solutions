/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	let set = new Set(nums);
	nums.length = 0; // Clear the original array
	set.forEach((value) => nums.push(value)); // Add sorted unique values to the original array
	nums.sort((a, b) => a - b); // Sort the array if needed
	return nums.length;
};
