const mapTree = (tree, action) => {
  if (!tree) return false;
  action(tree);
  if (!tree.children) return false;
  tree.children.forEach(item => mapTree(item, action))
};


const findParent = (_item, treeArr, fn) => {
  treeArr.forEach(tree => mapTree(tree, item => {
    if (_item.pid === item.id) {
      fn(item);
      item.pid && findParent(item, treeArr, fn)
    }
  }))
};

module.exports = {
  findParent
};
