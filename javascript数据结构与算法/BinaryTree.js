class Node {
  constructor(val) {
    // 保存当前节点 key 值
    this.val = val;
    // 指向左子节点
    this.left = null;
    // 指向右子节点
    this.right = null;
  }
}

// 有这样一颗二叉树
const tree = [1, 2, 3, 4, 5, 6, 7];

/**
 * 二叉树解析
 * 树高度 2
 * 节点 7
 * 叶子节点 4
 * 使用的 数组存储
 *    1
 *  2   3
 * 4 5 6 7
 * 前序遍历输出
 * 1 2 4 5 3 6 7
 * 中序遍历输出
 * 4 2 5 1 6 3 7
 * 后序遍历输出
 * 4 5 2 6 7 3 1
 */




