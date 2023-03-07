/**
 * 命令模式
 * 松耦合发送者和接收者
 * js的隐形模式 函数一等公民来说 很寻常.. 传递函数 即可
 * auth wh
 */

const toLog = (fn) => {
  fn();
}

toLog(() => {
  console.log(111);
});
