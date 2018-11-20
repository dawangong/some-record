const get = key => map[key];

const set = (key, value) => {
    map[key] = value;
};

export default {
    get,
    set
};
