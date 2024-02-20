// const user = {
//   name: "Olga",
//   id: 394506948,
//   bookId: null,

//   getPhone(book) {
//     return book[this.bookId];
//   },
// };

// const phoneBook = {
//   me: "+380991838501",
//   name: "Phone Book",
// };

// // .....

// function addToPhoneBook(phone, user) {
//   const key = Symbol.for(user.id);
//   phoneBook[key] = phone;

//   user.bookId = key;
// }

// addToPhoneBook("+380663690260", user);

// // .....

// addToPhoneBook("+386958432550", user);

// // .....

// // console.log(user.getPhone(phoneBook));

// // console.log(phoneBook);

// // const a = Symbol.for(1);
// // const b = Symbol.for(1);

// // console.log(a === b);

// /// ===

// const symId = user.bookId;

// // console.log(Symbol.keyFor(symId));

// for (const key in phoneBook) {
//   console.log(key);
// }

/////////////////////////////////////////////////////////////

let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;

    return this;
  },

  next() {
    return this.current <= this.to
      ? { done: false, value: this.current++ }
      : { done: true };
  },
};

// for (let num of range) {
//   console.log(num);
// }

const arr = [1, 2, 3, 4, 5];

const iterator = arr[Symbol.iterator]();

result = iterator.next();

do {
  console.log(result.value);
  result = iterator.next();
} while (!result.done);

//////////////////////////////////////////////////////////////
