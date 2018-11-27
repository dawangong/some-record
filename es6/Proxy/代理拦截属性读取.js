let obj = {};
let proxy = new Proxy(obj, {
	get: function (x, y) {
        console.log(x, y);
        return '111';
	},
	set: function (x, y, z) {
        console.log(x, y, z);
    }
});

console.log(proxy.time);
proxy.action = '';
