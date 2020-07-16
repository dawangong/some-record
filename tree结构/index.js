const {
  treeData, treeData2
} = require('./tree-data');
const {
  transformData
} = require('./transform-data');

const {
  findParent
} = require('./find-parent');


console.log(treeData);
const result = transformData(treeData);
console.log(result);


let item = {
  id: 15,
  name: "节点0-3-5",
  pid: 13
};

findParent(item, treeData2, () => {
  console.log(1);
});
