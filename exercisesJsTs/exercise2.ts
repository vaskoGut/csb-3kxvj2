/**
 * find highest prime number
 **/

const numbers: number[] = [1, 2, 3, 10, 6, 7, 8, 9, 4, 5];
const sortedNumbers = numbers.sort((a, b) => a - b);

let highestNumber = 0;
for (let i = 0; i < sortedNumbers.length; i++) {
  const N: number = sortedNumbers[i];

  if (N % 2 && N % 3 && N % 5 && highestNumber < N) {
    highestNumber = N;
  } else if (!highestNumber) highestNumber = -1;
}

console.log(highestNumber);
