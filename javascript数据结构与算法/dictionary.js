/** 
 * 字典 映射
 * 一组无序不重复的数据项
 * key value 形式存储
 * size 节点数 num
 * isEmpty 是否为空 true | false
 * set() 添加新元素
 * remove() 删除指定元素
 * hasKey() 是否存在 true | false
 * get() 根据key查找value
 * clear() 清空
 * keys() keys 集合
 * values() values 集合
 * keyValues() [key, value] 集合
 * forEach() 迭代器,return false停止
 * # 声明 private 属性
 * auth: wh
 */

const { isBase, baseCheck, Value } = require("./utils");

class Dictionary {
  #table;

  constructor() {
    this.#table = {};
  }

  get size() {
    return this.keyValues().length;
  }

  get isEmpty() {
    return this.size === 0;
  }

  hasKey(key) {
    return !!this.#table[baseCheck(key)];
  }

  set(key, value) {
    if(isBase(key).result && isBase(value).result) {
      this.#table[baseCheck(key)] = new Value(baseCheck(key), value);
      return true;
    } 
    return false;
  }

  remove(key) {
    if(this.hasKey(baseCheck(key))) {
      delete this.#table[baseCheck(key)];
      return true;
    }

    return false;
  }

  get(key) {
    if(this.hasKey(baseCheck(key))) {
      return this.#table[baseCheck(key)];
    }

    return undefined;
  }

  keyValues() {
    return Object.values(this.#table);
  }

  keys() {
    return this.keyValues().map(item => item.key);
  }

  values() {
    return this.keyValues().map(item => item.value);
  }

  clear() {
    this.#table = {};
  }

  forEach(cb) {
    const keyValues = this.keyValues();
    for(let i = 0; i < keyValues.length; i++) {
      const { key, value } = keyValues[i];
      const res = cb(key, value);
      if(res === false) {
        break;
      }
    }
  }

}

const md = new Dictionary();

console.log(md.size, md.isEmpty);

md.set(1, "1");

console.log(md.hasKey(1), md.size, md.isEmpty, md.get(1));
