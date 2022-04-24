/*
In a school of 12 classes, the students thought of planting trees 
in and around the school to reduce air pollution.
It was decided that the number of trees that each class will plant will 
follow an arithmetic progression, e.g., class 1 will plant X tree,
class 2 will plant Y trees and so on till class 12.
How many trees will be planted by the students?

A idea from Spring Challenge 2021.
Good luck...
*/

const term1 = 1111; // example numbers
const term2 = 2456;
let treesNumber = 0;
let treeId = term1;
for (let i = 0; i < 12; i++) {
  treesNumber += treeId;
  treeId += term2 - term1;
}
console.log(treesNumber);
