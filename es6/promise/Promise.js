class Promise {
    constructor(fn) {
        this.status = 'PENDING';
        this.resolveQueue = [];
        this.rejectQueue = [];
        fn(this.resolve.bind(this),this.reject.bind(this));
    }

    then(resolve, reject) {
        const resolveHandle = value => {
            resolve(value);
        };
        const rejectHandle = value => {
            reject(value);
        };
        if (this.status === 'PENDING') {
            this.resolveQueue.push(resolve);
            this.rejectQueue.push(reject);
        } else if (this.status === 'FULLFILLED') {
            resolveHandle();
        } else if (this.status === 'REJECTED') {
            rejectHandle();
        }

        return new Promise((resolve, reject) => {
        });
    }

    resolve(value) {
        setTimeout(() => {
            this.handleQueue(this.resolveQueue, 'FULLFILLED', value);
        }, 0)
    }

    reject(value) {
        setTimeout(() => {
            this.handleQueue(this.resolveQueue, 'REJECTED', value);
        }, 0)
    }

    handleQueue(queue, status, value) {
        queue.forEach(item => {
            item(value);
        });
        this.status = status;
    }
}

let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('2333');
    }, 2000);
});

pr.then((res) => {
    console.log(res);
    console.log(1);
});