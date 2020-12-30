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
}

var tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(2);
tree.insert(13);
tree.insert(11);
tree.insert(16);
tree.insert(7);

console.log(tree.find(18));