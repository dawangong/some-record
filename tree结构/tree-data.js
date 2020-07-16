const treeData = [{
    id: 5,
    name: "节点0-3-5",
    pid: 3
  },
  {
    id: 4,
    name: "节点0-3-4",
    pid: 3
  },
  {
    id: 0,
    name: "根节点",
    pid: -1
  },
  {
    id: 6,
    name: "节点0-1-6",
    pid: 1
  },
  {
    id: 2,
    name: "节点0-2",
    pid: 0
  },
  {
    id: 3,
    name: "节点0-3",
    pid: 0
  },
  {
    id: 1,
    name: "节点0-1",
    pid: 0
  }
];

const treeData2 = [
  {
    id: 0,
    name: "根节点1",
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
  },
  {
    id: 10,
    name: "根节点2",
    pid: -1,
    children: [{
      id: 11,
      name: "节点0-1",
      pid: 10,
      children: [{
        id: 16,
        name: "节点0-1-6",
        pid: 11
      }]
    },
      {
        id: 12,
        name: "节点0-2",
        pid: 10
      },
      {
        id: 13,
        name: "节点0-3",
        pid: 10,
        children: [{
          id: 14,
          name: "节点0-3-4",
          pid: 13
        },
          {
            id: 15,
            name: "节点0-3-5",
            pid: 13
          }
        ]
      }
    ]
  },
];


module.exports = { treeData, treeData2 };


// {
//         id: 0,
//         name: "根节点",
//         pid: -1,
//         children: [
//           {
//             id: 1,
//             name: "节点0-1",
//             pid: 0,
//             children: [
//               {
//                 id: 6,
//                 name: "节点0-1-6",
//                 pid: 1
//               }
//             ]
//           },
//           {
//             id: 2,
//             name: "节点0-2",
//             pid: 0
//           },
//           {
//             id: 3,
//             name: "节点0-3",
//             pid: 0,
//             children: [
//               {
//                 id: 4,
//                 name: "节点0-3-4",
//                 pid: 3
//               },
//               {
//                 id: 5,
//                 name: "节点0-3-5",
//                 pid: 3
//               }
//             ]
//           }
//         ]
//       };
