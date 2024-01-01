/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
	let ransomNoteSplit = ransomNote.split("");
	for (let char of magazine) {
		if (ransomNoteSplit.indexOf(char) !== -1) {
			ransomNoteSplit.splice(ransomNoteSplit.indexOf(char), 1);
		}

		if (ransomNoteSplit.length === 0) return true;
	}

	return ransomNoteSplit.length === 0;
};

console.log(canConstruct("a", "b"));
