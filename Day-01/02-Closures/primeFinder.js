create a function 'isPrime' that returns T/F depending on the given number is a prime number or not.
The algorithm that checks the number for prime should NOT be executed more than once for the given number

isPrime(100) //=> Run the algorithm
isPrime(101) //=> Run the algorithm
isPrime(100) //=> Should not run the algorithm
isPrime(101) //=> Should not run the algorithm
isPrime(102) //=> Run the algorithm
isPrime(103) //=> Run the algorithm
isPrime(103) //=> Should not run the algorithm

var isPrime = (function (){
	var cache = {};
	function checkPrime(n){
		console.log('processing ', n);
		if (n <= 3) return true;
		for(var i=2; i <= (n/2); i++)
			if(n % i === 0) return false;
		return true;
	}
	return function(n){
		if (typeof cache[n] === 'undefined')
			cache[n] = checkPrime(n);
		return cache[n];
	}
})();

var isOddOrEven = (function (){
	var cache = {};
	function checkOddOrEven(n){
		console.log('processing ', n);
		return n% 2 === 0 ? 'even' : 'odd';
	}
	return function(n){
		if (typeof cache[n] === 'undefined')
			cache[n] = checkOddOrEven(n);
		return cache[n];
	}
})();

function memoize(algoFn){
	var cache = {};
	return function(n){
		if (typeof cache[n] === 'undefined')
			cache[n] = algoFn(n);
		return cache[n];
	}
}

var isOddOrEven = memoize(function checkOddOrEven(n){
	console.log('processing ', n);
	return n% 2 === 0 ? 'even' : 'odd';
});

var isPrime = memoize(function checkPrime(n){
		console.log('processing ', n);
		if (n <= 3) return true;
		for(var i=2; i <= (n/2); i++)
			if(n % i === 0) return false;
		return true;
	});

function memoize(algoFn){
	var cache = {};
	return function(){
		var key = [].join.call(arguments, '-');
		if (typeof cache[key] === 'undefined')
			cache[key] = algoFn.apply(this, arguments);
		return cache[key];
	}
}