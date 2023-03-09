/** 
 * 集合
 * 一组无序不重复的数据项
 * value value 形式存储
 * size 节点数 num
 * isEmpty 是否为空 true | false
 * add() 增加一个元素 true | false
 * delete() 删除一个元素 ele
 * has() 是否存在 true | false
 * clear() 清空
 * values() 值的集合
 * # 声明 private 属性
 * auth: wh
 */

class MySet {
  #list;

  constructor() {
    this.#list = {};
  }

  get size () {
    return this.values().length;
  }

  get isEmpty() {
    return this.values().length === 0;
  }

  has(ele) {
    return Object.prototype.hasOwnProperty.call(this.#list, ele);
  }

  add(ele) {
    if(!this.has(ele)) {
      this.#list[ele] = ele;
      return true;
    }
    return false;
  }

  delete(ele) {
    if(!this.has(ele)) {
      delete this.#list[ele];
      return true;
    }
    return false;
  }

  clear() {
    this.#list = {};
  }

  values() {
    return Object.values(this.#list);
  }

}

const set = new MySet();

set.add("1");
set.add("2");

console.log(set.values(), set.size);