// count number of steps to sort bubble array

console.clear();
// INITIAL DATA
const N = 4; // number of elements in list
let inputs = [4, 3, 2, 1]; // elements
let steps = 0;

function countSteps(array: any) {
  let arrResult = array;
  let isSortedArray = true;
  for (let i = 0; i < N; i++) {
    const currentElement = array[i];
    if (currentElement > array[i + 1]) {
      isSortedArray = false;
      steps += 1;
      arrResult[i] = array[i + 1];
      arrResult[i + 1] = currentElement;
    }
  }
  console.log("steps", steps);
  console.log("arrResult", arrResult);
  if (!isSortedArray) countSteps(arrResult);
}

countSteps(inputs);
