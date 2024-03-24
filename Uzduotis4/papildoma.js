/*
Papildomas iššūkis
Prieš konvertavimą patikrinkite ar teisingai yra nurodytas valiutos pavadinimas
Pavyzdžiui iškvietus programą taip:
node currency.js GBG 100

Programa turėtų išvesti:
Valiuta GBG neegzistuoja

Galite Rinktis vieną iš šių valiutų:
AUD, BGN, BRL, CAD, CHF, CNY, CZK, DKK, EUR, GBP, HKD, ....

Valiutų sąrašą galite gauti čia:
https://api.frankfurter.app/currencies

*/




async function loadValiuta() {


    const tmp = await fetch("https://api.frankfurter.app/currencies");
    const valiuta = await tmp.json()


    let duotas = "process.argv[2]";


    let count2 = [];
    for (let key in valiuta) {
        console.log(key);
        if (key === duotas) {
            console.log('Teisingai', duotas);
        } else {
            count2.push(key);

            console.log(`Galite rinktis vieną iš šių valiutų: ${count2} `);

        }
    }
}
loadValiuta()















