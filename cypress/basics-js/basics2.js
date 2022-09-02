//node basics2.js 

//let cannot be redeclated
// var marks = Array(6)

 var marks = new Array(20,40,35,12,47,100)

// var marks = [20,40,35,7,47,100]
// console.log(marks[3])
// marks[3] = 7
// console.log(marks)
// console.log(marks.length)

// console.log(marks.indexOf(20))

var sum = 0
var even = new Array

for(let i = 0; i<marks.length; i++) {
    if (marks[i] % 2 == 0) {
        sum = sum + marks[i]
        even.push(marks[i])
    }
}

console.log(sum)
console.log(even)


