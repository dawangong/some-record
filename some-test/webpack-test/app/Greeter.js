import config from '../config.json';
module.exports = function() {
	let greet = document.createElement('div');
	greet.textContent = config.greetText;
	return greet;
};
