const obj = {
  0: "Hello",
  1: "World",
  2: "!!!",
  length: 3,
  prefix: "():",
};

const arr = Array.from(
  obj,
  function (elem, index) {
    return `${this.prefix}${elem}`;
  },
  obj
);

// // console.log(Array.isArray(arr));

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [4, 5, -1.3, 5.6, 3.4, 6];
// // const arr3 = arr1;

// // console.log(Array.of(...arr1, ...arr2));

// // console.log(arr1.at(1));
// /////////////////////////////
// // console.log(-(arr1.length - arr1.push(10, 20, 30, 40)));
// // console.log(arr1);
// // console.log(arr1.pop());
// // console.log(arr1);
// /////////////////////////////
// // console.log(arr1.shift());
// // console.log(arr1);

// // console.log(arr1.unshift(0.1));
// // console.log(arr1);
// ///////////////////////////////

// // console.log(arr2.includes(5));
// // console.log(arr2.indexOf());

// // const arr3 = arr1.concat[...arr2];
// // console.log(arr3);

// // console.log(arr1);
// // arr1.copyWithin(2, 4, 8);
// // console.log(arr1);

// // arr1.fill("0", 4, 8);
// // console.log(arr1);

// // arr1.reverse();
// // console.log(arr1);

// const filterFn = (value, index, array) => value % 2 === 0;
// const filteredArr = arr1.filter(filterFn);
// // console.log(filteredArr);

// const sortFn = (elem1, elem2) => {
//   //   let result = elem1 - elem2;

//   //   if (elem1 % 2 === 0) {
//   //     result += 10;
//   //   }

//   //   //   return elem1 < elem2 ? 1 : -1;
//   //   return result;
//   if (elem1 % 2 === elem2 % 2) {
//     return 0;
//   } else if (elem1 % 2 !== 0 && elem2 % 2 === 0) {
//     return 1;
//   } else {
//     return -1;
//   }
// };
// const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].sort(
//   sortFn
// );
// console.log(sortedArr);

// console.log(["ajrj", "jykt", "fru", "bly", "sry", "awe"].sort());

//////////////////////////////////////
// every, some може бути тут V
console.log(arr2.some((elem, index, array) => elem >= 0));
