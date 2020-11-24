// Write two functions that finds the factorial of any number. 
// One should use recursive, the other should use a for loop


// Pseudocode
    // create a vairable that keeps track of the results
    // base case = we have multipled all of our numbers and must return the answer
        // take the number and multiply the number with number - 1 and store this in variable
    // the recursive case is the number - 1


function findFactorialRecursive(number){
    if (number === 2) {
        return 2
    }
    return number * findFactorialRecursive(number - 1)
}

findFactorialRecursive(5)


function findFactorialLiterative(number){
    let answer = 1

    if(number === 2) {
        answer = 2
    }

    for(let i = 2; i <= number; i++){
        answer =  answer * 1
    }
    return answer
}

findFactorialLiterative(5)