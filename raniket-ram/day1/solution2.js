// ------------------ Solution  ------------------

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  
};


// ------------------------ Code Driver ---------------------------

let input1 = [[1,1,0],[1,0,1],[0,0,0]]
let output1 = [[1,0,0],[0,1,0],[1,1,1]]


let input2 = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
let output2 = [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]


let ans1 = flipAndInvertImage(input1)
console.log('Expected : ', output1, '\nReceived : ', ans1)

console.log('\n')

let ans2 = flipAndInvertImage(input2)
console.log('Expected : ', output2, '\nReceived : ', ans2)
