// show people with age > 23

var test = [
  { name: "vas", age: 20 },
  { name: "sl", age: 25 }
];
var result = test.filter((elem, index) => elem.age > 23);
console.log("result", result);
