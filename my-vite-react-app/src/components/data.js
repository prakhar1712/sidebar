// // src/data.js
// export const sidebarItems = [
//   { id: 1, name: 'Item 1', link: '#' },
//   { id: 2, name: 'Item 2', link: '#' },
//   { id: 3, name: 'Item 3', link: '#' },
//   { id: 4, name: 'Item 4', link: '#' },
//   { id: 5, name: 'Item 5', link: '#' },
//   { id: 5, name: 'Item 5', link: '#' },
//   { id: 5, name: 'Item 5', link: '#' },
// ];

// src/data.js
// export const sidebarItems = [
//   {
//     id: 1,
//     name: 'Parent 1',
//     childNode: [
//       {
//         id: 11,
//         name: 'Child 1-1',
//         childNode: [
//           {
//             id: 111,
//             name: 'Child 1-1-1',
//             childNode: [
//               {
//                 id: 1111,
//                 name: 'Child 1-1-1-1',
//                 childNode: []
//               },
//               {
//                 id: 1112,
//                 name: 'Child 1-1-1-2',
//                 childNode: [
//                   {
//                     id: 11121,
//                     name: 'Child 1-1-1-2-1',
//                     childNode: []
//                   },
//                   {
//                     id: 11122,
//                     name: 'Child 1-1-1-2-2',
//                     childNode: []
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             id: 112,
//             name: 'Child 1-1-2',
//             childNode: [
//               {
//                 id: 1121,
//                 name: 'Child 1-1-2-1',
//                 childNode: []
//               }
//             ]
//           }
//         ]
//       },
//       {
//         id: 12,
//         name: 'Child 1-2',
//         childNode: [
//           {
//             id: 121,
//             name: 'Child 1-2-1',
//             childNode: [
//               {
//                 id: 1211,
//                 name: 'Child 1-2-1-1',
//                 childNode: []
//               }
//             ]
//           },
//           {
//             id: 122,
//             name: 'Child 1-2-2',
//             childNode: [
//               {
//                 id: 1221,
//                 name: 'Child 1-2-2-1',
//                 childNode: []
//               },
//               {
//                 id: 1222,
//                 name: 'Child 1-2-2-2',
//                 childNode: [
//                   {
//                     id: 12221,
//                     name: 'Child 1-2-2-2-1',
//                     childNode: []
//                   }
//                 ]
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   },
//   {
//     id: 2,
//     name: 'Parent 2',
//     childNode: [
//       {
//         id: 21,
//         name: 'Child 2-1',
//         childNode: [
//           {
//             id: 211,
//             name: 'Child 2-1-1',
//             childNode: [
//               {
//                 id: 2111,
//                 name: 'Child 2-1-1-1',
//                 childNode: []
//               }
//             ]
//           }
//         ]
//       },
//       {
//         id: 22,
//         name: 'Child 2-2',
//         childNode: [
//           {
//             id: 221,
//             name: 'Child 2-2-1',
//             childNode: [
//               {
//                 id: 2211,
//                 name: 'Child 2-2-1-1',
//                 childNode: []
//               },
//               {
//                 id: 2212,
//                 name: 'Child 2-2-1-2',
//                 childNode: []
//               }
//             ]
//           }
//         ]
//       },
//       {
//         id: 23,
//         name: 'Child 2-3',
//         childNode: []
//       }
//     ]
//   }
// ];

// src/data.js
export const sidebarItems = [
  {
    id: 1,
    name: 'Parent 1',
    childNode: [
      {
        id: 11,
        name: 'Child 1-1',
        childNode: [
          {
            id: 111,
            name: 'Child 1-1-1',
            childNode: []
          },
          {
            id: 112,
            name: 'Child 1-1-2',
            childNode: []
          }
        ]
      },
      {
        id: 12,
        name: 'Child 1-2',
        childNode: [
          {
            id: 121,
            name: 'Child 1-2-1',
            childNode: []
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Parent 2',
    childNode: [
      {
        id: 21,
        name: 'Child 2-1',
        childNode: [
          {
            id: 211,
            name: 'Child 2-1-1',
            childNode: []
          }
        ]
      },
      {
        id: 22,
        name: 'Child 2-2',
        childNode: []
      }
    ]
  }
];

