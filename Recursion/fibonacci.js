// Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 1,2,2,3,5,8,13,21,34,55,89,144
// The pattern of the sequence is that each value is the sim of the sequence is that each 
// value is the sun of the 2 previous values, that means that for N=5 -> 2+3


function fibonacciIterative(n){
    let arr = [0, 1]
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[1 - 2] + arr[i-1])
    }

    return arr[n]
}

// fibonacciIterative(3)

function fibonacciRecursive(n){
    if(n < 2){
        return n
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

console.log(fibonacciRecursive(3))