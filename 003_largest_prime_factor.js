// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

var curPrime = 2;
var value = 600851475143;
var largestPrime;

var isPrime = function(num) {
	for (var i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

var findNextPrime = function(num) {
	num += 1;
	while (isPrime(num) === false) {
		num++;
	}
	return num;
}

while (curPrime <= value) {
	if (value % curPrime === 0) {
		value = value / curPrime;
		largestPrime = curPrime;
		curPrime = 2;
	} else {
		curPrime = findNextPrime(curPrime);
	}
}

console.log(largestPrime);


// alternative solution

function getMaxPrime(num) {
	var temp = num;

	for (var i = 2; i < temp; i++) {
		while (temp % i === 0) {
			temp /= i;
		}
	}
	console.log(temp);
}

getMaxPrime(600851475143);