//4. Skaičius, sudarytas iš trijų skaitmenų, vadinamas Armstrongo skaičiumi,
// jei jo skaitmenų, pakeltų 3 - uoju laipsniu, suma lygi pačiam skaičiui.
// Raskite visus Amstrongo skaičius esančius intervale nuo 100 iki 999. 



function isArmstrong(number1, number2) {
    for (let i = number1; i <= number2; i++) {
        let sum = 0;
        let temp = i;
        while (temp > 0) {

            let lastdigit = temp % 10;

            sum += Math.pow(lastdigit, 3);
            temp = Math.floor(temp / 10);
        }

        if (sum === i) {
            console.log(
                i + " ------------------is an Armstrong Number!!");
        } else {
            console.log
                (i + " is not an Armstrong Number");
        }
    }
}
console.log(isArmstrong(100, 999));



function isArmstrong(number1, number2) {
    for (let i = number1; i <= number2; i++) {
        let sum = 0;
        let temp = i;
        while (temp > 0) {

            let lastdigit = temp % 10;

            sum += Math.pow(lastdigit, 3);
            temp = Math.floor(temp / 10);
        }

        if (sum === i) {
            console.log(
                i + " ------------------is an Armstrong Number!!");
        } else {
            console.log
                (i + " is not an Armstrong Number");
        }
    }
}
console.log(isArmstrong(100, 999));


let pradzia = 100;
let pabaiga = 999;

for (let i = pradzia; i <= pabaiga; i++) {
    let pirmas = (i - (i % 100) / 100);
    let antras = ((i % 100) - (i % 10)) / 10;
    let trecias = i % 10;
    if (pirmas ** 3 + antras ** 3 + trecias ** 3 === i) {
        console.log(i);
    }
}


let pradzia2 = 100;
let pabaiga2 = 999;

for (let ii = pradzia2; ii <= pabaiga2; ii++) {
    let pirmas2 = Math.floor(ii / 100); //bus1
    let antras2 = Math.floor(ii % 100 / 10);         //bus 5
    let trecias2 = ii % 10;   // bus6
    if (pirmas2 ** 3 + antras2 ** 3 + trecias2 ** 3 === ii) {
        console.log(ii);
    }
}