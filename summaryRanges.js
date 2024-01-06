/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
	if (nums.length === 0) return [];

	let result = [];
	let intervalStartIndex = 0;

	for (let i = 1; i <= nums.length; i++) {
		let currentNumber = nums[i];
		let previousNumber = nums[i - 1];
		if (currentNumber - previousNumber === 1) continue;
		else if (!currentNumber && intervalStartIndex === nums.length - 1) {
			result.push(`${nums[intervalStartIndex]}`);
			break;
		}
		if (nums[intervalStartIndex] === previousNumber) {
			result.push(`${nums[intervalStartIndex]}`);
			intervalStartIndex = i;
			continue;
		}

		result.push(`${nums[intervalStartIndex]}->${previousNumber}`);
		intervalStartIndex = i;
	}

	return result;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 6]));
