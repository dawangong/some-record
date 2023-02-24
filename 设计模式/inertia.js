/**
 * 惰性函数
 * 复写 调用 达到第二次之后 省略多余逻辑
 * auth: wh
 */

let supportEvent = () => {
  if(window.addEventListener) {
    console.log("支持addEventListener");
    supportEvent = () => {
      // 1
    }
  } 
  if(window.attachEvent) {
    console.log("支持addEventListener");
    supportEvent = () => {
      // 2
    }
  }

  supportEvent();
}