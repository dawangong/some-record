/** 
 * 二叉搜索树
 * 只有两个字节点 左侧存储比父节点小的 右侧存储比父节点大的
 * insert 插入一个键
 * inFor 中序遍历节点 由小到大访问
 * preFor 前序遍历节点 先本身再后代
 * afterFor 后序遍历节点 先后代再本身
 * min  返回最小的值/键对
 * max  返回最大的值/键对
 * search 搜索一个键
 * remove 移除一个键
 * # 声明 private 属性
 * auth: wh
 */

const {
  compare
} = require("./utils")

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  #root;

  constructor() {
    this.#root = null;
  }

  insert(key) {
    if (!this.#root) {
      this.#root = new Node(key);
    } else {
      this.#insertNode(this.#root, key);
    }
  }

  #insertNode(node, key) {
    if (compare(key, node.key) < 0) {
      if (!node.left) {
        node.left = new Node(key);
      } else {
        this.#insertNode(node.left, key);
      }
    } else {
      if (!node.right) {
        node.right = new Node(key);
      } else {
        this.#insertNode(node.right, key);
      }
    }
  }

  inFor(cb) {
    this.#inForNode(this.#root, cb);
  }

  #inForNode(node, cb) {
    if (!node) return false;
    this.#inForNode(node.left, cb);
    cb(node.key);
    this.#inForNode(node.right, cb);
  }

  preFor(cb) {
    this.#preForNode(this.#root, cb);
  }

  #preForNode(node, cb) {
    if (!node) return false;
    cb(node.key);
    this.#preForNode(node.left, cb);
    this.#preForNode(node.right, cb);
  }

  afterFor(cb) {
    this.#afterForNode(this.#root, cb);
  }

  #afterForNode(node, cb) {
    if (!node) return false;
    cb(node.key);
    this.#afterForNode(node.left, cb);
    this.#afterForNode(node.right, cb);
  }

  min() {
    let current = this.#root;
    while(current && current.left) {
      current = current.left;
    };
    return current;
  }

  max() {
    let current = this.#root;
    while(current && current.right) {
      current = current.right;
    };
    return current;
  }

  search(key) {
    let res = false;
    this.#inForNode(_key => {
      if(compare(key, _key) === 0) {
        res = true;
      }
    });
    return res;
  }

  remove(key) {
    this.#root = this.#removeNode(this.#root, key);
  }

  #removeNode(node, key) {
    if(!node) {
      return null;
    }

    if(compare(key, node.key) < 0) {
      node.left = this.#removeNode(node.left, key);
      return node;
    } else if(compare(key, node.key) > 0) {
      node.right = this.#removeNode(node.right, key);
      return node;
    } else {
      if(!node.left && !node.right) {
        node = null;
        return node;
      }

      if(!node.left) {
        node = node.right;
        return node;
      }

      if(!node.right) {
        node = node.left;
        return node;
      }

      const minNode = this.min(node.right);
      node.key = minNode.key;
      node.right = this.#removeNode(node.right, minNode.key);
      return node;
    }
  }

}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(12);
tree.insert(14);
tree.insert(8);

tree.inFor(key => {
  console.log(key, "in");
});

tree.preFor(key => {
  console.log(key, "pre");
});

tree.remove(12);

tree.afterFor(key => {
  console.log(key, "after");
});

console.log(tree.min(), "min");
console.log(tree.max(), "max");