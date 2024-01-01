/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
	let mapping = {};

	for (let i = 0; i < s.length; i++) {
		let currentChar = s[i];
		if (mapping[currentChar]) {
			if (mapping[currentChar] !== t[i]) return false;
		} else {
			for (let key in mapping) {
				if (mapping[key] === t[i]) return false;
			}
			mapping[currentChar] = t[i];
		}
	}

	return true;
};

console.log(isIsomorphic("paper", "title"));
//----------------------------------------------------

// {
// 	e: a,
// 	g: d,
// 	d: g,
//  c: f,
// }

// {
// 	b: b,
// 	a: a,
// 	d: g,
//  c: f,
// }
