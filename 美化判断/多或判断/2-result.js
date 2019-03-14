const a = '23333';
const compare = ['23333', '33333', '43333', '53333'];

if (compare.includes(a)) {
    console.log(1);
}

if(compare.some(item => item === a)) {
    console.log(1);
}