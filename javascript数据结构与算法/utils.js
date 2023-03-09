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
  const baseTypes = ["[object String]", "[object Number]", "[object Boolean]"];
  const type = Object.prototype.toString.call(value);
  return {
    type,
    value: `${value}`,
    result: baseTypes.includes(type),
  };
}

class Value {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `${this.key}: ${this.value}`;
  }
}

module.exports = {
  isBase,
  baseEqual: (a, b) => {
    if(isBase(a).result && isBase(b).result) {
      return a === b;
    } else {
      throw new Error("not a base data type!");
    }
  },
  baseCheck: (v) => {
    if(isBase(v).result) {
      return v;
    } else {
      throw new Error("not a base data type!");
    }
  },
  Node,
  DoublyNode,
  Value,
};