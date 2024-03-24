
/*
Panaudodami Frankfurter.app API sukurkite JS programą 
kuri atliktų valiutos kurso keitimą.API aprašas pateikiamas
 čia: https://www.frankfurter.app/docs/ . 
 Iškviečiant Jūsų aplikaciją turime nurodyti į 
 kokią valiutą norime konvertuoti ir kokią sumą 
 (konvertavimas visą laiką bus vykdomas iš EUR į kažką). 
 Jūsų aplikacija turi išvesti valiutos kursą (kiek kainuoja 
    iškeisti vieną EUR į tą valiutą) ir kiek gausime nurodytos 
    valiutos už pateiktą sumą. Pavyzdžiui jei programą 
    iškviestumėme taip:

    node currency.js NOK 150

Programa turėtų išvesti:

NOK kursas: 11.5

150 EUR => 1725 NOK

*/


let naujaV = process.argv[2];
let kiekis = process.argv[3];


async function loadValiuta(naujaV) {


    const tmp = await fetch("https://api.frankfurter.app/latest?from=EUR&to=" + naujaV + "");

    const valiuta = await tmp.json()


    let naujasKiekis = valiuta.rates[naujaV] * kiekis;

    console.log(`${naujaV}: ${valiuta.rates[naujaV]}`);
    console.log(`${kiekis} EUR => ${naujasKiekis} ${naujaV}`);

}

loadValiuta(naujaV);



