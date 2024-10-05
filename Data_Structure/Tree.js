// *********************TREE*****************


class TreeNode {
      constructor(value) {
            this.value = value;
            this.children = []
      }
      addChild(child) {
            this.children.push(child)
      }
}

class Tree {
      constructor(rootValue) {
            this.root = new TreeNode(rootValue)
      }

      //pre-order traversal
      traversePreOrder(node = this.root) {
            node.children.forEach(child => this.traversePreOrder(child))
      }

      //post-order traversal
      traversePostOrder(node = this.root) {
            node.children.forEach(child => this.traversePostOrder(child))
      }

      //level-order
      traverseLevelOrder() {
            const queue = [this.root]
            while (queue.length > 0) {
                  const node = queue.shift();
                  queue.push(...node.children)
            }
      }

}


//example 
const tree = new Tree('Root');
const child1 = new TreeNode('Child 1');
const child2 = new TreeNode('Child 2');

tree.root.addChild(child1);
tree.root.addChild(child2);
child1.addChild(new TreeNode('Child 1.1'));
child1.addChild(new TreeNode('Child 1.2'));
child2.addChild(new TreeNode('Child 2.1'));

// Traversals
console.log('Pre-order traversal:');
tree.traversePreOrder();

console.log('Post-order traversal:');
tree.traversePostOrder();

console.log('Level-order traversal:');
tree.traverseLevelOrder();