const treeData = {
  id: 0,
  name: "根节点",
  pid: -1,
  children: [{
      id: 1,
      name: "节点0-1",
      pid: 0,
      children: [{
        id: 6,
        name: "节点0-1-6",
        pid: 1
      }]
    },
    {
      id: 2,
      name: "节点0-2",
      pid: 0
    },
    {
      id: 3,
      name: "节点0-3",
      pid: 0,
      children: [{
          id: 4,
          name: "节点0-3-4",
          pid: 3
        },
        {
          id: 5,
          name: "节点0-3-5",
          pid: 3
        }
      ]
    }
  ]
};

class Tree {
  constructor(data) {
    // tree data
    this.data = data;
    this.init();
  }

  // 生成tree
  init() {
    let nodes = [];
    this.mapTree(this.data, data => {
      const element = this.create({
        tagName: 'div',
        text: data.name
      });
      element.id = data.id;
      const root = data.pid === -1 ? document.body : nodes.find(item => +item.getAttribute('id') === data.pid);
      this.append(element, root);
      nodes.push(element);
    });
  }

  // 创造元素
  create({
    tagName,
    className = '',
    text = '',
    attrs = []
  }) {
    const element = document.createElement(tagName);
    element.className = className;
    element.innerText = text;
    attrs.forEach(({
      key,
      value
    }) => {
      element.setAttribute(key, value);
    });
    return element;
  }

  // 插入元素
  append(target, el) {
    console.log(target, el);
    return el.appendChild(target);
  }

  // 遍历tree
  mapTree(tree, action) {
    if (!tree) return false;
    action(tree);
    if (!tree.children) return false;
    tree.children.forEach(item => this.mapTree(item, action));
  }
}

new Tree(treeData);
