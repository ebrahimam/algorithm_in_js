

class TreeNode{
      constructor(key,value=key,parent=null) { 
            this.key =key;
            this.value =value;
            this.parent =parent;
            this.children = []
      }

      get isLeaf(){
            return this.children.length ===0
      }

      get hasChildren(){
            return !this.isLeaf;
      }
}

class Tree{
      constructor(key,value=key) {
            this.root = new TreeNode(key,value);
      }
      
      *preOrederTraversal(node=this.root) { 
            yield node
      }
}

