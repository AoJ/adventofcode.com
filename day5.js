var fs = require("fs")

var input = fs.readFileSync("./day5.dat").toString()

//input = "ugknbfddgicrmopn\naaa\njchzalrnumimnmhp\nhaegwjzuvuyypxyu\ndvszwmarrgswjxmb"
input = "qjhvhtzxzqqjkmpb\nxxyxx\nuurcxstgmygtbstg\nieodomkazucvgmuy"


var result = input
	.trim()
	.split("\n")
	.filter(function(v){
		if(v.match(/ab|cd|pq|xy/g)) return false
		if(v.replace(/[^aeiou]/g, "").length < 3) return false
		if(!v.match(/(.)\1{1}/g)) return false

		return true
	})

console.log("part 1 =", result.length)


var result = input
	.trim()
	.split("\n")
	.filter(function(v){
		if(!v.match(/(.).\1/g)) return false
		var unique = Object.keys(v.match(/.{2}/g).reduce(function(o, v) { o[v] = v; return o }, {})).join("")
		if(v.length === unique.length) return false

		return true
	})

console.log("part 2 =", result.length)