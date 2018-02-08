class People {
	constructor() {
		//通过new生成实例对象时会自动调用这个方法
		//可用于初始化
		//如果没有显示的添加，一个空的constructor方法会被默认添加。
	}

	speak() {
		console.log('我是人类');
	}
}
//类不存在变量提升
let child = new People();

child.speak();

