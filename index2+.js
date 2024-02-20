const buttonType = "secondary";

switch (buttonType) {
  case "main":
    console.log("main");
  case "global":
    console.log("global");
  case "primary":
    console.log("primary");
    break;

  case "second":
    console.log("second");
  case "double":
    console.log("double");
  case "secondary":
    console.log("secondary");
    break;

  default:
    console.log("default button");
}

//////////////////////////////////////////////////////////////////////

// const price = 100;
// const useCeshbeck = true;
// let cashbackLevel = 4;
// let totalPrice = null;
// let cashbackAmount = null;

// if (price < 100) {
//   console.log("Кешбек система доступна для товарів з ціною від 100грн");
//   cashbackAmount = 0;
// } else {
//   if (cashbackLevel > 0) {
//     cashbackAmount = price * (cashbackLevel * 0.01);
//   }

//   cashbackLevel++;

//   if (cashbackLevel > 5) {
//     cashbackLevel = 1;
//   }

//   if (useCeshbeck > 0 && useCeshbeck) {
//     totalPrice = price - cashbackAmount;
//   }
// }

// console.log(totalPrice);

//////////////////////////////////////////////////////////////////////////

// const login = "user";
// const password = "123qwe12331";
// const isAdmin = true;
// const isLoggedIn = null;

// if (isLoggedIn === true) {
//   if (isAdmin) {
//     console.log("Переходимо на сторінку /admin");
//   } else if (login === "demo") {
//     console.log("Переходимо на сторінку /demo");
//   } else {
//     console.log("Переходимо на сторінку /home");
//   }
// } else if (isLoggedIn === false) {
//   if (login && password) {
//     console.log("Token:", 123056473287);

//     if (isAdmin) {
//       console.log("Переходимо на сторінку /admin");
//     } else {
//       console.log("Переходимо на сторінку /home");
//     }
//   }
// } else if (isLoggedIn === null) {
//   console.log("Помилка");
// }

//////////////////////////////////////////////////////////////////////////

// const CUSTOM_NAME = "My robot";
// const MODE = 2;
// const ROOM = "Вітальня";

// const COMAND = "work";

// if (COMAND === "change name" && MODE !== 0) {
//   const name = CUSTOM_NAME || "Robot v134t1";
//   console.log(`Start ${name}`);
// }

// if (MODE === 0) {
//   console.log(`Robot is offline`);
// }

// if (COMAND === "work") {
//   const room = ROOM;
//   const mode = MODE;
//   console.log(`Mode: ${mode}; Прибираю кімнату ${room}`);
// }

/////////////////////////////////////////////////////

// const productName = "Мікрофон";
// const productDefault = "Назва товару";

// const newProductName = "Мікрофон 3000";
// const userRole = "admin";

// const updateProductName =
//   (userRole === "admin" && newProductName) || productName;

// console.log(updateProductName);
