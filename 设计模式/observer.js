/**
 * 观察者模式
 * 监听事件
 * auth wh
 */
class Observer {
  constructor () {
    this.events = {}
  }

  $on(name, handle) {
    this.events[name] = handle;
  }

  $off(names) {
    if(name in this.events) {
      this.events = JSON.parse(JSON.stringify(this.events, (key, value) => {
        if (names.includes(key)) {
          return null;
        }
        return value;
      }))
    }
  }

  $once(name, handle) {

    const _handle = (...params) => {
      handle(...params);
      this.$off([name]);
    };

    this.$on(name, _handle);
  }

  $emit(name, ...params) {
    if(name in this.events) {
      this.events[name].apply(this, params);
    }
  }
}

module.exports = Observer;
