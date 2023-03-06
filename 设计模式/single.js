/**
 * 单例模式
 * 仅有一个实例对象
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

const god = God.getInstance();
god.create('小王');
console.log(god.human);

const _god = God.getInstance();
god.create('小刘');
console.log(god.human);
