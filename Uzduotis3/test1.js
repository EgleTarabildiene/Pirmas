/*
1. Užduotis
Nuskaitykite į masyvą skaičius iš failo ir suskaičiuokite kiek 
iš viso šiame masyve yra lyginių ir nelyginių skaičių.
Išveskite visus lyginius ir nelyginius skaičius.

Pavyzdžiui jei faile yra šie skaičiai: 5 8 7 2 3

Programa turi išvesti:

Lyginiai skaičiai: 8 2
Nelyginiai skaičiai: 5 7 3
*/



const fs = require('fs');
let data = fs.readFileSync('data.txt').toString().split(' ');


console.log(data);
let lyginiai = [];
let nelyginiai = [];

for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 === 0) {
        lyginiai.push(data[i]);
    } else {
        nelyginiai.push(data[i]);
    }
}

console.log(`Lyginiai skaičiai: ${lyginiai} `);
console.log(`Nelyginiai skaičiai: ${nelyginiai} `);