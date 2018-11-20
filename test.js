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
console.log(tpstr);

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


let pattern = /(console\.(log|warn|error|info)\(|\))/g;
let strs = 'console.warn(我都哦额)';
let res = strs.replace(pattern,'');
console.log(res);

class test {
    constructor() {
        this.a = 'a';
    }
    get a () {
        return 'b';
    }
    set a (param) {
        console.log(param + '666');
    }
}

let tt = new test();
console.log(tt.a);
tt.a = 33;


const treeData = [{
    id: 1,
    name: '所有',
    parentId: null,
    categoryType: 0,
    isClosed: false,
    children: [
        {
            id: 36,
            name: '85',
            parentId: 1,
            categoryType: 0,
            isClosed: false,
            children: [
                {
                    id: 123,
                    name: '22323',
                    parentId: 36,
                    categoryType: 0,
                    isClosed: false,
                    parent: {
                        id: 36,
                        name: '85',
                        parentId: 1,
                        categoryType: 0,
                        isClosed: false,
                        parent: {
                            id: 1,
                            name: '所有',
                            parentId: null,
                            categoryType: 0,
                            isClosed: false
                        }
                    }
                }
            ],
            parent: {
                id: 1,
                name: '所有',
                parentId: null,
                categoryType: 0,
                isClosed: false
            }
        }, {
            id: 98,
            name: 'WYY分',
            parentId: 1,
            categoryType: 0,
            isClosed: false,
            children: [
                {
                    id: 102,
                    name: 'miaomiaozhu0620',
                    parentId: 98,
                    categoryType: 1,
                    isClosed: false,
                    parent: {
                        id: 98,
                        name: 'WYY分',
                        parentId: 1,
                        categoryType: 0,
                        isClosed: false,
                        parent: {
                            id: 1,
                            name: '所有',
                            parentId: null,
                            categoryType: 0,
                            isClosed: false
                        }
                    },
                    children: [
                        {
                            id: 111,
                            name: '2345',
                            parentId: 102,
                            categoryType: 0,
                            isClosed: false,
                            parent: {
                                id: 102,
                                name: 'miaomiaozhu0620',
                                parentId: 98,
                                categoryType: 1,
                                isClosed: false,
                                parent: {
                                    id: 98,
                                    name: 'WYY分',
                                    parentId: 1,
                                    categoryType: 0,
                                    isClosed: false,
                                    parent: {
                                        id: 1,
                                        name: '所有',
                                        parentId: null,
                                        categoryType: 0,
                                        isClosed: false
                                    }
                                }
                            }
                        }
                    ]
                }, {
                    id: 101,
                    name: 'lerous',
                    parentId: 98,
                    categoryType: 1,
                    isClosed: false,
                    parent: {
                        id: 98,
                        name: 'WYY分',
                        parentId: 1,
                        categoryType: 0,
                        isClosed: false,
                        parent: {
                            id: 1,
                            name: '所有',
                            parentId: null,
                            categoryType: 0,
                            isClosed: false
                        }
                    }
                }
            ],
            parent: {
                id: 1,
                name: '所有',
                parentId: null,
                categoryType: 0,
                isClosed: false
            }
        }, {
            id: 2,
            name: '未分类',
            parentId: 1,
            categoryType: 0,
            isClosed: false,
            parent: {
                id: 1,
                name: '所有',
                parentId: null,
                categoryType: 0,
                isClosed: false
            }
        }
    ]
}];
