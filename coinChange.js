/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
	if (amount === 0) return 0;
	if (coins.length === 1 && coins[0] === 1) return amount;

	let bestCombination = helperCoinChange(coins, amount);

	if (bestCombination.length === 0) return -1;

	return bestCombination.length;
};

function helperCoinChange(coins, amount, memo = {}) {
	if (amount in memo) return memo[amount];
	if (amount === 0) return [];
	if (amount < 0) return null;

	let bestCombination = null;

	for (let coin of coins) {
		let remainder = amount - coin;
		let returnValue = helperCoinChange(coins, remainder, memo);

		if (returnValue !== null) {
			let result = [...returnValue, coin];

			if (bestCombination === null || bestCombination.length > result.length) {
				bestCombination = result;
			}
		}
	}

	memo[amount] = bestCombination;
	return bestCombination;
}

console.log(coinChange([9, 1, 2], 10));

// coins = [9,1,2], amount = 10
// coins = [9,1,2], amount = 1
// coins = [9,1,2], amount = 0
