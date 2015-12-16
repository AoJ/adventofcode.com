var fs = require("fs")

var input = fs.readFileSync("./day3.dat").toString()

function locate(pos) { return pos.join("x") }

var x = 0
var y = 1

var dic = {
	">": [1,0],
	"^": [0,1],
	"<": [-1,0],
	"v": [0, -1]
}

var pos = [0,0]
var grid = {}
grid[locate(pos)] = 1 //initial position

input
	.split("")
	.map(function(v, i){ return dic[v];  })
	.filter(function(v){ return v })
	.map(function(v) { pos[x] += v[x]; pos[y] += v[y]; return locate(pos) })
	.forEach(function(v) { if(!grid[v]) {grid[v] = 0} grid[v]++; })

console.log("part 1 =", Object.keys(grid).length)


pos = [[0, 0], [0, 0]]
grid = {}
grid[locate(pos[0])] = 2 //initial position for 2 santas

input
	.split("")
	.map(function(v){ return dic[v] })
	.filter(function(v){ return v })
	.map(function(v, i) { pos[i%2][x] += v[x]; pos[i%2][y] += v[y]; return locate(pos[i%2]) })
	.forEach(function(v) { if(!grid[v]) {grid[v] = 0} grid[v]++; })

console.log("part 2 =", Object.keys(grid).length)
