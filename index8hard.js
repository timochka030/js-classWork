// const a = 1;
// const b = 2;
// const c = 3;

let list = [];

const testArr = Array(5);
testArr[0] = "Start";
testArr[1] = 2;
testArr[2] = 20;
testArr[testArr.length] = 30;
testArr[testArr.length] = 40;

delete testArr[0];

// console.log(testArr);

const big = [[[1], [2, 3, 4, 5], [3]], [[2]], [[3]]];

// console.log(big[0][1][2]);

const location = [
  [100, 200],
  [105, 205],
  [110, 190],
];

const [a, ...rest] = location;

const [[p1, p2], c, d = "test"] = rest;

// console.log(p1, p2);

// for (const point of location) {
//   for (const coord of point) {
//     console.log(coord);
//   }
// }

// for (const pointIndex in location) {
//   console.log(location[pointIndex]);

//   for (const coordIndex in location[pointIndex]) {
//     console.log(location[pointIndex][coordIndex]);
//   }
// }

// for (let i = 0; i < location.lenght; i++) {
//   console.log(location[i]);

//   for (let j = 0; j < location[i].lenght; i++) {
//     console.log(location[i][j]);
//   }
// }

const l1 = [2, 3, 4];
const l2 = [1, 3, 5];

const l3 = [100, ...(l1 || [])];

// delete l1[0];

// console.log(l1, l2);

// [l1,l2] = [l2,l1]

// console.log(l1,l2)

function printFullName([name, surname, lastname, ...arg]) {
  //   console.log(arg);
  //   return arg.toString();
  return `${name} ${surname} ${lastname} ${
    arg.length ? `(${arg.toString()})` : ""
  }`;
}

console.log(printFullName(["timothy", "kis", "olek", "admin", "18"]));

// function sumAllNum(...nums) {
//   let sum = 0;

//   for (const n of nums) {
//     sum += n;
//   }

//   return sum;
// }

// console.log(sumAllNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
