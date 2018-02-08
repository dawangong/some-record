class People {
	constructor() {
		this.a = 1;
		this.b = 2;
	}

	speak() {
		console.log('我是人类');
	}
}

class Chinese extends People {
	constructor(){
		super();
	}
	talk(){
		console.log(this.a);
	}
}

let chinese = new Chinese();
chinese.speak();
chinese.talk();
