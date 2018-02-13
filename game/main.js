let Snack = (function (window) {
	function Snack() {
		this.init = function () {
			this.random();
		}
	}

	Snack.prototype.random = function () {
		let x = Math.floor(Math.random() * 400 + 1);
		let y = Math.floor(Math.random() * 400 + 1);
		this.create(x, y)
	};
	Snack.prototype.create = function (x, y) {
		//创建画布
		let drawCloth = document.getElementById('cvs').getContext('2d');
		//创建蛇头
		drawCloth.fillStyle = 'red';
		drawCloth.fillRect(x, y, 5, 5);
	};
	return Snack;
})(window);
