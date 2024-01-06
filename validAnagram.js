/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	if (s.length !== t.length) return false;

	let sMap = {};
	let tMap = {};

	for (let char of s) {
		if (sMap[char]) {
			sMap[char] += 1;
		} else {
			sMap[char] = 1;
		}
	}

	for (let char of t) {
		if (tMap[char]) {
			tMap[char] += 1;
		} else {
			tMap[char] = 1;
		}
	}

	for (let key in sMap) {
		if (sMap[key] !== tMap[key]) return false;
	}

	return true;
};
