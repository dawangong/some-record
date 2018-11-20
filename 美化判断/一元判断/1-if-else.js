const state = 'a';

function add(param) {
    console.log(param);
}

function go(param) {
    console.warn(param);
}

if (state === 'a') {
    add('state1');
    go('state1')
} else if (state === 'b') {
    add('state2');
    go('state2')
} else if (state === 'c') {
    add('state3');
    go('state3')
} else if (state === 'd') {
    add('state4');
    go('state4')
} else if (state === 'e') {
    add('state5');
    go('state5')
}