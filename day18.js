var fs = require("fs")

var input = fs.readFileSync("./day18.dat").toString()

var neighbors = [
	[-1,-1],[ 0,-1],[ 1,-1],
	[-1, 0],        [ 1, 0],
	[-1, 1],[ 0, 1],[ 1, 1],
]

var on = "#"
var off = "."

var data = input
	.split("\n")
	.map(function(v){ return v.split("") })
	.filter(function(v){ return v && v.length })

var rows = data.length
var cols = data[0].length



function swap(state, neighborsCount, x, y) {
	if(state === on && [2, 3].indexOf(neighborsCount) >= 0) return on
	if(state === off && neighborsCount === 3) return on
	return off
}

function swap2(state, neighborsCount, x, y) {
	if(state === on && [2, 3].indexOf(neighborsCount) >= 0) return on
	if(state === off && neighborsCount === 3) return on
	if([0, cols-1].indexOf(x) >= 0 && [0, rows-1].indexOf(y) >= 0) return on
	return off
}

function clone(data) {
	return JSON.parse(JSON.stringify(data))
}


function run(swapFn, data, max, c) {
	var toSwap = []
	for (var i = 0; i < cols; i++) {
		for(var j = 0; j < rows; j++) {
			var neighborsCount = neighbors.reduce(function(c, n) {
				var x = i + n[0]
				var y = j + n[1]
				if (data[y] && data[y][x] === on) c += 1
				return c
			}, 0)
			toSwap.push([j, i, swapFn(data[j][i], neighborsCount, i, j)])
		}
	}

	var count = 0
	for(var k = 0; k < toSwap.length; k++) {
		data[toSwap[k][0]][toSwap[k][1]] = toSwap[k][2]
		if(toSwap[k][2] === on) count++
	}

	if(c >= max) return count
	return run(swapFn, data, max, ++c)
}

console.log(run(swap, clone(data), 100, 1))
console.log(run(swap2, clone(data), 100, 1))


return
