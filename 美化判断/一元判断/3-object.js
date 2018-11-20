const state = 'a';

function add(param) {
    console.log(param);
}

function go(param) {
    console.warn(param);
}

const handle = {
    'a': 'state1',
    'b': 'state2',
    'c': 'state3',
    'd': 'state4',
    'e': 'state5'
};

add(handle[state]);
go(handle[state]);