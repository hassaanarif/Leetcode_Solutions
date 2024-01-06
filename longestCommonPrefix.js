/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	if (strs.length === 0 || !strs[0]) return "";

	let result = "";
	for (let i = 0; i < strs[0].length; i++) {
		let charInConsideration = strs[0][i];

		for (j = 1; j < strs.length; j++) {
			if (strs[j][i] !== charInConsideration) return result;
		}

		result += strs[0][i];
	}

	return result;
};
