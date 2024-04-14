/*
Panaudodami TypeScript ir API https://nationalize.io/documentation
sukurkite puslapy kuris išvestų informaciją  pateiktą vardą.
 Reikalavimai projektui:

Turi būti vienas įvedimo laukas(vardui pateikti)

Turi būti mygtukas "Gauti informaciją) kurį paspaudus būtų pateikta
informacija apie vardą

Visas puslapis turi būti padarytas panaudojant modulius

*/
const htmlResult = document.getElementById("result");
const nameInp = document.getElementById("name");
const suzinotiBtn = document.getElementById("suzinoti");
console.log("Pasileido");
suzinotiBtn.onclick = () => {
    fetch(`https://api.nationalize.io/?name=${nameInp.value}`)
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        let str = "";
        console.log(data);
        data.country.forEach((country) => {
            str += `Šalies id: ${country.country_id}. Vardo kilmė šalyje: ${country.probability} <br>`;
        });
        htmlResult.innerHTML = str;
        nameInp.innerHTML = "";
    });
};
export {};
