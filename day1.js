var fs = require("fs")

var input = fs.readFileSync("./day1.dat").toString()

var dic = {"(": 1, ")": -1}

var result = input
	.split("")
	.map(function(v){ return dic[v] })
	.filter(function(v){ return v })
	.reduce(function(pos, v, i) { return pos + v})

console.log("part 1 =", result)



var result = 0
input
	.split("")
	.map(function(v){ return dic[v] })
	.filter(function(v){ return v })
	.reduce(function(pos, v, i) { if(pos === -1 && result === 0) { result = i } return pos + v})

console.log("part 2 =", result)