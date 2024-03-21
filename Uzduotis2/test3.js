/*
Užduotis 3
Faile pateikiami duomenys masyvas turintis 4, 4 elementų.Pavyzdžiui:
1 2 3 5
5 4 4 7
3 2 1 9
2 3 4 5
Parašykite programą kuri apverstų(pasuktų) masyvą, rezultatas atvaizduojamas ekrane:
1 5 3 2
2 4 2 3
3 4 1 4
5 7 9 5
*/

const fs = require("fs");          //split sukurti masyva
let input = fs.readFileSync("pasuktas.txt").toString().split("\r\n");
console.log(input);

let mas2d = [];
input.forEach((l) => {
    mas2d.push(l.split(" "));

});


/*     //originalus masyvas
for (let i = 0; i < 4; i++) {
    let s = '';
    for (let y = 0; y < 3; y++) {  // 9 kartus suksis ciklas
        s += `${mas2d[i][y]}`;
    }
    console.log(s);   
}

*/
// pakeistas masyvas
for (let i = 0; i < 4; i++) {
    let s = '';
    for (let y = 0; y < 4; y++) {  // 9 kartus suksis ciklas
        s += `${mas2d[y][i]}`;
    }
    console.log(s);
}



