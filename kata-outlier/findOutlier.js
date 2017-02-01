/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns N.

;;;;ex;;;;
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160
*/ 
var oddNumbers = [];
var evenNumbers = [];
// var arrayToTest = [2, 4, 0, 100, 4, 11, 2602, 36];
// var arrayToTest = [160, 3, 1719, 19, 11, 13, -21];
var arrayToTest = [160, 3, -9081719, 19, -11, 13, -21];

function findOutlier(integers){
  
  var arrayToTest = integers;
  for (var i = 0; i < arrayToTest.length; i++) {
  	// console.log(arrayToTest[i]);
  	// check if it is a legal number

if (arrayToTest[i] === parseInt(arrayToTest[i], 10)) {
	console.log("arrayToTest[i] is integer");
} else {
	console.log("arrayToTest[i] is not an integer");
}

  	// if ( isFinite( parseFloat( arrayToTest[i] ) ) ) {
  		
  	// 	// console.log(`${arrayToTest[i]} is a legal number, OK to continue`);
  	// 	// now lets find out the count of even/odd numbers coming through the loop
  	// 	if ( isEven( arrayToTest[i] ) ) {
  	// 		evenNumbers.push( arrayToTest[i] );
  	// 	} else {
  	// 		oddNumbers.push( arrayToTest[i] );
  	// 	}

  	// } else {
  	// 	// console.log(`${arrayToTest[i]} is not a legal number!`);
  	// }

  	// // after loop compare array lengths
  	// if ( oddNumbers.length > evenNumbers.length ) {
  	// 	// return the ODD outlier
  	// 	// console.log(`The outlier is EVEN. Your outlier is: ${evenNumbers[0]}`);
  	// 	return evenNumbers[0];
  	// } else {
  	// 	// console.log(`The outlier is ODD. Your outlier is: ${oddNumbers[0]}`);  		
  	// 	return oddNumbers[0];
  	// }
  }
}

function isEven(n) {
	return n % 2 == 0;
}

function isOdd(n) {
	return Math.abs(n % 2) == 1;
}

findOutlier(arrayToTest);











