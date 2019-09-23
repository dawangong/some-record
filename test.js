// let arr =[1,2,3];

// function change (arr) {
// 	console.log(arr);
// 	arr = [];
// 	console.log(arr);
// }
//
// change(arr);

// console.log(arr);
//
//
//
// var a = [1,2,3];
// var b = a;
// a = [4,5,6];
// console.log(b);

// let arr = [1,2,3,4,5];
// let arr_ = arr.splice(0,1).concat([',']).join('');
// console.log(arr_);
//

// describe("Scope", function() {

//     it("can be constructed and used as an object", function() {
//         var scope = new Scope();
//         scope.aProperty = 1;
//         expect(scope.aProperty).toBe(1);
//     });

//     describe("digest", function() {
//         var scope;
//         beforeEach(function() {
//             scope = new Scope();
//         });
//         it("calls the listener function of a watch on first $digest", function() {
//             var watchFn = function() { return 'wat'; };
//             var listenerFn = jasmine.createSpy();
//             console.log(listenerFn);
//             scope.$watch(watchFn, listenerFn);

//             scope.$digest();

//             expect(listenerFn).toHaveBeenCalled();
//         });
//     });
// });
//
// let arr = [1,2,3,4,5];
// let sum = arr.reduce((s,v,i,arr) => {
// 	return s+v;
// });
//
// console.log(arr);
//
// let tree = [
// {
// 	name: 'child0',
// 	children: [{
// 		name: 'child00'
// 	}, {
// 		name: 'child01'
// 	}, ],
// },
// {
// 	name: 'child1',
// 	children: [{
// 		name: 'child10'
// 	}, ],
// }, {
// 	name: 'child2',
// 	children: [{
// 		name: 'child20',
// 		children: [{
// 			name: 'child200'
// 		}, {
// 			name: 'child201'
// 		}, ],
// 	}, ],
// }, ];
//
//
// function get (tree) {
// tree.forEach( v => {
// 	console.log(v.name);
// 	if(v.children){
// 		arguments.callee(v.children);
// 	}
// });
// }
//
// get(tree);

// var x = 1;
// function add(a) {
// 	if(a>2){
// 		return 'yes'
// 	} else {
//         return 'no'
// 	}
// }
//
// var y = add(x);
// console.log(y);

// let arrs = [
// 	{key: 'one', value: '1'},
// 	{key: 'two', value: '2'},
// 	{key: 'thr', value: '3'}
// ];


// arrs.map(v => {
// 	v.value = 'you';
// });
//
// console.log(arrs);

let str = 'dasdasf';
let tpstr = [...str];
let tsp = str.split('');
console.log(tpstr, tsp);

// let js = {
//     a: 1,
//     b: 2,
//     c: 3
// };
//
// console.log(Object.entries(js));
//
// for (let [key, value] of Object.entries(js)) {
//     console.log(`${key}:${value}`);
// }

// var student=[1,2,3];
// let ttp = Object.assign(student);
// ttp = [3,4,5];
// console.log(ttp, student);
// const DangerButton = ({ text }) => {
//     return {
//         type:Button,
//         props: {
//             color: 'red',
//             children: text
//         }
//     }
// };


// let pattern = /(console\.(log|warn|error|info)\(|\))/g;
// let strs = 'console.warn(我都哦额)';
// let res = strs.replace(pattern,'');
// console.log(res);
//
// class test {
//     constructor() {
//         this.a = 'a';
//     }
//     get a () {
//         return 'b';
//     }
//     set a (param) {
//         console.log(param + '666');
//     }
// }
//
// let tt = new test();
// console.log(tt.a);
// tt.a = 33;
//
// let tree = {
//     value: 0,
//     children: []
// };

// var recursiveTraverse = function (node, action) {
//     if (!node || !node.children) { return false }
//     action(node.value);
//     node.children.forEach(function(item) {
//         recursiveTraverse(item, action);
//     });
// }
// // 递归实现
// recursiveTraverse(tree, console.log);

//map 实现
// Array.prototype._map = function (fn, arg, result = []) {
//
//     for(let i = 0; i < this.length; i++) {
//         result.push(fn.apply(arg, [this[i], i, this]));
//     }
//
//     return result;
// };
//
// const res = [1, 2, 3]._map(item => item * 2);
//
// console.log(res);
//
// console.log([].push(...[1, 2, 3]));



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
