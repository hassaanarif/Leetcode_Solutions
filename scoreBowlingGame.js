function scoreBowlingGame(frames) {
  const rolls = frames.flat(); // Flatten the frames into a single array of rolls
  console.log("rolls", rolls);

  let score = 0;
  let rollIndex = 0;

  for (let frame = 0; frame < 10; frame++) {
    if (rolls[rollIndex] === 10) {
      // Strike
      score += 10 + rolls[rollIndex + 1] + rolls[rollIndex + 2];
      rollIndex += 1;
    } else if (rolls[rollIndex] + rolls[rollIndex + 1] === 10) {
      // Spare
      score += 10 + rolls[rollIndex + 2];
      rollIndex += 2;
    } else {
      // Open frame
      score += rolls[rollIndex] + rolls[rollIndex + 1];
      rollIndex += 2;
    }
  }

  return score;
}

console.log(scoreBowlingGame([[5, 3], [10], [4, 6], [3, 2], [10], [10], [2, 3], [6, 4], [10], [10, 10, 10]]));
