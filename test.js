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


// const getObj = (obj, _key, oldKey = "") => {
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       if (key === _key) {
//         console.log(`${oldKey}.${_key}`);
//       } else {
//         if (typeof obj[key] === "object" && obj[key] !== null && key !== _key) {
//           getObj(obj[key], _key, `${oldKey}.${key}`);
//         }
//       }
//     }
//   }
// };
//
// getObj({ b: { a: 3 } }, "a");


// const delProp = (obj = {}, props = []) => JSON.parse(JSON.stringify(obj, (key, value) => props.includes(key) ? undefined : value));
//
// const obj = { a: 3, b: 3 };
// const _obj = delProp(obj, ['a']);
//
// console.log(_obj);


// console.log(['113', 'adds', '2141'].join(',').match(/\d+/g));



