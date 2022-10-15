/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 24 - 14 - 6; // x = y = 10, x = 10;
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/
// coding challenge 1,2
// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;
// const markWeight = 95;
// const markHeight = 1.88;
// const johnWeight = 85;
// const johnHeight = 1.76;

// const BMImark = markWeight / markHeight ** 2;
// const BMIjonas = johnWeight / (johnHeight * johnHeight);
// const markHigherBMI = BMImark > BMIjonas;
// console.log(BMImark, BMIjonas, markHigherBMI);
// if (BMImark <= BMIjonas) {
//   console.log(` Mark BMI is higher then john BMI `);
// } else {
//   console.log(`john BMI is higher than mark BMI `);
// }

// const firstName = "jonas";
// const job = "teacher";
// const birthyear = 1991;
// const year = 2037;

// const jonas =
//   "I'm" + firstName + " , a " + (year - birthyear) + "years old" + job + "!;";

// console.log(jonas);
// const jonasNew = `I'm ${firstName}, a ${year - birthyear} years old ${job}`;
// console.log(jonasNew);
// console.log(` just a regular string`);
// console.log("string with \n\
// mltiple \n\
// line");
// console.log(`string
// with
// multiple line
// `);
// const age = 10;
// // const isOldEnough = ;

// if (age >= 18) {
//   console.log("sarah can start driving classes 🚗");
// } else {
//   console.log("minor");
//   const YearsLeft = 18 - age;
//   console.log(`sarah is too young. Wait aother ${YearsLeft} years  `);
// }

// const birthyear = 1991;
// if (birthyear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(String(23), 23);

//---truthy and falsy value--//

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 0;
// if (money) {
//   console.log("Don't spend it all");
// } else {
//   console.log("you should get a job");
// }

// let height = 0;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFIEND");
// }

// const age = 18;
// if (age === 18) console.log("you just became an adult");

// if (age == 18) console.log("you just became an adult");

// const favourite = Number(prompt("what's your favourit number"));
// console.log(favourite);
// console.log(typeof favourite);

// if (userNumber === 23) {
//   //22 === 23 -> false
//   console.log("Cool  is an amazing number");
// } else if (userNumber === 7) {
//   console.log("is also a cool number");
// } else if (userNumber === 9) {
//   console.log("is also a cool number");
// } else {
//   console.log("Numn");
// }

// const myluckynumber = 23;
// const UserNumber = prompt("what's your favourit number");

// if (UserNumber == myluckynumber) {
//   console.log("your number is coolz");
// } else {
//   console.log("your number is not good");
// }
// if (favourite !== 23) console.log("why not 23");

// const hasDriversLicense = true;
// const hasGoodvision = true;

// console.log(hasDriversLicense && hasGoodvision);
// console.log(hasDriversLicense || hasGoodvision);
// console.log(!hasDriversLicense);

// // if (hasDriversLicense && hasGoodvision){
// //     console.log('Sarah is able to Drive');
// // } else {
// //     console.log('someone else should drive...')
// // }'

// const isTired = true;
// console.log(hasDriversLicense && hasGoodvision && isTired);

// if (hasDriversLicense && hasGoodvision && !isTired){
//     console.log('Sarah is able to Drive');
// } else {
//     console.log('someone else should drive...')
// }
// if (hasDriversLicense && hasGoodvision){
//     console.log('Sarah is able to Drive');
// } else {
//     console.log('someone else should drive...')
// }

// const day = 'monday';

// switch (day) {
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//             console.log('Prepare theory videos');
//             console.log('Go to coding meetup');
//             break;
//     case 'wednesday':
//     case 'thursday':
//                 console.log('Write code examples');
//                 console.log('Go to coding meetup');
//                 break;
//     case 'friday':
//                     console.log('Record videos');
//                     console.log('Go to coding meetup');
//                     break;
//     case 'saturday':
//     case 'sunday':
//                     console.log('Enjoy weekend');
//                     console.log('Go to coding meetup');
//                     break;
//     default:
//         console.log('not a valid day');
// }

// if (day === "monday"){

// }else if (day === "tuesday"){

// }else if(day === "wednesday" || day === "thursday")
// {

// }e

// -------Trenay operator -------- //

// const age = 23;
// age >= 18
//   ? console.log("I like to drink wine")
//   : console.log("I like to drink water ");

// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// // code comparision---//

// let drink2;
// if (age >= 18) {
//   drink2 = "wine";
// } else {
//   drink2 = "water";
// }
// console.log(drink2);

// //------Template literals------//

// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
