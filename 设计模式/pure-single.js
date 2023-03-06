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

const god = new God();
god.create('小王');
console.log(god.human);

const _god = new God();
_god.create('小刘');
console.log(god.human);