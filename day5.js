var fs = require("fs")

var input = fs.readFileSync("./day5.dat").toString()

//input = "ugknbfddgicrmopn\naaa\njchzalrnumimnmhp\nhaegwjzuvuyypxyu\ndvszwmarrgswjxmb"


var result = input
	.split("\n")
	.filter(function(v){
		if(!v) return false
		if(v.match(/ab|cd|pq|xy/g)) return false
		if(v.replace(/[^aeiou]/g, "").length < 3) return false
		if(!v.match(/(.)\1{1}/g)) return false

		return true
	})

console.log("part 1 =", result.length)

