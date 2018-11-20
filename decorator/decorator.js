function f(target) {
    target.prop = '2333';
}

@f
class Test {

}

let test = new Test();

console.log(test.prop);