/*
2. Užduotis
Duomenų faile pateikiamas dvimačio masyvo 4, 4 duomenys.Pavyzdžiui:
1 2 2 5
5 1 4 2
2 2 1 3
2 8 9 6

Parašykite programą kuri įstrižainėse padarytų skaičius 0 ir išvestų tokį masyvą:
0 2 2 0
5 0 0 2
2 0 0 3
0 8 9 0

*/


const fs = require('fs');
let data = fs.readFileSync('suNuliais.txt').toString().split('\r\n');

const mas2d = [];
data.forEach((d) => {
    mas2d.push(d.split(' '));
    console.log('----------mas2d');
    console.log(mas2d);

});

console.log(`-------------`);


for (let i = 0; i < 4; i++) {   //originalas
    let s = "";
    for (let y = 0; y < 4; y++) {
        s += `${mas2d[i][y]} `;
    }
    console.log(s);
}

console.log(`------------`);   //pakeistas

for (let i = 0; i < 4; i++) {
    let s = "";
    for (let y = 0; y < 4; y++) {
        if (y === i || y + i === 4 - 1) {
            mas2d[y][i] = 0;
            s += `${mas2d[y][i]} `;
        } else {
            s += `${mas2d[y][i]} `;
        }
    }
    console.log(s);
}