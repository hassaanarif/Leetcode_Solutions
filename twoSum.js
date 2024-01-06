/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let mapping = {};
	let result = [];
	for (let i = 0; i < nums.length; i++) {
		let diff = target - nums[i];

		if (diff in mapping) result.push(mapping[diff], i);
		else {
			mapping[nums[i]] = i;
		}
	}

	return result;
};
