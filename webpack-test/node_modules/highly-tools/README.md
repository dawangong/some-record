# Tools
个人工具箱,对常用功能的封装实现

> DOC

### queue
> 串行、并行、全部完成
```javascript
// 需要对异步函数做一些修改(包一层即可) 如下（略显鸡肋 曾尝试过装饰器模式自行内部封装fail...）
import Tools from 'Tools';

const fn1 = (cb) => {
    setTimeout(() => {
        console.log('fn1');
        cb && cb();
    }, 1000);
};

const fn2 = (cb) => {
    setTimeout(() => {
        console.log('fn2');
        cb && cb();
    }, 3000);
};

const fn3 = (cb) => {
    setTimeout(() => {
        console.log('fn3');
        cb && cb();
    }, 1000);
};

asyncQueue = [fn1, fn2, fn3];

const q = Tools.queue();
q.add(...asyncQueue);

// 串行
q.runAsync();

// 并行
q.run();

//全部完成
q.runAll().then(() => {
    console.log('全部完成了');
});
```

### mapTree
> tree的遍历
```javascript
import Tools from 'Tools';

let tree = {
     value: 0,
     children: []
 };

Tools.mapTree(tree, console.log);
```

### flatten
> 数组扁平化
```javascript
import Tools from 'Tools';

let arr = [1, 2, [1, 3, 4, 5, [3, 4], 5, 7], 668];
Tools.flatten(arr);
```

### group
> 一维数组转多维数组
```javascript
import Tools from 'Tools';

arr = Tools.group([1, 2, 3, 4, 5], 2);
```

### iterator
> 数组转迭代器对象
```javascript
import Tools from 'Tools';

Tools.iterator([1, 2, 3]);
```