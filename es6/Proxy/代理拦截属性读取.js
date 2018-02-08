let obj = {};
let proxy = new Proxy(obj, {
	get: function () {
		return '111';
	}
});

console.log(proxy.time);
