// Recursion
    // A function that calls itself within itself and run again

let counter = 0
function inception(){
    if (counter > 3 ){
        return 'done'
    }
    counter++
    inception()
}

// output = undefined
    // we need to retunr inception() so it returns the result of other inceptions in the call stack
    let counter = 0
    function inception(){
        if (counter > 3 ){
        return 'done'
        }
        counter++
        inception()
    }

// 1. Identify the base case
// 2. Identify the recursive case
// 3. Get closer and closer and return when needed. Useallu you have 2 return