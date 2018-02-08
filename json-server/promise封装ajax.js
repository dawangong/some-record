let ajax = (function (window) {
	function uri(obj){
		let arr=[];
		for(let i in obj){
			arr.push(encodeURIComponent(i)+'='+encodeURIComponent(obj[i]));
		}
		return arr.join('&');
	}
	return function (options) {
		return new Promise((resolve, reject) => {
			let _options = {
				method: 'GET',
				async: 'true',
				data: 'null'
			};
			for (let i in options) {
				_options[i] = options[i];
			}
			let xhr;
			if (window.XMLHttpRequest) {
				xhr = new XMLHttpRequest();
			}
			else {
				xhr = new ActiveXObject('Microsoft.XMLHttp');
			}
			if (_options.method === 'GET') {
				_options.url = `${_options.url}?m=${Math.random()}&${_options.data}`;
			}
			else {
				_options.url = `${_options.url}?m=${Math.random()}`;
			}
			xhr.open(_options.method, _options.url, _options.async);
			_options.data = uri(_options.data);
			if (_options.method === 'GET') {
				xhr.send(_options.data);
			}
			else {
				xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				xhr.send(_options.data);
			}
			if (_options.async === false) {
				if (xhr.status === 200) {
					resolve(JSON.parse(xhr.responseText));
				}
				else {
					reject(xhr.status);
				}
			}
			else {
				xhr.onreadystatechange = function () {
					if (xhr.readyState === 4) {
						if (xhr.status === 200) {
							resolve(JSON.parse(xhr.responseText));
						}
						else {
							reject(xhr.status);
						}
					}
				}
			}
		})
	}
})(window);



