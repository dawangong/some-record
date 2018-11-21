import bind from './bind';

// 无参数修饰类
@f
class Test {

}

function f(target) {
    target.prototype.prop = '2333';
}

let test = new Test();

console.log(test.prop);

// 带参数修饰类
@f1('111')
class Test1 {

}

function f1(str) {
    return (target) => {
        target.prototype.go = () => {
            console.log(str);
        }
    }
}

let test1 = new Test1();

test1.go();

// 无参数修饰方法
class Person {
    @f2
    speak() {
        console.log(1);
    }
}

function f2(target, name, descriptor) {
    const temp = descriptor.value;
    descriptor.value = () => {
        temp();
        console.log(2);
    }
}

let ll = new Person();

ll.speak();

// 带参数修饰方法
class Person1 {
    @f3('???')
    speak() {
        console.log(1);
    }
}

function f3(str) {
    return (target, name, descriptor) => {
        const temp = descriptor.value;
        descriptor.value = () => {
            temp();
            console.log(str);
        }
    }
}

let R = new Person1();
R.speak();

// bind测试
class Ok {
    @bind
    test() {
        console.log(this);
    }
}

let okk = new Ok();

okk.test();