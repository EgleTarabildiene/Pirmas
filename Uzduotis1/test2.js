/*
2. Pirmosios vasaros olimpinės žaidynės įvyko 1896 m.Atėnuose.
Po to jos vyko arba turėjo vykti kas ketveri metai, 
t.y. 1900 m. – antrosios, 1904 m. – trečiosios ir t.t.
Neįvykusioms žaidynėms skiriamas eilės numeris,
o jų metai vis tiek laikomi olimpiniais.
Žinomi metai M.Nustatykite olimpinių žaidimų numerį, 
jei metai yra olimpiniai arba pasakykite,
 kad metai ne olimpiniai.Programa turi paprašyti įvesti metus,
  ir išvesti ar tai buvo olimpiniai metai ar ne, 
  jei tai buvo olimpiniai metai programa turi taip pat išvesti 
  ir numerį.
  */

function zaidines(metai) {
    let result = 0;

    result = metai - 1896;
    result /= 4;

    if (result % 1 !== 0) {
        return `Tai buvo ne olimpiniai metai.`
    }
    return `Tai buvo ${result + 1} olimpiniai metai`;
}

console.log(zaidines(1900));
console.log(zaidines(1925));
console.log(zaidines(1926));
console.log(zaidines(1927));
console.log(zaidines(1928));



function zaidines2(year) {
    if (year >= 1896 && year % 4 === 0) {
        return (year - 1896) / 4 + 1 + ' ' + "olimpiniai metai";
    } else {
        return 'Tai buvo ne olimpiniai metai.'
    }
}

console.log(zaidines2(1900));
console.log(zaidines2(1901));