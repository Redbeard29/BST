//Building a Binary Search Tree with insert and find functions

class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(val){
        var newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(val === current.val){
                return undefined;
            }
            if(val < current.val){
                if(!current.left){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }
            else if(val > current.val){
                if(!current.right){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    find(val){
        if(!this.root){
            return false; 
        }
        var current = this.root;
        var found = false;
        while(current && !found){
            if(val < current.val){
                current = current.left;
            }
            else if(val > current.val){
                current = current.right;
            }
            else{
                found = true;
            }
        }
        if(!found){
            return false;
        }
        return current;
    }
    //Implementing BFS and DFS with variations
    BFS(){
        var data = [];
        var queue = [];
        var node = this.root;
        queue.push(node);

        while(queue.length){
            node = queue.shift();
            data.push(node.val);
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }
        return data;
    }
    DFSPreOrder(){
        var visited = [];
        var current = this.root;
        function traverse(node){
            visited.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return visited;
    }
    DFSPostOrder(){
        var visited = [];
        var current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            visited.push(node.val);
        }
        traverse(current);
        return visited;
    }
    DFSInOrder(){
        var visited = [];
        var current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            visited.push(node.val);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return visited;
    }
}

var tree = new BinarySearchTree();

tree.insert(10);
tree.insert(15);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(20);
