// const a = 0b0001;
// const b = 0b0010;
// const c = 0b0100;

// let settings = 0b0000;

// settings |= a;

// settings |= b;

// isButtonOn(!((settings & c) === 0b0000));

// console.log(isButtonOn);

///////////////////////////////////////////

// let freeTea = 0b0001;
// freeTea >>= 1;

// console.log(freeTea.toString(2));

// freeTea >>= 1;

// console.log(freeTea.toString(2));

// freeTea >>= 1;

// console.log(freeTea.toString(2));

// freeTea >>= 1;

// console.log(freeTea.toString(2));

// console.log(freeTea === 0b00001);

////////////////////////////////////////////////////////////////////////

// const canRead = false;
// const canWrite = true;
// const canDelete = false;
// const canEdit = true;

// let userRole = 0b0101;
// let adminRole = 0b1111;
// let user2Role = 0b0110;

// let friendRole = userRole ^ user2Role;

// adminRole = ~adminRole;

// console.log(adminRole);
// console.log(adminRole.toString(2));

// toString(2) двійкова система 1=true, 0=false, складається з 4-ох чисел (пишеться після "0b")
