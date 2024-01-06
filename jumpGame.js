/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
	let memo = {};
	return canJumpFromPosition(0, nums, memo);
};

function canJumpFromPosition(index, nums, memo) {
	if (index in memo) return memo[index];
	if (index === nums.length - 1) return true;

	let currentIndexValue = nums[index];
	if (currentIndexValue === 0) return false;
	let iterator = currentIndexValue;
	while (iterator >= 1) {
		if (canJumpFromPosition(iterator + index, nums, memo) === true) {
			memo[index] = true;
			return true;
		} else {
			continue;
		}
		iterator--;
	}

	memo[index] = false;

	return false;
}

// [2,3,1,1,4]
