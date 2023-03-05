/** @format */

//Question 1

// What are the differences between mutating array methods and
// non-mutation array methods in JavaScript. List 5 array methods that fall
// under each of them.

// Answer
// Mutating Array Methods in JavaScript are array methods that changes the array itself instead of returning a new array with the new changes. While Non-mutating array methods are the array methods which returns a whole new array which has all the changes.

// Examples of Mutating Array Methods
// - array.pop
// - array.push
// - array.splice
// - array.sort
// - array.unshift

// Examples of Non-mutating Array Methods
// - array.concat
// - array.indexOf
// - array.includes
// - array.join
// - array.slice

//Question 2

// Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’].
//Perform these operations on them

// 1. Add ‘Kotlin’ to the end of the array
// 2. Add ‘Java’ after ‘Ruby’
// 3. Remove the first item in the array
// 4. Add ’Scala’ and ‘Swift’ to the beginning of the array
// 5. Replace ‘PHP’ with ‘Go’ and ‘Rust

//Answers

// 1. Add ‘Kotlin’ to the end of the array
// let languages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
// languages.push("kotlin");
// console.log(languages);

// 2. Add ‘Java’ after ‘Ruby’
// let languages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
// languages.splice(3, 0, "Java");
// console.log(languages);

// 3. Remove the first item in the array
// let languages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
// languages.shift("C#");
// console.log(languages);

// 4. Add ’Scala’ and ‘Swift’ to the beginning of the array
// let languages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
// languages.unshift("Scala", "Swift");
// console.log(languages);

// 5. Replace ‘PHP’ with ‘Go’ and ‘Rust
// let languages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
// languages.splice(3, 1, "Go", "Rust");
// console.log(languages);

//Question 3
// What will be the value of fruit after calling the function changeFruit?
let fruit = ["apple", "mango", "banana"];
function changeFruit(fruit) {
	fruit[2] = "orange";
	return fruit;
}

console.log(
	`The value of fruit after calling changeFruit is ${changeFruit(fruit)}`
); // ["apple", "mango", "orange"]

//Question 4
// Write a function that accepts an array of numbers as an argument. Return
// the maximum value in the array.
// e.g., max([4, 5, 10, -2]) // maximum value is 10

function findMaxValue(arr) {
	let maxValue = 0;
	for (i = 0; i < arr.length; i++) {
		if (arr[i] > maxValue) {
			maxValue = arr[i];
		}
	}
	return maxValue;
}

let maximumValue = findMaxValue([5, 10, 50, 100, 200]);

console.log(`maximum value is ${maximumValue}`);

//Question 5
// Write a function called valTimesIndex which accepts an array of numbers
// and returns a new array with each value multiplied by the index it is at in
// the array:
// e.g.,
// valTimesIndex([1,2,3]) // [0,2,6]
// valTimesIndex([5,10,15]) // [0,10,30]

function valTimesIndex(arrayOfNumbers) {
	return arrayOfNumbers.map((val, index) => val * index);
}
let array = [5, 6, 20];
let multipliedArray = valTimesIndex(array);

console.log(multipliedArray);
