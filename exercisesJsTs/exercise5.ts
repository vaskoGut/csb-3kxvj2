/*
In a town there are X men, each man has X wives and each wife has X kids, 
you should print the total T number of people in this town.
 */

const test = 7;

const men = test;
const women = men * test;
const children = women * test;

const result = men + women + children;
