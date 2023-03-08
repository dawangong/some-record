class Node {
  constructor(ele) {
    this.ele = ele;
    this.next;
  }
};

class DoublyNode extends Node {
  constructor(ele) {
    super(ele);
    this.prev = prev;
  }
}

module.exports = {
  baseEqual: (a, b) => {
    const baseTypes = ["[object String]", "[object Number]", "[object Boolean]", "[object Undefined]", "[object null]" ];
    const isBase = value => baseTypes.includes(Object.prototype.toString.call(value))
    if(isBase(a) && isBase(b)) {
      return a === b;
    } else {
      throw new Error("not a base data type!");
    }
  },
  Node,
  DoublyNode,
};