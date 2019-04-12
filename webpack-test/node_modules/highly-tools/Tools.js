const Tools = {
    // 异步函数的串行、并行、及类似Promise.all()的封装 暂未加入容错处理
    queue: () => {
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
    },

    // 遍历一颗标准Tree结构
    mapTree: (tree, action) => {
        if (!tree || !tree.children) { return false }
        action(tree);
        tree.children.forEach(function(item) {
            tree(item, action);
        });
    },

    // 数组扁平化
    flatten: (arr) => String(arr).split(',').map(item => Number(item)),

    // 一维数组转二维数组
    group: (array, subGroupLength, index = 0 ,newArray = []) => {
        while (index < array.length) {
            newArray.push(array.slice(index, index += subGroupLength));
        }
        return newArray;
    },

    // 数组转迭代器对象
    iterator: (arr) => {
    let index = 0;
    return {
        next: function () {
            return index < arr.length ? {value: arr[index++], done: false} : {value: undefined, done: true};
        }
      }
    }
};

export default Tools;