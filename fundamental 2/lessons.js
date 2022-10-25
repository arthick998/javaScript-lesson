// "use strict";

// function describeCountry(country, population, capitalcity) {
//   console.log(country, population, capitalcity);
//   const statement = `${country} has ${population} million people and it's capital city ${capitalcity}`;
//   return statement;
// }
// const user = describeCountry("finland", 6, "helenski");
// console.log(user);

// const user1 = describeCountry("India", 11, "Delhi");
// console.log(user1);

// const user2 = describeCountry("USA", 8, "Washington");
// console.log(user2);

// // finction declarations  //

//  function percentageOfWorld1 (population){
//      return (population / 79  * 100);
//  }
// // expression //
// const percentageOfWorld2 = function(population){
//     return(population / 7900  * 100);
// }

// const china1 = percentageOfWorld1(1000);
// const India2 = percentageOfWorld2(2000);
// console.log(china1, India2);

// const percentageOfWorld3 = population => population/7900*100;
// const malaysia = percentageOfWorld3(4500);
// console.log(malaysia);

//

// const describePopulation = function (country, population ){
// const percentage = percentageOfWorld1(population);
// const description = ` ${country} has  ${population} million people, which is about ${percentage}% of the world.`;
// console.log(description);
// };

// describePopulation('portuga', 10);

// const populations = [30, 20, 33, 21];
// console.log(populations.length === 4 ? true : false);

// function percentageOfWorld1(populations) {
//   return (populations / 100) * 100;
// }

// const percentage = [
//     percentageOfWorld1(populations[0]),
//     percentageOfWorld1(populations[1]),
//     percentageOfWorld1(populations[2]),
//     percentageOfWorld1(populations[3]),
// ];
// console.log(percentage);

// -- objects -- //
/*
const jonasArray = [
    'Jonas',
    'Schmedtamann'
    2037- 1991,
    'teacher'
    ['Micheal', 'Peter', 'Steven']
];

*/

/*

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steve"],
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

 Bracket notation //

const interestedIn = prompt(
"what do you want to know about jonas? Choose between firstname, lastname, age, job, and friends "
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log("Wrong request");
}

jonas.location = "Portugal";
jonas["twitter"] = "@arthick";
console.log(jonas);
// challenge
// "jonas has 3 freinds, and his best freind is called Micheal"

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends and his best friends is called ${jonas.friends[0]} `
);

*/

/*

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steve"],
  hasDriverLicense: true,

  // calcAge: function(birthYeah){
  //   return 2037- birthYeah;

  // }

  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.age;
  // },

  calcAge: function () {
    //console.log(this);
    this.birthyeah = 2037 - this.age;
    return;
  },
};

console.log(jonas.calcAge());
console.log(jonas.birthyeah);
console.log(jonas.birthyeah);

console.log(jonas.birthyeah); 


*/

// ---- Loops ---- //
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`true honesty ${rep}`);
}


*/
/*

const jonas = [
  "Jonas",
  "Schmedtamann",
  2037 - 1991,
  "teacher",
  [("Micheal", "Peter", "Steven")],
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  //  types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}
// filling types array
// types[0] = 'string';

console.log(types);

const year = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < year.length; i++) {
  ages.push(2037 - year[i]);
}
console.log(ages);


// continue and break


for (let i = 0; i < jonas.length; i++) {
  if(typeof jonas[i] !== 'string') continue;

  console.log(jonas[i], typeof jonas[i]);
}


*/
/*
const jonas = [
  "Jonas",
  "Schmedtamann",
  2037 - 1991,
  "teacher",
  [("Micheal", "Peter", "Steven")],
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------ Starting exercise ${exercise} `);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight ${rep}`);
  }
}
*/
