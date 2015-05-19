// Write a function coins() that takes 
// an amount of US ¢, and returns the smallest 
// possible array of coins to make up that sum.
// 
// The coins in the returned array should be
// sorted from highest to lowest.
//
// The available coins are 25¢, 10¢, 5¢, 1¢

function coins(sum){
	var coinsReturned = []
	var tender = [25, 10, 5, 1]
	tender.reduce(function (customer, value) {
		if (customer >= value) {
			var times = Math.floor(customer/value)
			for (i = 0; i < times; i++) [
				coinsReturned.push(value)
				customer -= value
			]

		}
	}, sum)
	return coinsReturned
}
// tests
// ---
var result = coins(11)
// --> 10, 1
console.assert( result instanceof Array )
console.assert( result[0] === 10 && result[1] === 1 )

result = coins(39)
// --> 25, 10, 1, 1, 1, 1
console.assert( result[0] === 25 && result[1] === 10 && result[2] === 1 && result[3] === 1 && result[4] === 1 && result[5] === 1)