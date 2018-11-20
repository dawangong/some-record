const state = 'c';
const author = 'me';

function add(param) {
    console.log(param);
}

function go(param) {
    console.warn(param);
}

const map = new Map([
    [/^a_me$/, 'state1'],
    [/^b|c|d|e_me$/, 'state2'],
    [/^a_you$/, 'state11'],
    [/^b_you$/, 'state22'],
    [/^c_you$/, 'state33'],
    [/^d_you$/, 'state44'],
    [/^e_you$/, 'state55'],
]);

const item = [...map].filter(([key, value]) => key.test(`${state}_${author}`) );
const [key, value] = item[0];

add(value);
go(value);