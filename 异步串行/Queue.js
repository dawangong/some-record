const queue = () => {
    const list = []; // 队列
    let index = 0;   // 索引
    let task = 0;
    let cache;

    // next 方法控制索引
    const next = () => {
        if (index >= list.length - 1) return;

        // 索引 + 1
        const cur = list[++index];
        cur(next);
    };

    // 判断是否全部完成
    const then = (callback) => {

        if(callback) {
            cache = callback;
        }
        if (task > list.length - 1) {
            cache();
        }
        task ++;
    };

    // 二次封装为合适的异步函数
    const async = (fn) => {
        return (next) => {
            fn(next);
        };
    };

    // 添加任务
    const add = (...asyncQueue) => {
        const cbQueue = asyncQueue.map(fn => async(fn));
        list.push(...cbQueue);
    };

    // 异步串行执行
    const runAsync = () => {
        const cur = list[index];
        typeof cur === 'function' && cur(next);
    };

    // 同步并行执行
    const run = () => {
        list.forEach(fn => fn());
    };

    // 全部执行完成
    const runAll = function () {
        list.forEach(fn => fn(then));
        return this;
    };

    // 返回一个对象
    return {
        add,
        runAsync,
        run,
        runAll,
        then
    }
};

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

const q = queue();
q.add(...asyncQueue);

// 串行
q.runAsync();

// 并行
// q.run();

//全部完成
// q.runAll().then(() => {
//     console.log('全部完成了');
// });