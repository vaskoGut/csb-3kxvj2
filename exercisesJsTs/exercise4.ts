const test = [1, 2, 3];

test.forEach((num) => {
  const varTest = "test";
  console.log("shit", num);
});

console.log("varTest", varTest);

// why Var test isnt vailable? Cause forEach method has own block scope
