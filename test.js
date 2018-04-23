// let arr =[1,2,3];

// function change (arr) {
// 	console.log(arr);
// 	arr = [];
// 	console.log(arr);
// }

// change(arr);

// console.log(arr);

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
let arr = [1,2,3,4,5];
let sum = arr.reduce((s,v,i,arr) => {
	return s+v;
});

console.log(arr);

let tree = [
{
	name: 'child0',
	children: [{
		name: 'child00'
	}, {
		name: 'child01'
	}, ],
}, 
{
	name: 'child1',
	children: [{
		name: 'child10'
	}, ],
}, {
	name: 'child2',
	children: [{
		name: 'child20',
		children: [{
			name: 'child200'
		}, {
			name: 'child201'
		}, ],
	}, ],
}, ];


function get (tree) {
tree.forEach( v => {
	console.log(v.name);
	if(v.children){
		arguments.callee(v.children);
	}
});
}

get(tree);

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

