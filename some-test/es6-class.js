class People {
	constructor() {

	}

	speak() {
		console.log('你好');
	}
}

let dav = new People();
dav.speak();

class blackPeople extends People {
	constructor() {
		super();
	}

	go() {
		console.log('走');
	}
}

let wxm = new blackPeople();
wxm.go();
wxm.speak();
