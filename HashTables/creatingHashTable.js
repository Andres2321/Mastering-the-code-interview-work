class HashTable {
    constructor(size){
        this.data = new Array(size)
    }

    _hash(key){
        let hash = 0
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) %
            this.data.length
        }
        return hash
    }

    // TC = O(1)
    set(key, value){ 
        let address = this._hash(key);
        // If we do not have anything in this space, add the following...
        if(!this.data[address]){
            this.data[address] = []
            this.data[address].push([key,value])
            console.log(this.data)
        } 
        // will add onto the collision array
        this.data[address].push([key,value])
    }

    // TC = O(1)
    get(key){
        let address = this._hash(key)
        const currentBucket = this.data[address]

        if(currentBucket) {
            for (let i = 0; i < currentBucket.length; i++){
                if (currentBucket[i][0] === key) currentBucket[i][1]
            }
        }
        return null
    }

    keys(){
        const keysArray = []
        for( let i = 0; i < this.data.length; i++){
            if(this.data[i]) {
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray
    }
}

// alternate keys() method with hash collision prevention
// keys() {
//     let result = []

//     if(this.data.length) undefined
//     for (let i = 0; i < this.data.length; i++) {
//         if(this.data[i] && this.data[i].length){
//             if(this.data.length > 1){
//                 for (let j = 0; j < this.data[i].length; j++) {
//                     result.push9this.data[i][j][0]
//                 }
//             } else {
//                 result.push(this.data[i][0])
//             }
//         }
//     }
// }

const myHashTable = new HashTable(50)
myHashTable.set('grapes', 10000)
myHashTable.set('orange', 30000)
myHashTable.set('tangerine', 50000)
myHashTable.set('apple', 20000)
myHashTable.get('grapes')
myHashTable.keys()
