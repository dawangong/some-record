var Publish = function () {
	var liseners = [];
	return {
		subscribe: function (lisener) {
			liseners.push(lisener);
		},
		unsubscribe: function (lisener) {
			var index = liseners.indexOf(lisener);
			if (index != -1) {
				liseners.splice(index, 1);
			}
		},
		notify: function (lisener, message) {
			var index = liseners.indexOf(lisener);
			if (index != -1) {
				liseners[index].notify(message);
			}
		},
		notifyAll: function (message) {
			liseners.forEach(function (lisener) {
				lisener.notify(message);
			});
		}
	};
};

function Subscriber(name) {
	this.name = name;
}

Subscriber.prototype.notify = function (message) {
	console.log(this.name + '收到了' + message);
};

var wh = new Subscriber('wh');

var pubshop = new Publish();

pubshop.subscribe(wh);

pubshop.notify(wh, '我发的消息');

//todo 再看看 很多框架的基础思想 感觉都是基于发布订阅模式 2019-03-18留
