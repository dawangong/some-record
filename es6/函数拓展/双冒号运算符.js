function add() {
	console.log(this.temp);
}

add();

let obj = {
	temp: '2333'
};
// add.bind(obj)();
let _add = add.bind(obj);
_add();
//暂时不支持，bind具有返回值，不会立即调用。

