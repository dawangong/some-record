const state = 'a';

function add(param) {
    console.log(param);
}

function go(param) {
    console.warn(param);
}

const map = new Map([
    ['a', 'state1'],
    ['b', 'state2'],
    ['c', 'state3'],
    ['d', 'state4'],
    ['e', 'state5']]);

add(map.get(state));
go(map.get(state));