// Калькулятор

table: for (let i = 1; i < 10; i++) {
  console.log(`Число ${i} =======================`);
  for (let j = 1; j < 10; j++) {
    if (i === 9) {
      break table;
    }
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

////////////////////////////////////////////////////////////////////////////////////
// let age = 25;
// let hasExp = true;
// let hasEdu = false;

// let JS = true;
// let HTML = true;

// form: {
//   if (age >= 18) {
//     if (hasExp) {
//       console.log("Ви підходите");
//       break form;

//       if (JS) {
//         console.log("Ви підходите");
//       }
//       if (HTML) {
//         console.log("Ви підходите");
//       }
//     }

//     if (hasEdu) {
//       console.log("Ви підходите");
//       result = false;
//     }
//   }

//   if (age < 18) {
//     console.log("Ви не підходите. Маленький вік");
//     break form;
//   }
// }
/////////////////////////////////////////////////////////////////////////////
// let q = 0;

// main: for (let i = 0, j = 5; i <= j; i++) {
//   console.log("Test", i, j);

//   if (i === 3) {
//     j++;
//   }

//   for (; q < i; ) {
//     console.log("Q:", q);
//   }

//   if (q >= i) {
//     break main;
//   }
//   q++;
// }
/////////////////////////////////////////
// До безкінечності

// for (let i = 0, j = 5; i <= j; i++) {
//   console.log("Test", i, j);

//   if (i === 3) {
//     j++;
//   }

//   for (; ; q++) {
//     console.log("Q:", q);
//   }
// }

////////////////////////////////////////////////////

// бігова доріжка цикл

// let start = 40;
// let goal = 100;

// let step = 0;
// let set = 8;
// let rest = 10;

// do {
//   if (step === 0) {
//     console.log("Почали тренування");
//   }

//   start++;
//   step++;

//   if (step === goal || start === goal) {
//     console.log("Кінець тренування");
//     break;
//   }

//   if (step % rest === 0) {
//     console.log(`Зробіть перерву`);
//     continue;
//   }

//   if (step % set === 0) {
//     console.log(`Ви зробили ${step / set} сет`);
//   }
//   if (step === goal / 2) {
//     console.log(`Ви виконали половину тренувань`);
//   }

//   console.log("Поточний прогрес:", step);
// } while (step < goal && start < goal);

/////////////////////////////////////////////////////////////////////////////////

// let container = 5;
// let storage = 20;

// let car = 3;

// do {
//   car++;
//   storage -= container;
//   console.log(car, storage);
// } while (car < 3);

// if (car > 3) {
//   console.log("нам потрібна нова машина");
// }

/////////////////////////////////////////////////////////////////////////////////

// const PRODUCT_AMOUMT = 10;
// const DISCOUNT_ADDITIONAL = 2;

// let discountAmount = 0;
// let productCount = 0;

// while (productCount < PRODUCT_AMOUMT && DISCOUNT_ADDITIONAL <= 10) {
//   if (productCount <= 3) {
//     discountAmount += 1;
//   } else if (productCount > 3 && productCount <= 5) {
//     discountAmount += 1.5;
//   } else if (productCount > 5 && productCount <= 8) {
//     discountAmount += 2;
//   } else if (productCount > 8) {
//     discountAmount += 2.5;
//   }

//   if (DISCOUNT_ADDITIONAL) {
//     discountAmount += DISCOUNT_ADDITIONAL;
//     console.log("Додаткова знижка:", DISCOUNT_ADDITIONAL, "%");
//     console.log("Всього ваша знижка:", discountAmount, "%");
//   }

//   productCount++;

//   console.log("Product Count:", productCount, "");
// }

// if (discountAmount > 10) {
//   discountAmount = 10;
// }

// console.log("Знижка:", discountAmount, "%");

// console.log("Знижка для товарів:", productCount, "%");

// console.log("Товарів не мають знижки:", PRODUCT_AMOUMT - productCount);

//////////////////////////////////////////////////////////////////////////////////////////

// let count = 0;
// let isFast = true;

// while (count < 5) {
//   let a = 1;
//   console.log("Count:", count);

//   if (isFast && count >= 3) {
//     count = 5;
//   } else {
//     count++;
//   }
// }
