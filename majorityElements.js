/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	let map = new Map();

	let majority = null;

	for (let num of nums) {
		if (map[num] === undefined) {
			map[num] = 1; // {6: 1, 5: 1}

			if (!map[majority] || map[num] > map[majority]) {
				majority = num;
			}
		} else {
			map[num]++;

			if (map[num] > map[majority]) {
				majority = num;
			}
		}
	}

	return majority;
};
