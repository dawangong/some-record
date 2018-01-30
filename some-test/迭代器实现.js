//迭代器需求示范
let it = makeIterator([1,2,3]);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

(function(window){
	function makeIterator (arr) {
	let index = 0;
	return {
		next:function () {
			return index < arr.length ? {value:arr[index++],done:false}:{value:undefined,done:true};
		}
	};
}
	window.makeIterator = makeIterator;
})(window);

