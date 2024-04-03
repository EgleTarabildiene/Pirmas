

/*
Sukurkite skaičiuoklę kuri būtų skirta suskaičiuoti prekės pabrangimą arba atpigimą tam tikru procentu.Jūsų skaičiuoklėje turėtų būti įvedami tokie duomenys:
1. pradinė kaina(įvedimo laukas)
2. kainos pokytis(pasirinkimo laukas: brangsta, pinga)
3. procentai

Jūsų sukurtas puslapis turėtų pateikti apskaičiuotą kainą pritaikius kainos pokytį procentais.

Keletas reikalavimų Jūsų puslapiui:
1. Prieš įvedant duomenis visi laukeliai turi būti bespalviai
2. Įvedant duomenis turi tikrinti ar įvesti duomenys teisingi, įvedus neteisingus duomenis tas laukelis turėtų nusidažyti raudonai įvedus duomenis teisingai - laukelis turėtų nusidažyti žaliai
3. Jei duomenys yra neįvesti arba įvesti neteisingai skaičiavimo mygtukas turi būti išjungtas
4. Procentų skaičius turi būti įvedamas ne didesnis nei 100 ir ne mažesnis už 0
5. Turi būti išvedami pranešimai(tekstiniai apie klaidas)
*/



const skaiciuotiBtn = document.querySelector("#skaiciuoti");

//Priskiriame isvedimo lauka
const kainaInp = document.querySelector("#kaina");
const kaina2Inp = document.querySelector("#kaina2");

//Priskiriame isvedimo div
const rezultatasDiv = document.querySelector("#rez");

const pvmSelect = document.querySelector("#pvm");
const error = document.querySelector("#error");
const error2 = document.querySelector("#error2");





skaiciuotiBtn.disabled = true;
error.style.visibility = "hidden";
error2.style.visibility = "hidden";

let rezultatas = 0;
skaiciuoti = () => {

    if (kaina2Inp.value <= 0) {
        error2.style.visibility = "visible";
        error2.innerHTML = "Iveskite skaiciu nuo 1 iki 100";
        kaina2Inp.className = "form-control is-invalid";
    } if (kaina2Inp.value > 100) {
        error2.style.visibility = "visible";
        error2.innerHTML = "Iveskite skaiciu nuo 1 iki 100";
        kaina2Inp.className = "form-control is-invalid";
    }


    rezultatas = kainaInp.value * (kaina2Inp.value / 100);
    if (pvmSelect.value == "up") {
        rezultatasDiv.innerHTML = `${Number(kainaInp.value) + rezultatas}`;
    } else {
        rezultatasDiv.innerHTML = kainaInp.value - rezultatas;
    }


    kainaInp.value = '';
    kaina2Inp.value = '';
    skaiciuotiBtn.disabled = true;
}

ijungtiMygtuka = () => {



    if (kainaInp.value == '' || isNaN(kainaInp.value) || isNaN(kaina2Inp.value) || kaina2Inp.value == '') {
        skaiciuotiBtn.disabled = true;
        error.innerHTML = "Iveskite skaiciu";
        error.style.visibility = "visible";
        kainaInp.className = "form-control is-invalid";
        error2.style.visibility = "visible";
        error2.innerHTML = "Iveskite skaiciu";
        kaina2Inp.className = "form-control is-invalid";

    } else {
        skaiciuotiBtn.disabled = false;
        error.innerHTML = "";

        error2.innerHTML = "";
        error.style.visibility = "hidden";
        error2.style.visibility = "hidden";
        kainaInp.className = "form-control is-valid";
        kaina2Inp.className = "form-control is-valid";
    }
}










skaiciuotiBtn.onclick = skaiciuoti;


kainaInp.onkeyup = ijungtiMygtuka;
kaina2Inp.onkeyup = ijungtiMygtuka;

