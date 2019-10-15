// 监听属性变化类
class Observer {

  // 事件触发
  static emit(ev) {
    document.dispatchEvent(ev);
  }

  constructor() {
    // 相关信息存储
    this.info = {};
  }

  // 返回监听的对象
  watch(obj) {
    return this.addProxy(obj);
  }

  // 事件监听器
  on(evStr, callback) {
    document.addEventListener(evStr, () => {
      callback(this.info);
    });
  }

  // proxy包装对象
  addProxy(obj) {
    const that = this;
    const handle = {
      get(target, prop) {
        const val = target[prop];
        const oldVal = target[prop];
        that.info = {
          val,
          oldVal,
          prop
        };
        Observer.emit(new Event('read'));
        return val;
      },
      set(target, prop, val) {
        const oldVal = target[prop];
        that.info = {
          val,
          oldVal,
          prop
        };
        target[prop] = val;
        // 根据值是否变化选择触发的事件
        if(oldVal !== val) {
          Observer.emit(new Event('change'))
        } else {
          Observer.emit(new Event('update'));
        }
        return true;
      }
    };
    for (let prop in obj) {
      // 过掉原型链上的内部属性
      if(obj.hasOwnProperty(prop) && typeof obj[prop] === 'object' && obj[prop] !== null) {
        obj[prop] = this.watch(obj[prop]);
      }
    }
    return new Proxy(obj, handle);
  }
}

const a = { b: {c: 3}};
// 初始化一个观察类
const observer = new Observer();
// 调用其watch方法监听并返回一个proxy包装后的对象
const obj = observer.watch(a);
// 通过实例对象的on方法监听属性的变化
observer.on('change', info => {
  console.log(info);
  // 从中可以得到读取或更改的属性及其新值、旧值.
});
// 手动更改属性值
obj.b.c = 100;
