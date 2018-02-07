//promise需求示范

function timeout(time) {
    return new myPromise(function(resolve, reject) {
        setTimeout(resolve, time);
    });
}

function myPromise(Fn) {
    var state = 'pending';
    var successEventList = [];
    var succussCallback, failCallback;
    this.then = function(succuss, fail) {
        succussCallback = succuss;
        successEventList.push(succuss);
        failCallback = fail;
        return this; 

        function timeout(time) {
            return new myPromise(function(resolve, reject) {
                setTimeout(resolve, time);
            });
        }
    };

    function resolve(params) {
        setTimeout(function() {
            successEventList.forEach(function(v) {
                v();
            });
        }, 0);
    }

    function reject(params) {
        failCallback();
    }
    if (Fn) {
        Fn(resolve);
    }

}


timeout(3000).then(function() {
    console.log('2333');
}).then(function () {
    console.log('3333');
});