// var vowelTest = (function() {
//   var re = /^[aeiou]$/i;
//   return function(s) {
//     return re.test(s);
//   }
// })();
// var ages = [3, 10, 18, 20];
// function checkAdult(age) {
//     return age >= 18;
// }


// var vowelsCleaned = [];

// function checkVowel(letter) {
// 	return ~vowels.indexOf(letter);
// };
// also see: https://davidwalsh.name/string-replace-javascript

function disemvowel(letters) {
	var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
	var vowelCount = 0;
	var vowelsRemoved = "";
  for(var i = 0; i < letters.length; i++) {
	 	// if letter equals -1, it doesnt exist in array of vowels
    if (vowels.indexOf(letters.charAt(i)) === -1) {
			vowelsRemoved = vowelsRemoved + letters.charAt(i);
    } else {
    	vowelCount++;
    	// console.log(`vowel removed, ${vowelCount} times`);
    }
  }
  return vowelsRemoved;
  // console.log(`total vowels removed = ${vowelCount} \ndisemvoweled string = ${vowelsRemoved}`);
};

disemvowel('This website is boring LOL!');

