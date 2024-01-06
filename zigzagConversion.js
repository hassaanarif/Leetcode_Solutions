/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
	if (numRows === 1) return s;
	let map = {}; //rowNumb : char[]

	for (let i = 1; i <= numRows; i++) {
		map[i] = [];
	}

	let count = 1;
	let reverse = false;

	for (i = 0; i < s.length; i++) {
		let currentElement = s[i];
		map[count].push(currentElement);

		reverse ? count-- : count++;
		if (count === 1 || count === numRows) reverse = !reverse;
	}

	let result = "";
	for (let key in map) {
		console.log(map[key]);
		result += map[key].join("");
	}

	return result;
};
