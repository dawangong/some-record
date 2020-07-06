class Demo {
  constructor() {}

  then(fn) {
    fn();
    return this;
  }

  catch(fn) {
    fn();
    return this;
  }
}

const test = new Demo();
test.then(() => {
  console.log(1);
}).catch(() => {
  console.log(2);
});
