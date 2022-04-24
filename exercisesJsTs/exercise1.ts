/* EXERCISE:
Multiply all of the digits of N, and repeat same with obtained number 
till it consists of only one degit. Output the number of steps takes to do so.

example: step1. 3*9 = 27; step2 2*7 = 14; step3 = 1*4 = 4; Result: 3 steps.
 */

const input = 39;
let inputConverted: any = input.toString();
let steps: number = 0;

while (inputConverted.length > 1) {
  // convert value to array
  const valueArray = inputConverted.split("");
  // muliply of digits of number
  const multipliedNumber = valueArray.reduce(
    (total: any, current: any) => +total * +current
  );
  inputConverted = multipliedNumber + "";
  // update counter
  steps++;
}

console.log("result steps:", steps);
