async function add() {
	await setTimeout(function () {
		console.log('2333');
	}, 3000);
	let res = await 1 + 5;
	return res;
}

add().then(v => {
	console.log(v);
})

//？
