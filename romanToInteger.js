/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	let RomanToNumberMapping = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	let lessNumberMapping = {
		I: ["V", "X"],
		X: ["L", "C"],
		C: ["D", "M"],
	};
	//"MCMXCIV"
	let total = 0;
	let start = 0;
	while (start < s.length) {
		let currentRoman = s[start];
		let nextRoman = s[start + 1];

		let equivelantNumber = RomanToNumberMapping[currentRoman];
		if (currentRoman in lessNumberMapping && lessNumberMapping[currentRoman].includes(nextRoman)) {
			total += RomanToNumberMapping[nextRoman] - equivelantNumber;
			start = start + 2;
		} else {
			total += equivelantNumber;
			start++;
		}
	}

	return total;
};
