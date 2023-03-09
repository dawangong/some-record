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

const isBase = (value) => {
  const baseTypes = ["[object String]", "[object Number]", "[object Boolean]", "[object Undefined]", "[object Null]" ];
  const type = Object.prototype.toString.call(value);
  return {
    type,
    str: `${value}`,
    result: baseTypes.includes(type),
  };
}

module.exports = {
  baseEqual: (a, b) => {
    if(isBase(a).result && isBase(b).result) {
      return a === b;
    } else {
      throw new Error("not a base data type!");
    }
  },
  baseToString: (v) => {
    if(isBase(v).result) {
      return isBase(v).str;
    } else {
      throw new Error("not a base data type!");
    }
  },
  Node,
  DoublyNode,
};