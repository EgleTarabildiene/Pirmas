// Faile pateikti skaičiai(sveikieji, iš intervalo nuo 0 iki 9), 
//parašykite JS programą kuri suskaičiuotų kiek ir kokių skaičių 
//yra tekstiniame faile.


const fs = require("fs");
let data = fs.readFileSync("intervalas.txt").toString().split(" ");

let arr = [];
data.forEach((d) => {
    arr.push(Number(d));
});
console.log(arr);


function skaiciuKiekis(data) {
    let arr2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < data.length; i++) {
        arr2[data[i]]++;

    }
    return `0 => ${arr2[0]},
            1 => ${arr2[1]},
            2 => ${arr2[2]},
            3 => ${arr2[3]},
            4 => ${arr2[4]},
            5 => ${arr2[5]},
            6 => ${arr2[6]},
            7 => ${arr2[7]},
            8 => ${arr2[8]},
            9 => ${arr2[9]},`;
}

console.log(skaiciuKiekis(data));





