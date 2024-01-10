/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	if (s.length === 0) return true;
	if (s.length === 1) return false;

	let leftParantheses = ["(", "[", "{"];
	let rightParantheses = [")", "]", "}"];
	let stack = [];

	for (let i = 0; i < s.length; i++) {
		let currentParanthesis = s[i];
		let isLeftParanthesis = leftParantheses.includes(currentParanthesis);

		if (isLeftParanthesis) {
			stack.push(currentParanthesis);
		} else {
			if (stack.length === 0) return false;

			let lastInsertedParanthesis = stack.pop();
			let currentRightParanthesisIndex = rightParantheses.indexOf(currentParanthesis);

			if (lastInsertedParanthesis !== leftParantheses[currentRightParanthesisIndex]) return false;
		}
	}

	return stack.length === 0;
};

console.log(isValid("()[]{}"));

//  | |
//  | |
//  |(|
