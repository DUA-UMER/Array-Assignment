"use strict";
//QUESTION NO 01
//Creat an aarray named fruits that contain the followimg
let fruits = ['apple', 'banana', 'mango', 'orange'];
console.log(fruits);
//QUESTION NO 02
//Declare an array nemed numbers that can contain only number elements & initialize
//it with the values 10,20,30, & 40.
let numbers = [10, 20, 30, 40];
console.log(numbers);
//QUESTION NO 03
//Access the third element of the fruits array & assign it to a variable named thiredfruit.
let thiredfruit = fruits[2];
console.log(fruits[2]);
//QUESTION NO 04
//Change the second element of the nubmers array to 25.
numbers[1] = 25;
console.log(numbers);
//QUESTION NO 05
//Add the element "grape" to the end of of the fruits array using the methode
fruits.push('grape');
console.log(fruits);
//QUESTION NO 06
//Remove the last element from the fruits array using the methode and assign it
//to a variable named lastFruit.
let lastFruit = fruits.pop();
console.log(fruits);
//QUESTION NO 07
//Remove the first element from the fruits array using the methode and assign
//it to a variable named firstFruit
let firstFruit = fruits.shift();
console.log(fruits);
//QUESTION NO 08
//Add the element "kiwi" to the begining of the fruits array using the methode.
fruits.unshift('kiwi');
console.log(fruits);
//QUESTION NO 09
//Remove 2 elements from the fruits array starting from index 1 using thw methode
fruits.splice(1, 2);
console.log(fruits);
//QUESTION NO 10
//Insert the elements "pineapple" & "pear" at index 2 of the fruits array
// using the methode
fruits.splice(2, 0, 'pineapple', 'pear');
console.log(fruits);
//QUESTION NO 11
//Creat a new array named citrusFruits that contains the first two elements
//of the fruits array using the methode.
let citrusFruits = fruits.slice(0, 2);
console.log(citrusFruits);
//QUESTION NO 12
//Creat a new array named lastTwofruits that contain the last two elements
//of the fruits array using the methode
let lastTwofruits = fruits.slice(-2);
console.log(lastTwofruits);
