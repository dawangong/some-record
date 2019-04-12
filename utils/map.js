const get = key => map[key];

const set = (key, value) => {
    map[key] = value;
};

const map = {
    get,
    set
};

map.set('key', 'v');
console.log(map.get('key'));
