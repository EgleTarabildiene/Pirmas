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

const fs = require("fs");
let data = fs.readFileSync("pasuktas.txt").toString().split("\r\n");



//let line = 0;
//let mas = [];
//data.forEach((d) => {
//    mas[line] = [];
//    let a = [];
//    d.split(" ").forEach((x) => {
//        mas[line].push(x);
//
//        a = x;
//        console.log(a);
//    });
//
//});


