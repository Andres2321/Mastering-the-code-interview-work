// Recursion
    // A function that calls itself within itself and run again
    // Anything you do with a recursion can be done iteratively (loop)

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

// Pros
    // DRY
    // Readability

// Cons
    // Large stack


// Every time you sre using a tree or converting something into a tree, consider recurs ion.
    // 1. Divided into a number of subproblems that are smaller instances of the same problem.
    // 2. Each instances of the subproblem is identical in anture
    // 3 .The solutions of each subproblem can ve combined to solve the problem at hand
    
// Divide and conquer using recursion
