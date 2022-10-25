// Coding Challenge 1 //

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(`average of team ${calcaverage}`);

// console.log(calcAverage(3, 4, 5));

// let scoreDolphins = calcAverage(44, 23, 72);
// let scoreKoalas = calcAverage(65, 54, 49);
// //  .....
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`dolphins win(${avgDolphins}vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`koala win(${avgKoala}vs. ${avgDolphins})`);
//   } else {
//     console.log(`no team win...`);
//   }
//   return checkWinner;
// };

// checkWinner(scoreDolphins, scoreKoalas);

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

// arrays //

// const tip = billValue <= 300 && billValue >= 50 ? 20 : 15;

// const finalValue = billValue + (billValue * tip / 100);
// console.log(finalValue);
/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [123, 555, 44];
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tip);
*/
/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steve"],
  hasDriverLicense: false,

  calcAge: function () {
    //console.log(this);
    this.birthyeah = 2037 - this.age;
    return this.birthyea;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} - year old ${
      jonas.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license`;
  },
};

console.log(jonas.getSummary());

*/

// coding challenge 3 //


/*
const mark = {
  firstName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const john = {
  firstName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
console.log(mark.bmi);
john.calcBMI();
console.log(john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s BMI (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s BMI (${mark.bmi})`
  );
}
*/