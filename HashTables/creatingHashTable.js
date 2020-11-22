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
}

const myHashTable = new HashTable(50)
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
