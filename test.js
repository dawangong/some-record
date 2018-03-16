// let arr =[1,2,3];

// function change (arr) {
// 	console.log(arr);
// 	arr = [];
// 	console.log(arr);
// }

// change(arr);

// console.log(arr);

// var a = [1,2,3];
// var b = a;
// a = [4,5,6];
// console.log(b);

// let arr = [1,2,3,4,5];
// let arr_ = arr.splice(0,1).concat([',']).join('');
// console.log(arr_);
//

describe("Scope", function() {

    it("can be constructed and used as an object", function() {
        var scope = new Scope();
        scope.aProperty = 1;
        expect(scope.aProperty).toBe(1);
    });

    describe("digest", function() {
        var scope;
        beforeEach(function() {
            scope = new Scope();
        });
        it("calls the listener function of a watch on first $digest", function() {
            var watchFn = function() { return 'wat'; };
            var listenerFn = jasmine.createSpy();
            console.log(listenerFn);
            scope.$watch(watchFn, listenerFn);

            scope.$digest();

            expect(listenerFn).toHaveBeenCalled();
        });
    });
});


