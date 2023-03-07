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

const Pub = new Pub();

const ev1 = new EventBus();
const ev2 = new EventBus();
// 订阅主题
ev1.$on(data => {
  console.log(`${data}==>订阅者1收到消息了`);
});
ev1.$on(data => {
  console.log(`${data}==>订阅者2收到消息了`);
});
ev2.$on(data => {
  console.log(`${data}==>订阅者2收到消息了`);
});
ev2.$once(data => {
  console.log(`${data}==>订阅者3收到消息了`);
});
// 加入主题
Pub.$increase(ev1);
Pub.$increase(ev2);
// 发布主题
Pub.$broadcast(ev1, '主题1更新了～');
Pub.$broadcast(ev2, '主题2更新了～');
Pub.$broadcast(ev2, '主题2再次更新了～');
