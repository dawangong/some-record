'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _dec, _class2, _desc, _value, _class3, _dec2, _desc2, _value2, _class4, _desc3, _value3, _class5;

var _bind = require('./bind');

var _bind2 = _interopRequireDefault(_bind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 无参数修饰类
var Test = f(_class = function Test() {
    _classCallCheck(this, Test);
}) || _class;

function f(target) {
    target.prototype.prop = '2333';
}

var test = new Test();

console.log(test.prop);

// 带参数修饰类
var Test1 = (_dec = f1('111'), _dec(_class2 = function Test1() {
    _classCallCheck(this, Test1);
}) || _class2);


function f1(str) {
    return function (target) {
        target.prototype.go = function () {
            console.log(str);
        };
    };
}

var test1 = new Test1();

test1.go();

// 无参数修饰方法
var Person = (_class3 = function () {
    function Person() {
        _classCallCheck(this, Person);
    }

    _createClass(Person, [{
        key: 'speak',
        value: function speak() {
            console.log(1);
        }
    }]);

    return Person;
}(), (_applyDecoratedDescriptor(_class3.prototype, 'speak', [f2], Object.getOwnPropertyDescriptor(_class3.prototype, 'speak'), _class3.prototype)), _class3);


function f2(target, name, descriptor) {
    var temp = descriptor.value;
    descriptor.value = function () {
        temp();
        console.log(2);
    };
}

var ll = new Person();

ll.speak();

var a = '22';
// 带参数修饰方法
var Person1 = (_dec2 = f3(a), (_class4 = function () {
    function Person1() {
        _classCallCheck(this, Person1);
    }

    _createClass(Person1, [{
        key: 'speak',
        value: function speak() {
            console.log(1);
        }
    }]);

    return Person1;
}(), (_applyDecoratedDescriptor(_class4.prototype, 'speak', [_dec2], Object.getOwnPropertyDescriptor(_class4.prototype, 'speak'), _class4.prototype)), _class4));


function f3(str) {
    return function (target, name, descriptor) {
        var temp = descriptor.value;
        descriptor.value = function () {
            temp();
            console.log(str);
        };
    };
}

var R = new Person1();
R.speak();

// bind测试
var Ok = (_class5 = function () {
    function Ok() {
        _classCallCheck(this, Ok);
    }

    _createClass(Ok, [{
        key: 'test',
        value: function test() {
            console.log(this);
        }
    }]);

    return Ok;
}(), (_applyDecoratedDescriptor(_class5.prototype, 'test', [_bind2.default], Object.getOwnPropertyDescriptor(_class5.prototype, 'test'), _class5.prototype)), _class5);


var okk = new Ok();

okk.test();
