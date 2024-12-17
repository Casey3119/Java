// let count = 0;

// while (count <= 99) {
//     count = count + 1;
//     console.log(count)

// }
// for (let i=0; i < 101; i++) {
//     console.log(i)

// for (let i=1; i<=20; i++) {
//     if (i % 3 ===0 && i % 5 === 0) {
//     console.log (`${i} -> Forntend Simplified`);
//     }

//     else if (i% 3===0) {
//         console.log (`${i} ->Fontend`);
//     }

//     else if (i%5===0 ) {
//         console.log (`${i} -> Simplified`);
//     }

//     else {
//         console.log (`${i}-> ${i}`)
//     }
// }

// Function definition
// f
// function convertCelsiusToFahrenheit(F, C) {
//   return  F = C * 1.8 + 32

// }

// console.log(convertCelsiusToFahrenheit(0, 0));
// console.log(convertCelsiusToFahrenheit(0, 10));
// console.log(convertCelsiusToFahrenheit(0, 30));

// const convertCelsiusToFahrenheit = (celsius) => {
// return celsius * 1.8 + 32
// }

// console.log(convertCelsiusToFahrenheit(0))
// console.log(convertCelsiusToFahrenheit(10))
// console.log(convertCelsiusToFahrenheit(30))

// let arr = [20, 30, 40, 50, 100]

// console.log(arr[0])

// console.log(arr[arr.length - 1])

// arr.push(200)

// arr.filter ((element) => {
//     console.log(element)
// })

// console.log(arr)

// let arr = [20, 30, 40, 50, 100]

// let newArr = arr.filter((element) => {
//     console.log (element)
//     if (element < 50) {
//         return true;
//     }
// })

// console.log (newArr)

// let arr = [20, 30, 40, 50, 100]

// let newArr = arr.filter(element => element < 50

//     )

// console.log (newArr)

// let grades = [`A+`, `A`, `FAIL`]

// let newGrades = grades.filter(element => element !== `FAIL` )

// console.log (newGrades)

// let grades = [`FAIL`, `B`, `FAIL`]

// let goodGrades = []

// for (let i=0; i< grades.length; ++i) {
//     if (grades[i] !== `FAIL`) {
//         goodGrades.push(grades[i]);
//     }
// }

// console.log (goodGrades);

// let arr= [1, 4, 9, 16]

// let newArray = arr.map (element => `dog`
// )

// console.log (newArray)

// let arr = [1, 5, 10, 3];

// let newArray = arr.map (element => element * 100  )

// console.log(newArray)

// let dollars = [0, 10, 20];

// let cents =[]

// for (let i = 0 ;  i < dollars.length; ++i) {
//     cents.push (dollars[i] * 100);
// }

// console.log(cents)

// let user = {
//     discord: `C.blaine@discord.com`
// }

// let users = [
//   {
//     username: `Casey`,
//     email: `c.blaine.sexton@gmail.com`,
//     password: `Bizzle`,
//     subscription: `VIP`,
//     lessonCompleted: [0, 1],
//   },
//   {
//     username: `Dude`,
//     email: `c.blaine.s@gmail.com`,
//     password: `Buggy`,
//     subscription: `VIP`,
//     lessonCompleted: [0, 1],
//   },
// ];

// function login(email, password) {
//   for (let i = 0; i < users.length; ++i) {
//        users.push(user)
//        console.log(users)
//     if (users[i].email === email) {
//       console.log(users[i]);
//       if (users[i].password === password)
//         console.log(`log the user in - the details are correct`);

//       else {
//         console.log (`ugh uh uh. Gotta say the Magic word`)
//       }

//       return;
//     }
//   }
//   console.log(`The user could not be found`)
// }

// login(`c.blaine.sexton@gmail.com`, `Bizzle`);

// let users = [{
//  username: `Nova`,
//  email: `Nova.Rose@gmail.com`,
//  password : `Rose`,
//  subscription: `Vip`,
//  discord: `Nova@discord.com`,
//  lessonscompleted: [0,1],

// }]

// function registor(user) {
//   users.push(user);
// }

// registor({
//   username: `Casey`,
//   email: `c.blaine@gmail/com`,
//   password: `Bizzy`,
//   subscription: `VIP`,
//   discorId: `C@discord.com`,
//   lessonCompleted: `[0, 1, 2]`,
// });

// console.log(users);
// console.log(document.querySelector(`.title`).innerHTML += `Frontend Simplified`)

function changeTitleToRed() {
  console.log(document.querySelector(`.title`).classList.toggle("turn-red"))
  
}


function turnToBlack() {
  console.log(document.querySelector(`body`).classList.toggle("dark-theme"));
}
