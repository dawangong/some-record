/**
 * 单例模式
 * auth wh
 */
class God {
  constructor() {
    this.instance = null;
    this.human = [];
  }

  static getInstance() {
    const { instance } = this;
    this.instance =  instance ? instance : new God();
    return this.instance;
  }

  create(item) {
    this.human.push(item);
  }
}

module.exports = God;
