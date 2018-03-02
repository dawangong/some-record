let Tab = (function (window) {
	function Tab(configuration) {
		this.configuration = configuration;
		this._configuration = {
			tabPadding: '5px 20px',
			tabBgColor: ['#00ffd3fa', '#00ffd3fa', '#00ffd3fa'],
			left: 0,
			top: 0,
			boxWidth: 400,
			boxHeight: 400,
			event: 'click',
			contain:'tab-contain'
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
		this.css(this.oul, {display: 'flex'});
		this.item.forEach((v, i) => {
			this.css(v, {
				listStyle: 'none',
				background: this._configuration.tabBgColor[i],
				boxSizing: 'border-box',
				cursor: 'pointer',
				padding:this._configuration.tabPadding,
				color:'white',
				marginLeft:'5px',
                border: '1px solid black',
				borderBottom:0
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
		this.css(this.item[0], {borderLeft: 0,background: '#2196F3',marginLeft:0})
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
		this.contain = document.getElementsByClassName(this._configuration.contain)[0];
		this.oul = this.contain.getElementsByClassName('tab-contain.ul')[0];
		this.item = [...this.oul.getElementsByClassName('tab-contain.item')];
		this.box = [...this.contain.getElementsByClassName('tab-contain.box')];
	};

	Tab.prototype.css = function (obj, option) {
		for (let i in option) {
			obj.style[i] = option[i];
		}
	};
	return Tab;
})(window);
