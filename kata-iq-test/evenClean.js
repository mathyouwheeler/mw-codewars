// https://www.codewars.com/kata/iq-test/train/javascript

function iqTest(nums) {

  var trimdNums = [];
  var numberSet = [];
  var numberType;
  var evenCount = 0;
  var oddCount = 0; 
  var numb;
  var numbProp;
  var result;

  trimdNums = nums.split(" ");  
  for (var i = 0; i <= trimdNums.length; i++) {
    if (trimdNums[i] !== undefined) {
      numb = trimdNums[i];
      numbProp = 'numb' + trimdNums[i];
      numberSet.push({id:i+1, nmb: numb, evenness: isEven(numb) } );
    
      if (isEven(numb)) { 
        evenCount++; 
      } else {
        oddCount++;
      }
    }
  }

  numberType = evenCount > oddCount ? "even" : "odd";
  if (numberType === "even") {
    // go get the odd outlier
    result = numberSet.filter(function(ns) { return ns.evenness === false } );    
  } else {
    // go get the even outlier    
    result = numberSet.filter(function(ns) { return ns.evenness === true } );
  }
  console.log("result= " + result[0].id);
  return result[0].id;
}

function isEven(n) {
  n = Number(n);
  return n === 0 || !!(n && !(n%2));
}

iqTest("2 8 9 8 6 4 6");
iqTest("1 2 2");