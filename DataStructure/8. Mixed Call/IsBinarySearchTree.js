class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  const isBinarySearchTree = (root) => {
    // todo
    // n = # nodes
    // Time: O(n)
    // Space: O(n)
    const values = []
    inOrderTraversal(root, values)
    console.log(values)
    return (isSorted(values))
  };
  
  const inOrderTraversal = (root, values) => {
    if (root === null) return
    inOrderTraversal(root.left, values)
    values.push(root.val)
    inOrderTraversal(root.right, values)
  }
  
  const isSorted = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
      const current = numbers[i]
      const next = numbers[i + 1]
      if (next < current) {
        return false
      }
    }
    return true
  }
  
  const a = new Node(12);
  const b = new Node(5);
  const c = new Node(18);
  const d = new Node(3);
  const e = new Node(9);
  const f = new Node(19);
  
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  
  isBinarySearchTree(a); // -> true
  module.exports = {
    isBinarySearchTree,
  };
  