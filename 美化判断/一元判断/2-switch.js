const state = 'a';

function add(param) {
    console.log(param);
}

function go(param) {
    console.warn(param);
}

switch (state) {
    case 'a':
        add('state1');
        go('state1');
        break;
    case 'b':
        add('state2');
        go('state2');
        break;
    case 'c':
        add('state3');
        go('state3');
        break;
    case 'd':
        add('state4');
        go('state4');
        break;
    case 'e':
        add('state5');
        go('state5');
        break;
}

