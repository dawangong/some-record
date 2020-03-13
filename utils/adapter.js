const adapter = () => {

  const typeMap = {
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Undefined]': 'undefined',
    '[object Boolean]': 'boolean',
    '[object Object]': 'object',
    '[object Array]': 'array',
    '[object Function]': 'function',
    '[object Null]': 'null',
    '[object Symbol]': 'symbol'
  };

  const check = value => {
    return typeMap[Object.prototype.toString.call(value)];
  };

  const reducer = (fieldMap, key, obj, newObj, parent, typeCheck, lostCheck) => {
    const realKey = parent ? `${parent}.${key}` : key;
    let result = '';

    if (fieldMap[realKey]) {
      result = fieldMap[realKey];

      if (typeCheck) {
        result = fieldMap[realKey].prop;
        const type = check(obj[key]);
        if (type !== fieldMap[realKey].type) {
          const warn = `expect get ${fieldMap[realKey].type} but get ${type} in ${realKey}！`;
          console.warn(warn);
        }
      }

      if (lostCheck) {
        if (result) {
          fieldMap[realKey].replaced = true;
        }
      }

      if (result) {
        newObj[result] = obj[key];
      }
    }
  };

  const missingWarning = fieldMap => {
    for(let key in fieldMap) {
      if (fieldMap.hasOwnProperty(key)) {
        if (!fieldMap[key].replaced) {
          const warn = `${key}字段缺失！`;
          console.warn(warn);
        }
      }
    }
  };

  const once = (fn, delay = 300, immediate = false) => {
    let timer = null;
    let now = true;
    let result;
    return function () {
      clearTimeout(timer);
      // 如果设置立即触发则立即触发
      if (immediate) {
        // 如果是第一次 则立即触发
        if (now) {
          result = fn.apply(this, arguments);
          now = false;
        } else {
          timer = setTimeout(() => {
            // 绑定this和event对象
            fn.apply(this, arguments)
          }, delay);
        }
      } else {
        // 如果没设置立即触发则按延时触发
        timer = setTimeout(() => {
          fn.apply(this, arguments)
        }, delay);
      }
      return result
    }
  };

  const _missingWarning = once(missingWarning);

  return {
    // 获取支持的类型检测
    getSupportType () {
      return Object.values(typeMap);
    },
    // 字段替换
    fieldReplace(config) {
      const { obj = {}, fieldMap = {}, deep = false, parent = "", typeCheck = false, lostCheck = false } = config;
      if (check(obj) !== 'object') return obj;
      let newObj = obj instanceof Array ? [] : {};
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (check(obj[key]) === 'object' && deep) {
            const _parent = parent ? `${parent}.${key}` : key;
            newObj[key] = this.fieldReplace({
              deep,
              fieldMap,
              parent: _parent,
              obj: obj[key],
              typeCheck,
              lostCheck
            });
          } else {
            reducer(fieldMap, key, obj, newObj, parent, typeCheck, lostCheck);
          }
        }
      }

      lostCheck && _missingWarning(fieldMap);
      return newObj;
    }
  }
};

const tr = adapter();

// 支持的类型检测
console.log(tr.getSupportType());

const fieldMap = {
  'prop1': 'newProp1',
  'prop3.prop1': 'newProp31',
  'prop3.prop2.prop1': 'newProp321',
};

const obj = {
  prop1: 1,
  prop2: 2,
  prop3: {
    prop1: 31,
    prop2: {
      prop1: 321
    }
  }
};

// 浅替换
const result1 = tr.fieldReplace({
  obj,
  fieldMap
});

// 深替换
const result2 =tr.fieldReplace({
  obj,
  fieldMap,
  deep: true
});

console.log(result1, result2);

const field2 = {
  'prop1': {
    prop: 'newProp1',
    type: 'string'
  },
  'prop3.prop1': {
    prop: 'newProp31',
    type: 'number'
  },
  'prop3.prop2.prop1': {
    prop: 'newProp321',
    type: 'number'
  }
};

const obj1 = {
  // prop1: 1,
  prop2: 2,
  prop3: {
    prop1: 31,
    prop2: {
      prop1: 321
    }
  }
};

// 字段类型检测
const result3 =tr.fieldReplace({
  obj,
  fieldMap: field2,
  deep: true,
  typeCheck: true
});

// 字段缺失检测
const result4 =tr.fieldReplace({
  obj: obj1,
  fieldMap: field2,
  deep: true,
  typeCheck: true,
  lostCheck: true
});

