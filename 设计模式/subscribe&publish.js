/**
 * 发布订阅模式
 * 监听事件并解藕监听和管理的强耦合
 * auth wh
 */
// 事件总线（调度中心）
class EventBus {
  constructor() {
    this.subscribers = [];
  }

  $on(fn) {
    this.subscribers.push(fn);
  }

  $off(fn) {
    this.subscribers.forEach((_fn, index) => {
      fn === _fn && this.subscribers.splice(index, 1);
    })
  }

  $once(fn) {
    fn.once = true;
    this.subscribers.push(fn);
  }

  $notify(params) {
    this.subscribers.forEach(fn => {
      fn(params);
      fn.once && this.$off(fn);
    });
  }
}
// 发布
class Pub {
  constructor() {
    this.events = [];
  }

  $increase(event) {
    this.events.push(event);
  }

  $broadcast(event, ...params) {
    this.events.forEach(_event => {
      event === _event && _event.$notify(...params);
    })
  }
}

module.exports = {
  Pub: new Pub(),
  EventBus
};
