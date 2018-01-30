function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

timeout(100).then((value) => {
  console.log(value);
});

//setTimeout&&setInterval第三个及以后的参数均作为第一个参数（函数）的参数