// const Observer = require('./observer');
// const { Pub, EventBus } = require('./subscribe&publish');
// const God = require('./single');
// const God = require('./pure-single');


/* 观察者模式 */
// const ob = new Observer();
// ob.$on('update', data => {
//   console.log(data);
// });
// ob.$emit('update', 'aaa');


/* 发布订阅模式 */
// const ev1 = new EventBus();
// const ev2 = new EventBus();
// // 订阅主题
// ev1.$on(data => {
//   console.log(`${data}==>订阅者1收到消息了`);
// });
// ev1.$on(data => {
//   console.log(`${data}==>订阅者2收到消息了`);
// });
// ev2.$on(data => {
//   console.log(`${data}==>订阅者2收到消息了`);
// });
// ev2.$once(data => {
//   console.log(`${data}==>订阅者3收到消息了`);
// });
// // 加入主题
// Pub.$increase(ev1);
// Pub.$increase(ev2);
// // 发布主题
// Pub.$broadcast(ev1, '主题1更新了～');
// Pub.$broadcast(ev2, '主题2更新了～');
// Pub.$broadcast(ev2, '主题2再次更新了～');


/* 单例模式 */
// const god = God.getInstance();
// god.create('小王');
// console.log(god.human);

// const _god = God.getInstance();
// god.create('小刘');
// console.log(god.human);


/* 纯净的单例模式 */
// const god = new God();
// god.create('小王');
// console.log(god.human);

// const _god = new God();
// god.create('小刘');
// console.log(god.human);






