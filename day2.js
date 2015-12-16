var fs = require("fs")

var input = fs.readFileSync("./day2.dat").toString()

var l = 0
var w = 1
var h = 2

function toInt(value) { return parseInt(value, 10) }
function sort(array) { array.sort(function (a, b) { return a - b}) }

//input = "3x4x2\n10x1x1"


var result = input
	.split("\n")
	.map(function(v){ return v.split("x") })
	.map(function(v){ return v })
	.map(function(v){ return [v[l]*v[w], v[w]*v[h], v[h]*v[l]] })
	.map(function(v){ return 2*(v[0] + v[1] + v[2]) + Math.min.apply(null, v) })
	.reduce(function(pos, v, i) { return pos + v }, 0)

console.log("part 1 =", result)



var result2 = input
	.split("\n")
	.map(function(v){ return v.split("x").map(toInt) })
	.map(function(v){ return v })
	.map(function(v){ var bow = v[l]*v[w]*v[h]; sort(v); return bow + (2*v[0]) + (2*v[1]) })
	.reduce(function(pos, v, i) { return pos + v }, 0)

console.log("part 2 =", result2)