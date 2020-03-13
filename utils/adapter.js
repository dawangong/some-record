const adapter = config => {

  const { obj = {}, field = {}, deep = false, parent = "" } = config;
  if (obj === null || typeof obj !== "object") return obj;
  let newObj = obj instanceof Array ? [] : {};

  const replace = (key, obj, newObj, parent) => {
    const realKey = parent ? `${parent}.${key}` : key;
    const result = field[realKey];
    if (result) {
      newObj[result] = obj[key];
    }
  };

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "object" && deep) {
        const _parent = parent ? `${parent}.${key}` : key;
        newObj[key] = adapter({
          deep,
          field,
          parent: _parent,
          obj: obj[key]
        })
      } else {
        replace(key, obj, newObj, parent);
      }
    }
  }

  return newObj;
};


const test = {
  prop1: 1,
  prop2: 2,
  prop3: {
    prop1: 31,
    prop2: {
      prop1: 321
    }
  }
};

const result = adapter({
  obj: test,
  field: {
    'prop1': 'newProp1',
    'prop3.prop1': 'newProp31',
    'prop3.prop2.prop1': 'newProp321',
  },
  deep: true
});

console.log(result);
