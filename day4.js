var hash = require('crypto').createHash

var input = "iwrupvqb"

function md5(value) { return hash('md5').update(value).digest('hex')}

var value = null
var i = 0

while(++i) {
	value = md5(input + i).slice(0,5)
	if(value === "00000") break
}

console.log("part 1 =", i)

var j = 0
while(++j) {
	value = md5(input + j).slice(0,6)
	if(value === "000000") break
}

console.log("part 2 =", j)