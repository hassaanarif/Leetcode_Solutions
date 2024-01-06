/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	let splitted = s.split(" ");
	return splitted
		.filter((w) => w !== "")
		.reverse()
		.join(" ");
};
