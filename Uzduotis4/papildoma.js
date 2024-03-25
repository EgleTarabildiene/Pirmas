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




async function loadValiuta(duotaV, kiekis) {


    const tmp = await fetch("https://api.frankfurter.app/latest");

    const valiuta = await tmp.json()
    const visosVal = valiuta.rates;

    //console.log(valiuta);
    if (visosVal[duotaV]) {
        console.log(`${duotaV}: ${valiuta.rates[duotaV]}`);
        console.log(`${kiekis} EUR => ${visosVal[duotaV] * kiekis} ${duotaV}`);
    } else {
        console.log(`Valiuta: ${duotaV} neagzistuoja.`);
        console.log(`Galite rinktis vieną iš šių valiutų: ${Object.keys(visosVal)}. `);

    }
}

loadValiuta(process.argv[2], process.argv[3]);




