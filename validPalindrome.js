/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	if (s.length === 0 || s.length === 1) return true;

	let left = 0; //A
	let right = s.length - 1;
	const regex = /[a-z0-9]$/;

	while (left <= right) {
		// If not english character, skip to left or right
		let leftChar = s[left].toLowerCase();
		let rightChar = s[right].toLowerCase();

		if (!regex.test(leftChar)) {
			left++;
			continue;
		} else if (!regex.test(rightChar)) {
			right--;
			continue;
		} else if (leftChar !== rightChar) {
			return false;
		}
		left++;
		right--;
	}
	return true;
};
