const isType = type => obj => Object.prototype.toString.call(obj) === `[object ${type}]`;

const isArray = isType('Array');

console.log(isArray([]), isArray(''));
