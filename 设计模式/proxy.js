/**
 * 代理模式
 * 代理一个函数或者类的功能
 * auth wh
 */

/**
 * js中常见: 虚拟代理 、 缓存代理
 * 虚拟代理: 延迟处理,减少开销: 监听处理、http请求合并
 * 缓存代理: 提升性能,空间复杂度换取时间复杂度: 函数记忆
 */

const unrealProxy = (http, limit = 3000) => {
  let timer = null;
  let cache = [];

  return (httpId) => {
    cache.push(httpId);

    if(timer) {
      return false;
    }
    timer = setTimeout(() => {
      http();
      cache = [];
      timer = null;
    }, limit);
  }
};

const upload = unrealProxy(() => console.log("upload"));
upload();


const memoryCache = (fn) => {
  const cache = {};
  return function() {
    const args = Array.prototype.join.call(arguments, ",");
    
    if(args in cache) {
      return cache[args];
    } else {
      const res = fn.apply(this, arguments);
      return cache[args] = res;
    }
  }
};

const add = (a, b) => {
  console.log("called fn");
  return a + b;
}

const _add = memoryCache(add);
// only once
_add(1, 2);
// no call
_add(1, 2);