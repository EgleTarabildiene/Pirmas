/*
Faile pateiktos dienos oro temperatūros.Parašykite programą kuri surastų 
ir išvestų didžiausią ir mažiausią temperatūrą, bei dienas kuriomis buvo 
šios temperatūros.
Failo pavyzdys:
1 2 7 3 4 6 - 1 2 4 - 3 - 3 - 5 1 5 6 7 5 9 2 3 6 7 8 6 3 6 7 5 6 7 1
*/

const fs = require("fs");
let data = fs.readFileSync("temperatura.txt").toString().split(" ");


let mas = [];
data.forEach((d) => {
    mas.push(Number(d));
    console.log(mas);
});

console.log(mas);

let min = [...mas].sort((a, b) => a - b)[0];


let max = [...mas].sort((a, b) => b - a)[0];


console.log('Temperatura max:', max, ' diena:', mas.indexOf(max));

console.log('---------------');
console.log('Temperatura min:', min, ' diena:', mas.indexOf(min));
