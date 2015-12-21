var fs = require("fs")


input = "1113122113"


function run(value, a, max) {
	var result = ""
	var match = value.match(/([0-9])(\1*)/g)
	//console.log(match)
	for (var i = 0; i < match.length; i++) {
		//console.log(match[i]);
		//console.log(match[i].length + "" + match[i][0])
		result +=  match[i].length + "" + match[i][0]
	}
	//console.log(result)
	if(a == max) return result
	return run(result, ++a, max)
}

console.log(run(input, 1, 50).length)
