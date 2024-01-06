/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
	let trimmed = s.trim();
	let count = 0;
	for (let i = trimmed.length - 1; i >= 0; i--) {
		if (trimmed[i] !== " ") {
			count++;
		} else {
			return count;
		}
	}

	return count;
};
