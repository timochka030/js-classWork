// /////////////////////////////////////////////////////////////////////////

// // const key = "key5768857674";

// // const a = {
// //   amount: 100,
// //   [key]: "helloWorld",

// //   info: {
// //     name: "Tim",
// //     age: 15,
// //   },
// // };

// // console.log(a);

// ///////////////////////////////////////////////////////////////////////

// // const b = Object() -- Не рекомендується використовувати \

// //////////////////////////////////////////////////////////////////////

// const role = {
//   value: "admin",
//   status: 3,
// };

// const person = {
//   name: "Timothy",
//   age: 15,
//   ocupation: "Розробник програмного забезпнчення",

//   info: role,

//   address: {
//     city: "Kyiv",
//     street: "Вулиця Шевченка",
//     houseNumber: 10,
//   },

//   getAddress: function () {
//     return this.address;
//   },
// };

// const person2 = { ...person };

// // delete person.address;

// // const { age, name, addres } = person;

// // console.log("name" in person);

// // console.log(person.getAddress());

// /////////////////////////////////////////////////////////////////////////

// function getAddress({ address }) {
//   if (address) {
//     const {
//       city,
//       street = "Не вказано",
//       houseNumber,
//       zipCode = 1000,
//     } = address;

//     return `Ваша адреса: ${city} ${street} ${houseNumber} ${zipCode}`;
//   }

//   return `Нема даних`;
// }

// // const test = getAddress({ address });
// // console.log({ test });

// // for (const key in person) {
// //   const item = person[key];

// //   if (typeof person[key] === "object") {
// //     for (const key2 in item) {
// //       console.log(item[key2]);
// //     }
// //   } else {
// //     console.log(item);
// //   }
// // }

// /////////////////////////////////////////////////////////////////////////////

// // const a = { test: 1 };
// // const b = a;

// // console.log(a === b);

// ///////////////////////////////////////////////////////////////////////////

// Створення встроєних JS функцій .toOwnString <-- такої функції не існує!!!

Number.prototype.toOwnString = function () {
  console.log(this);
  return `Число ${this}`;
};
const b = 1;

const c = b.toOwnString();

console.log(c);

function Test() {
  this.world = "World";
  return "Hello" + this.world;
}

Test.hello = "Hello";

console.log(Test.hello);
