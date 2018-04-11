function * gen() {
    yield '1';
    yield '2';
}

let [a, b] = gen();
console.log(a, b);

console.log(...gen());
