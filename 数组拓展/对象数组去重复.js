function unique(arr) {
		const tempArr = [];
		const attr = [];
		const temp = [];
		const index = [];

		arr.forEach((v) => {
			if (!tempArr.includes(v)) {
				tempArr.push(v);
				attr.push(v.name);
			}
		});
		attr.forEach((v, i) => {
			if (!temp.includes(v)) {
				temp.push(v);
			} else {
				index.push(i);
			}
		});
		index.forEach((v) => {
			tempArr.splice(v);
		});
		return tempArr;
	}


let arr = [{ a: 3, name: 'ni' }, { a: 3, name: "ni" }];

let temp = unique(arr);
console.log(temp);