let blocks = [
	{
		Gym: false,
		School: true,
		Store: false,
	},
	{
		Gym: true,
		School: false,
		Store: false,
	},
	{
		Gym: true,
		School: true,
		Store: false,
	},
	{
		Gym: false,
		School: true,
		Store: false,
	},
	{
		Gym: false,
		School: true,
		Store: true,
	},
];

let req = ["School", "Store", "Gym"];

function findShortestPath(blocks) {
	let mapping = {};
	let count = 0;

	for (let i = 0; i < blocks.length; i++) {
		// Iterating Blocks
		let currentBlock = blocks[i];

		for (let type in currentBlock) {
			// Inside Block
			if (currentBlock[type]) continue;
			let left = i - 1;
			let right = i + 1;
			let min = 0;

			while (left >= 0 || right < blocks.length) {
				if (left >= 0) {
					if (!blocks[left][type]) {
						left--;
					} else {
						min = i - left;
						break;
					}
				}

				if (right < blocks.length) {
					if (!blocks[right][type]) {
						right++;
					} else {
						min = right - i;
						break;
					}
				}
			}

			count = Math.max(count, min);
		}
		mapping[i] = count;
		count = 0;
	}
	return mapping;
	//TODO return key from mapping which has the lowest value
}

console.log(findShortestPath(blocks));

// No. of block -> N
// No. of Types in each Block -> M
// No. of Iterations in each Types Hunting -> N

//    4
//   2       => 2x2x2x2

//  N
// M

// 				2N
// O   (M    )
