/**
 * 单例模式
 * auth wh
 */
class God {

  static getInstance() {
    const { instance } = this;
    this.instance =  instance ? instance : new God();
    return this.instance;
  }

  constructor() {
    this.instance = null;
    this.human = [];
  }
  
  create(item) {
    this.human.push(item);
  }
}

module.exports = God;
