// Hash Tables --- Objects

// Pros
    // Fast Looksups
    // Fast inserts
    // Flexible keys
// Cons
    // Unordered
    // Slow key iteration

    
// Key value pairs
    // Can only save your key as a string   

// idempotent -- a function given an input always outputs the same
    // Very fast data access
    // Memory address(key) ---> value

// Hash function - Any function that can be used to map data of any size to fixed size value

// insert - O(1)
// lookup - O(1)
// delete - O(1)
// search - O(1)

// Collision
    // When a hash function maps two different keys to the same table address
    // Time complexity O(n)


let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: () => console.log('ahhhhhh')
}

user.age //O(1)
user.spell = 'ksjfnvkjsdnf' //O(1)
user.scream() //O(1)
console.log(user)


// MAP()
    // allows more data types as keys
    // maintains insertion order
        // With an object there is no order. Inseted randomly
    const a = new Map()

// SETS()
    // stores keys and NO values
    const b = new Set()