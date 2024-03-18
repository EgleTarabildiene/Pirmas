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