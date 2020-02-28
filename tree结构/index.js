const {
  treeData
} = require('./tree-data');
const {
  transformData
} = require('./transform-data');

console.log(treeData);
const result = transformData(treeData);
console.log(result);
