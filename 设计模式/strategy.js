/**
 * 策略模式
 * 定义一系列的算法,把它们一个个封装起来, 并且使它们可相互替换 
 * 1. 符合开放闭合原则 2. 单一职责 3. 算法复用 4. 避免使用多重条件判断
 * auth wh
 */

// 例1: 比如表单校验 (console.error 指代实际业务中的错误提示)
const form = {
  username: "",
  password: "",
  onsubmit: () => {},
};

// 1. 传统编码
form.onsubmit = () => {
  if (form.username === "") {
    console.error("用户名不能为空!");
    return false;
  }
  if (form.password === "") {
    console.error("密码不能为空!");
    return false;
  }
};

// 2. 策略模式

// step1: 分离校验和校验之外的逻辑
const validateFn0 = () => {};
form.onsubmit = () => {
  const result = validateFn0();
  if(result.state === "error") {
    console.error(result.msg);
    // 阻止进一步提交
    return false;
  }
};

// step2: 实现一个业务校验函数和通用校验类
class Validator0 {
  constructor() {}
}
const validateFn1 = () => {
  const rules = [{}];
  const fn = new Validator0(rules);
  return fn.validate();
}

// step3: 思路的具体实现
// 策略模式的关键体现 => Validator
class Validator {
  constructor(rules) {
    this.rules = rules;
  }

  add(rule) {
    this.rules.push(rule);
  }

  validate() {
    const result = {
      state: "success",
      msg: ""
    };
    this.rules.forEach(item => {
      if(item.fn() === false && result.state === "success") {
        result.state = "error";
        result.msg = item.msg;
      }
    });

    return result;
  }
}

const validateFn = () => {
  const rules = [{
    fn: function() {
      if(this.value === "") {
        return false;
      }
    },
    msg: "用户名不能为空!",
    value: form.username
  }, {
    fn: function() {
      if(this.value === "") {
        return false;
      }
    },
    msg: "密码不能为空!",
    value: form.password
  }];
  const fn = new Validator(rules);
  return fn.validate();
}

form.onsubmit = () => {
  const result = validateFn();
  if(result.state === "error") {
    console.error(result.msg);
    // 阻止进一步提交
    return false;
  }
};

// 测试 1
// form.onsubmit();

// 测试 2
form.username = "123";
form.onsubmit();

// 例2: v1 9折 v2 8折 v3 7折
const originPrice = 100;
const user = "v1"
// 1. 传统编码
let price0;
if (user === "v1") {
  price0 = originPrice * 0.9;
} else if (user === "v2") {
  price0 = originPrice * 0.8;
} else {
  price0 = originPrice * 0.7;
}

// 2. 策略模式
const methods = {
  v1: () => originPrice * 0.9,
  v2: () => originPrice * 0.8,
  v3: () => originPrice * 0.7,
}

class CalcPrice {
  constructor(methods) {
    this.methods = methods;
  }

  calc(v) {
    return this.methods[v]();
  }
}

const calcFn = new CalcPrice(methods);
const price = calcFn.calc("v1");
console.log(`优惠后价格${price}`);

// 上述例子都是强行按照class去实现的,实际上函数式更为方便 比如例2使用函数式的方式去实现 更直接了当.

