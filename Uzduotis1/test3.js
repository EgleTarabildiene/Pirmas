// Elektroninis laikrodis rodo laiką: valandas, minutes
// ir sekundes(įvedami skaičiai h, m, s).
// Kiek laiko laikrodis rodys po sekundės ? (Išveskite h, m, ir s).
//  Visi skaičiai įvedami kaip parametrai(h, m, s).




function laikas(h, m, s) {
    //let hour = 0;
    //let min = 0;
    //let seconds = 0;
    if (h >= 23 && m >= 59 && s >= 59) {
        return '0:0:0';
    };
    if (m >= 59 && s >= 59) {
        return `${h + 1}:0:0`;
    };
    if (s >= 59 && s <= 59) {
        return `${h}:${m + 1}:0`;
    };

    return `${h}:${m}:${s + 1}`;
}


console.log(laikas(23, 58, 58));
console.log(laikas(23, 59, 59));
console.log(laikas(0, 0, 0));
console.log(laikas(10, 59, 59));
console.log(laikas(12, 0, 59));