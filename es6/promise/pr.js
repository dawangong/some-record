let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('2333');
    }, 1000);
});
pr.then((res) => {
    console.log(res);
    console.log(1);
});