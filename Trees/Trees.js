// Perfect Binary Tree
    // Has all leaf nodes are full
    // No node that has one child its either 0 or more than one
    // The amount of nodes in each level are doubled


// Full Binary Tree
    // A node has either 0 or 2 children but never one child

    // Binary Search Tree
        // lookup = 0(log N)
        // insert = 0(log N)
        // delete = 0(log N)

        // If we know how many levels our tree has, we can find out how many total nodes there are
            // # of nodes = 2^h - 1
            // log nodes = height

        // good for searching and comparing
        // All child nodes to the right of the root node must be greater than the current node
            // Left decreases | right increases
        // Can only have up to 2 children

        // Pros
            // Better than O(n)
            // Ordered
            // Flexible size

        // Cons
            // No O(1) operation