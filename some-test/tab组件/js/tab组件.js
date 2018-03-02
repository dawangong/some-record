let Tab = (function (window) {
	function Tab(configuration) {
		this.configuration = configuration;
		this._configuration = {
			tabWidth: 40,
			tabHeight: 20,
			tabBgColor: ['#00ffd3fa', '#00ffd3fa', '#00ffd3fa'],
			left: 0,
			top: 0,
			boxWidth: 200,
			boxHeight: 200,
			event: 'click'
		};
		this.init();
	}

	Tab.prototype.init = function () {
		for (let i in this.configuration) {
			this._configuration[i] = this.configuration[i];
		}
		this.enactLayout();
		this.addEvent();
	};

	Tab.prototype.enactLayout = function () {
		this.prepareElement();
		this.css(this.contain, {
			position: 'absolute',
			left: this._configuration.left + 'px',
			top: this._configuration.top + 'px'
		});
		this.css(this.oul, {border: '1px solid black', display: 'flex'});
		this.item.forEach((v, i) => {
			this.css(v, {
				listStyle: 'none',
				background: this._configuration.tabBgColor[i],
				boxSizing: 'border-box',
				borderLeft: '1px solid black',
				cursor: 'pointer'
			});
			this.css(this.box[i], {
				position: 'absolute',
				border: '1px solid black',
				width: this._configuration.boxWidth + 'px',
				height: this._configuration.boxHeight + 'px',
				display: 'none',
			});
		});
		this.css(this.box[0], {display: 'block'});
		this.css(this.item[0], {borderLeft: 0})
	};

	Tab.prototype.addEvent = function () {
		let that = this;
		this.item.forEach((v, i) => {
			v.addEventListener(this._configuration.event, function () {
				that.item.forEach((v, i) => {
					that.css(v, {background: that._configuration.tabBgColor[i]});
					that.css(that.box[i], {display: 'none'});
				});
				that.css(this, {background: '#2196F3'});
				that.css(that.box[i], {display: 'block'});
			}, false)
		});
	};

	Tab.prototype.prepareElement = function () {
		this.contain = this.getClassName('tab-contain')[0];
		this.oul = this.getClassName('tab-contain.ul')[0];
		this.item = [...this.getClassName('tab-contain.item')];
		this.box = [...this.getClassName('tab-contain.box')];
	};

	Tab.prototype.getClassName = function (name) {
		return document.getElementsByClassName(name);
	};

	Tab.prototype.css = function (obj, option) {
		for (let i in option) {
			obj.style[i] = option[i];
		}
	};
	return Tab;
})(window);
