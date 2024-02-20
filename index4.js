/////////////////////////////////////////////////////////////////////////////////////

// Плеєр

// function calcSpace(amount, unit = "px") {
//   return `${amount * 4}${unit}`;
// }

// function playTrackById(trackId) {
//   /// отримати файл пісні і її запустити
//   console.log(`отримати файл пісні з ID ${trackId} і її поставити на `);
// }

// function stopTrackById(trackId) {
//   /// отримати файл пісні і її запустити
// }

// function play(trackName, trackId) {
//   console.log(`Запускаємо ${trackName}`);

//   playTrackById(trackId);
// }

// function end(oldTrackName, newTrackName) {
//   console.log(`Завершили грати ${oldTrackName}`);
//   console.log(`Наступний трек ${newTrackName}`);
// }

// function pauseStop(currentTrackName) {
//   console.log(`Трек ${currentTrackName} на паузі`);
// }

// function pausePlay(currentTrackName) {
//   console.log(`Трек ${currentTrackName} на паузі`);

//   reloadDataTrack();

//   play();
// }

// // function reloadDataTrack(amount) {
// //   if (amount <= 0) {
// //     console.log("Дані онвленні вказану кількість разів");
// //   } else {
// //     console.log("Повторне оновлення");
// //     // певний код для оновлення данних
// //     reloadDataTrack(amount - 1);
// //   }
// // }

// // reloadDataTrack(5);

// function pauseStopByTrack(trackName) {
//   let originTrackname = trackName;
//   let isPause = null;

//   return function pauseStop(TrackName) {
//     if (isPause == true) {
//       return;
//     }

//     console.log(`Трек ${originTrackname} на паузі`);
//     isPause = true;
//   };
// }

// const pauseStop456 = pauseStopByTrack("IT - Console log");

// pauseStop456();

// const runComand = function (comand, errorFn) {
//   const result = comand();

//   if (!result) {
//     return errorFn();
//   }
// };

// runComand(
//   () => {
//     console.log("Запуск команди");

//     return 1 - 1;
//   },
//   () => {
//     console.log("Помилка");
//   }
// );

// const testFunc = () => {
//   if (true) {
//     var test = 10;
//   }
//   return test;
// };

// console.log(testFunc);

const memoCalcSpace = (oldAmount = null, oldUnit = null, oldResult) => {
  return (amount, unit = "px") => {
    if (oldAmount === amount && unit === oldUnit) {
      console.log("Memo");
      return oldResult;
    }

    oldResult = `${amount * 4}${unit}`;
    oldAmount = amount;
    oldUnit = unit;

    return oldResult;
  };
};

const calcSpace = memoCalcSpace();

console.log(calcSpace(4));
console.log(calcSpace(4));

const getSpaceFromDesign = (componentName) => {
  switch (componentName) {
    case "button":
      return 4;
    case "card":
      return 3;
    default:
      return 2;
  }
};

const isMobile = true;

const amount = getSpaceFromDesign("button");
const amountMobile = isMobile ? amount / 2 : amount;
const amountInPx = calcSpace(amount);

const calcSpaceFromDesign = (componentName) => {
  return calcSpace(getSpaceFromDesign(componentName));
};

console.log(calcSpaceFromDesign("button"));
