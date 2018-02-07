function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms).then(console.log('11111'));
  console.log(value);
}

asyncPrint('hello world', 3000);