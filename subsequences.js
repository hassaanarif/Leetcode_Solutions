function findSubsequences(string = "") {
  if (string.length === 0) return "";

  let subsequence = [];

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      let substring = string.substring(i, j);
      subsequence.push(`${substring}`);
    }
  }

  return subsequence;
}

//                           i = 0
//                            j = i + 1 = 1
console.log(findSubsequences(""));
