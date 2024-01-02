/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	return isHappyHelper(n, {});
};

function isHappyHelper(n, map) {
	if (n === 1) return true;
	if (n in map) return map[n];

	let numberStringified = n.toString();
	let result = 0;
	for (let i = 0; i < numberStringified.length; i++) {
		result += Math.pow(numberStringified[i], 2);
	}

	map[n] = false;
	return isHappyHelper(result, map);
}
