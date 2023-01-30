import Sum from "./statistics.js";
import Avg from "./statistics2.js";

var randomNumbers = [ 
    Math.floor(Math.random() * 100), 
    Math.floor(Math.random() * 100), 
    Math.floor(Math.random() * 100)];

console.log(`Sum of ${randomNumbers.length} random generated numbers is: ${Sum(randomNumbers)}`);
console.log(`Average of ${randomNumbers.length} random generated numbers is: ${Avg(randomNumbers)}`);