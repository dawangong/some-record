class NewArray extends Array {
	constructor(){
		super();
		this.history = [];
	}
}

let arr = new NewArray();
console.log(arr.history);
//拓展原始数据类型
