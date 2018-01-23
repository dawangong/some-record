import config from '../config.json';
export default function() {
	let greet = document.createElement('div');
	greet.textContent = config.greetText;
	return greet;
};
