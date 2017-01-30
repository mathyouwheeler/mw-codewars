var series = 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16;

function seriesSum(n) {
	// natural numbers only as arguments
	// if 0 return 0.00
	// round answer to nearest 2 decimal places
	// ---Math.round(price / listprice * 100) / 100;
	// return answer as string
	if (n === 0) {
		return 0.00;
	} else {
		n = Math.round(n * 100) / 100;
		n = n.toString();
	}

	console.log(n);
	
}

seriesSum(1) => 1 + 1/4 = "1.25";

function isNatural(n) {
	if (typeof n !== 'number') {
		return 'Not a number';
	}
	return (n >= 0.0) && (Math.floor(n) === n) && n !== Infinity;
}

console.log(is_Natural(-15));