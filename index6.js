const a = 0.1;
const b = 0.2;
const c = 0.3;

const d = a + b;

// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_VALUE);

// console.log(d - c < Number.EPSILON && c - d < Number.EPSILON);

function reviewNumber(num) {
  if (isNaN(num)) {
    console.log("Is Not a Number", num);
  }

  if (!num && num !== 0) {
    return console.log("Bad number", num);
  }
  if (!Number.isInteger(num)) {
    return console.log("Дробове число", num);
  }

  if (!Number.isSafeInteger(num)) {
    return console.log("Небезпечне число", num);
  }

  return console.log(num);
}

// reviewNumber(Number.MAX_SAFE_INTEGER + 12);

// const a1 = 999999999994567;
// const a2 = parseInt("1000", 2);
// // const a3 = parseFloat(a1.toPrecision(5));
// const a3 = a1.toExponential(2);
// const a4 = parseFloat(a3);

// console.log(a4);

const a1 = 94567;
const a2 = a1.toExponential();
const a3 = parseFloat(a2);
const a4 = a3.toString(3);

console.log(a4);
