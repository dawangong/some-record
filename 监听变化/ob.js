const watch = (obj, fn) => {
  if(!obj || typeof obj !== 'object' || obj === null){
    return obj
  }

  const definePro = (obj, key, value) => {
    watch(value, fn);
    Object.defineProperty(obj, key, {
      get() {
        return value
      },
      set(newVal){
        fn(key, value, newVal);
        value = newVal;
      }
    })
  };

  for(let i in obj){
    definePro(obj, i, obj[i]);
  }
};

const obj = {
  a: 1,
  b: {
    c: 2
  }
};

watch(obj, (a) => {
  console.log(a);
});
