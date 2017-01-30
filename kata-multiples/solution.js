function solution(number){
  var sumArray = [];

  for (var i = 1; i < number; i++) {
  	//console.log(i);
  	if ( ((i % 3) === 0) || ((i % 5) === 0) ) {
  		sumArray.push(i);
  	} 
  }

  // console.log(sumArray);
  
  var sumOf = sumArray.reduce( function (a, b) { 
  	return a + b; 
  }, 0);

  return sumOf;
}

console.log(solution(9887));







// function test(n, expected) {
//   let actual = solution(n)
//   Test.assertEquals(actual, expected, `Expected ${expected}, got ${actual}`)
// }

// Test.describe("basic tests", function(){
//   test(10,23)
// })