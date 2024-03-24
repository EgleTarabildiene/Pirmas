/*

Faile studentai.json pateikiamas JSON formatu studentų sąrašas(masyvas), jų duomenys ir pažymiai.Nuskaitykite duomenis iš masyvo, suskaičiuokite ir išveskite:

1. Studentų kiekį

2. Studentų amžiaus vidurkį

3. Studentų pažangumo vidurkį(visų pažymių vidurkį)

4. Išveskite studentų sąrašą ir kiekvieno studento vidurkį, pvz.:

Jonas Jonaitis 5.5

Petras Petraitis 9.3

...
*/

const { log } = require("console");
const fs = require("fs");
const { SourceMap } = require("module");
let str = fs.readFileSync("studentai.json").toString();


const students = JSON.parse(str);
//console.log(students);


//1. Studentų kiekį
const sKiekis = students.length;
console.log('Studentu kiekis:', sKiekis);



//2. Studentų amžiaus vidurkį
let visu = 0;

for (const student of students) {
    visu += student.amzius;

}
let visuAmziausVidurkis = visu / sKiekis;
console.log('Studentu amziaus vidurkis:', visuAmziausVidurkis, 'metu');



//4. Išveskite studentų sąrašą ir kiekvieno studento vidurkį, pvz.:

for (const student of students) {
    student.pazymiuKiekis = student.pazymiai.length;

}

for (const student of students) {
    let sum = 0;
    for (const pazymis of student.pazymiai) {
        sum += pazymis;
    }
    student.pVidurkis = sum / student.pazymiai.length;
    console.log(student.vardas, 'pazymio vidurkis:', student.pVidurkis.toFixed(2));
}



//3. Studentų pažangumo vidurkį(visų pažymių vidurkį)
let vid = 0;
for (const student of students) {

    vid += student.pVidurkis
}
let visuPazymiuVidurkis = 0;
visuPazymiuVidurkis = vid / sKiekis;

console.log('Studentų pažangumo vidurkis:', visuPazymiuVidurkis.toFixed(2));