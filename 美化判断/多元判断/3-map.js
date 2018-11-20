const state = 'a';
const author = 'me';

function add(param) {
    console.log(param);
}

function go(param) {
    console.warn(param);
}

const map = new Map([
    [{state: 'a', author: 'me'}, 'state1'],
    [{state: 'b', author: 'me'}, 'state2'],
    [{state: 'c', author: 'me'}, 'state3'],
    [{state: 'd', author: 'me'}, 'state4'],
    [{state: 'e', author: 'me'}, 'state5'],
    [{state: 'a', author: 'you'}, 'state11'],
    [{state: 'b', author: 'you'}, 'state22'],
    [{state: 'c', author: 'you'}, 'state33'],
    [{state: 'd', author: 'you'}, 'state44'],
    [{state: 'e', author: 'you'}, 'state55'],
]);

const item = [...map].filter(([key, value]) => key.state === state && key.author === author );
const [key, value] = item[0];

add(value);
go(value);