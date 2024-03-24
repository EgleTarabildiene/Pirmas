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


    let duotaV = process.argv[2];

    raktas = '';
    for (let key in valiuta) {
        raktas = key;
        if (raktas === duotaV) {
            console.log(`Teisinga valiuta: ${duotaV}------------`);
        } else {
            console.log(`Galite rinktis vieną iš šių valiutų: ${raktas} `);

        }
    }
}
loadValiuta()




