/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const rowSize = matrix.length;
  const colSize = matrix[0].length;

  let leftPointer = [0, 0];
  let rightPointer = [rowSize - 1, colSize - 1];

  while (leftPointer[0] <= rightPointer[0] && leftPointer[1] <= rightPointer[1]) {
    const middlePointer = [
      leftPointer[0] + Math.floor((rightPointer[0] - leftPointer[0]) / 2),
      leftPointer[1] + Math.floor((rightPointer[1] - leftPointer[1]) / 2),
    ];

    if (matrix[middlePointer[0]][middlePointer[1]] === target) {
      return true;
    } else if (matrix[middlePointer[0]][middlePointer[1]] < target) {
      leftPointer = [middlePointer[0] + 1, middlePointer[1] + 1];
    } else {
      rightPointer = [middlePointer[0] - 1, middlePointer[1] - 1];
    }
  }

  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50],
    ],
    1
  )
);
