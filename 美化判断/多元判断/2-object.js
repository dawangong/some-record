const state = 'a';
const author = 'me';

function add(param) {
    console.log(param);
}

function go(param) {
    console.warn(param);
}

const handle = {
    'me_a': 'state1',
    'me_b': 'state2',
    'me_c': 'state3',
    'me_d': 'state4',
    'me_e': 'state5',
    'you_a': 'state11',
    'you_b': 'state22',
    'you_c': 'state33',
    'you_d': 'state44',
    'you_e': 'state55'
};

add(handle[`${author}_${state}`]);
go(handle[`${author}_${state}`]);