// https://www.codewars.com/kata/iq-test/train/javascript

var numberSet = [];
var evenNums = {};
var oddNums = {};

function iqTest(nums){
//   // remove spaces
//   var matches = trimdNums.match(/\d+/g);
//   if (matches != null) {
//     console.log('number');
//   }  
//   //console.log(trimdNums.length);  
//   //console.log(numbers.charCodeAt(0));
// //   for(var n = 0; n <= trimdNums.length; n++) {
// //     console.log(trimdNums.charAt(n));
// //   }

//   var trimdNums = nums.replace(/ /g,"").split("");
//   trimdNums.filter(function(trimdNums) { 
//     return (trimdNums & 1) === 0; 
//   });

  var trimdNums = nums.split(" ");
  for (var i = 0; i <= trimdNums.length; i++) {
  	if (trimdNums[i] !== undefined) {
  		var numb = trimdNums[i];
  		var numbProp = 'numb' + trimdNums[i];
  		// console.lognumb);
			numberSet.push({ [ numbProp ]: { nmb: numb, index: i, evenness: isEven(numb) } });

	  	// if (isEven(trimdNums[i])) {
	  	// 	// evenNums['number ' + trimdNums[i] ] = trimdNums[i];
	  	// 	numberSet.trimdNums[i] = {value: trimdNums[i], index: i, evenness: true};
	  	// 	// dictionaries.english_to_french = {english:"hello",french:"bonjour"}
	  	// } else {
	  	// 	oddNums.push(trimdNums[i]);
	  	// }  		
  	}
  }

	var result = numberSet.filter(function( obj ) {
		// console.log( obj.evenness == false );
		// console.log(obj.keys[evenness]);
	});

	for (var key in numberSet) {
	   var obj = numberSet[key];
	   // console.log(obj);
	   for (var prop in obj) {
	  
	   		if(obj[prop].evenness === false) {
	   			console.log(obj[prop].index);
	   		}
	   		// console.log(obj[prop].evenness);
	   		// return condition? returnValue1 : returnValue2;
				// var subObj = prop + " = " + obj[prop].evenness;
				// console.log(subObj);
				// console.log(subObj.hasOwnProperty(false));
				// console.log(subObj.hasOwnProperty(key));
				// if ()
	  }
	}

	// console.log(numberSet);
	console.log(result);
 
  // console.log('iqTest evenNums= ' + evenNums + ', array length= ' + evenNums.length);  
  // console.log('iqTest oddNums= ' + oddNums + ', array length= ' + oddNums.length);  

	// check length of array to find which one is outlier
	// if (evenNums.length > oddNums.length) {
	// 	return (//index of)
	// }
	// find outlier index in original array by using value
}

function isEven(n) {
  n = Number(n);
  return n === 0 || !!(n && !(n%2));
}

function isOdd(n) {
  return isEven(Number(n) + 1);
}

iqTest("2 8 9 8 6 4 6");