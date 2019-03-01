const add = require('../add');
const assert = require('assert');

describe('加法测试',function(){
    it('1 加 1 应该等于 2', function() {
        assert.equal(add(1, 1), 2)
    });
});
