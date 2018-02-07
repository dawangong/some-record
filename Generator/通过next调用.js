function* dataConsumer() {
  console.log('Started');
  console.log('Started');

  console.log('Started');
  console.log('Started');
  console.log(`1. ${yield}`);
  console.log(`2. ${yield}`);
  return 'result';
}

let genObj = dataConsumer();
 genObj.next();
 // Started
 genObj.next('a')
 // 1. a
 genObj.next('b')
 // 2. b
 // 
 // 
 // 第一个next方法用来启动遍历器对象