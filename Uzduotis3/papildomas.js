
/*
Papildomas iššūkis
Garso signalas gali būti koduojamas sveikųjų skaičių seka.
Šie skaičiai rodo signalo stiprumą periodiniais laiko intervalais.
Signalą iškraipantis triukšmas šiek tiek pakeičia tų skaičių reikšmes.
    Signalo „išlyginimo“ metu triukšmas pašalinamas tokiu būdu: 
kiekvienas skaičius keičiamas jo ir dviejų jam gretimų skaičių 
vidurkiu(vidutinės reikšmės sveikąja dalimi).
Pirmas ir paskutinis skaičiai atitinkamai keičiami dviejų 
pirmųjų arba dviejų paskutinių skaičių vidurkiu.
Faile yra garso signalo seka, kuri sudaryta iš k nuoskaitų.
Pirmojoje failo eilutėje yra pateikiami skaičius k.
Toliau surašytos visa seka.Sudarykite programą kuri nufiltruotų 
šias sekas ir išvestų jas į ekraną.
Pradiniai duomenys
4 7 3 5 8

Rezultatai
5.5 4.6 5 5.3 6.5

*/
let a = 4;
let b = 7;
let c = 3
let d = 5;
let e = 8;

aa = (a + b) / 2;
bb = (a + b + c) / 3;
cc = (b + c + d) / 3;
dd = (c + d + e) / 3;
ee = (d + e) / 2;

console.log(aa, bb.toFixed(1), cc, dd.toFixed(1), ee);