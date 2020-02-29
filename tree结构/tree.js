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
        tagName: 'p',
        text: data.name,
        className: 'tree-element'
      });
      this.commonFn(element, data);
      const root = data.pid === -1 ? document.body : this.otherNodeFn(nodes, element, data);
      this.append(element, root);
      nodes.push(element);
    });
  }

  // 所有节点公共逻辑
  commonFn(element, data) {
    element.setAttribute('tid', data.id);
    element.setAttribute('pid', data.pid);
    element.setAttribute('open', false);
    element.addEventListener('click', e => {
      e.stopPropagation();
      const open = element.getAttribute('open') === 'true';
      element.setAttribute('open', !open);
      this.toggle(element, !open);
    }, false);
    this.css(element, {
      'cursor': 'pointer'
    });
  }

  // 除去根结点
  otherNodeFn(nodes, element, data) {
    const parent = nodes.find(item => +item.getAttribute('tid') === data.pid);
    this.css(element, {
      'margin-left': '16px',
      'margin-top': '5px',
      'cursor': 'pointer',
      'display': parent.getAttribute('open') === 'true' ? 'block' : 'none'
    });
    return parent;
  }

  // 展开或者收起
  toggle(element, show) {
    const child = [...element.querySelectorAll('.tree-element')].filter(item => item.getAttribute('pid') === element.getAttribute('tid'));
    child.forEach(item => {
      this.css(item, {
        'display': show ? 'block' : 'none'
      });
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
    return el.appendChild(target);
  }

  // 遍历tree
  mapTree(tree, action) {
    if (!tree) return false;
    action(tree);
    if (!tree.children) return false;
    tree.children.forEach(item => this.mapTree(item, action));
  }

  // 修改style
  css(obj, option) {
        for (let i in option) {
            obj.style[i] = option[i];
        }
    }
}

new Tree(treeData);
