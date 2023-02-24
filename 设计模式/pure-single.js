/**
 * 纯净的单例模式
 * 仅有一个实例对象
 * auth wh
 */
class God {

  static instance = null;

  constructor() {
    this.human = [];
    God.instance =  God.instance || this;
    return God.instance;
  }

  create(item) {
    this.human.push(item);
  }
}

module.exports = God;