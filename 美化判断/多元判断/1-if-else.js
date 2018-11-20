const state = 'a';
const author = 'me';

function add(param) {
    console.log(param);
}

function go(param) {
    console.warn(param);
}

if (author === 'me') {
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
} else if (author === 'you') {
    if (state === 'a') {
        add('state11');
        go('state11')
    } else if (state === 'b') {
        add('state22');
        go('state22')
    } else if (state === 'c') {
        add('state33');
        go('state33')
    } else if (state === 'd') {
        add('state44');
        go('state44')
    } else if (state === 'e') {
        add('state55');
        go('state55')
    }
}