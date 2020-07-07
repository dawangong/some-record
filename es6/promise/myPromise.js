/**
 * promise 实现
 * fulfilled => resolved 替代
 */
class myPromise {

  static isFunction(fn) {
    return typeof fn === 'function';
  }

  static insideError(judge, fn) {
    return judge ? fn : value => {}
  }

  static isPromise(promise) {
    return [
      typeof promise === 'object',
      promise !== null,
      promise.then,
      typeof promise.then === 'function'
    ].every(item => item)
  }

  static next() {
    return (resolve, reject, fn, value) => {
      try {
        const result = fn(value);
        if (myPromise.isPromise(result)) {
          result.then(resolve, reject);
        } else {
          resolve(result)
        }
      } catch (e) {
        reject(e)
      }
    }
  }

  constructor(executor) {
    this.status = 'pending';
    this.value = undefined;
    this.onResolvedCallback = [];
    this.onRejectedCallback = [];

    try {
      executor(this.resolve, this.reject);
    } catch (e) {
      this.reject(e);
    }
  }

  resolve(value) {
    if (this.status === 'pending') {
      this.status = 'resolved';
      this.value = value;
    }
    this.onResolvedCallback.forEach(fn => fn(value))
  }

  reject(value) {
    if (this.status === 'pending') {
      this.status = 'rejected';
      this.value = value;
    }
    this.onRejectedCallback.forEach(fn => fn(value))
  }

  then(onResolved, onRejected) {
    onResolved = myPromise.insideError(myPromise.isFunction(onResolved), onResolved);
    onRejected = myPromise.insideError(myPromise.isFunction(onRejected), onRejected);

    switch (this.status) {
      case 'pending':
        return new myPromise((resolve, reject) => {
          this.onResolvedCallback.push(myPromise.next()(resolve, reject, onResolved, this.value));
          this.onRejectedCallback.push(myPromise.next()(resolve, reject, onRejected, this.value));
        });
      case 'resolve':
        return new myPromise((resolve, reject) => {
          myPromise.next()(resolve, reject, onResolved, this.value);
        });
      case 'reject':
        return new myPromise((resolve, reject) => {
          myPromise.next()(resolve, reject, onRejected, this.value);
        });
    }
  }

  catch(onRejected) {
    return this.then(null, onRejected)
  }
}

const get = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

get.then(() => {
  console.log(1);
});
