/*
Jūs kursite sistemą skirtą užregistruoti vaikus į vasaros gamtininkų stovyklą. Pirmiausia susikurkite formą duomenims įvesti, o paspaudus registruotis duomenys būtų įterpiami į firebase duomenų bazę.

Formoje turi būti įvedami šie duomenys:
Vaiko vardas,
Vaiko pavardė,
Vaiko gimimo metai (įvedami tik metai),
Vaiko lytis (radio button: vyras ir moteris),
El. paštas,
Telefonas

*/
import { loadUser, loginExec, registerExec, showLogin } from "./auth.js";
import { fetchRegistrations } from "./fetchData.js";
import { loadData } from "./loadData.js";
const vardasInput = document.getElementById("vardas");
const pavardeInput = document.getElementById("pavarde");
const yearInput = document.getElementById("year");
const emailInput = document.getElementById("email");
const vyrasInput = document.getElementById("vyras");
const moterisInput = document.getElementById("moteris");
const phoneInput = document.getElementById("phone");
const addRegistrationButton = document.getElementById("addRegistration");
const loadDataButton = document.getElementById("loadData");
export const registrationData = [];
addRegistrationButton.onclick = () => {
    const gender = document.querySelector('input[name="gender"]:checked');
    let reg;
    if (gender != null) {
        reg = {
            vardas: vardasInput.value,
            pavarde: pavardeInput.value,
            gimimoMetai: yearInput.valueAsNumber,
            gender: gender.value,
            email: emailInput.value,
            phone: phoneInput.value
        };
    }
    else {
        reg = {
            vardas: vardasInput.value,
            pavarde: pavardeInput.value,
            gimimoMetai: yearInput.valueAsNumber,
            email: emailInput.value,
            phone: phoneInput.value
        };
    }
    fetchRegistrations('vaikustovykla', 'POST', reg)
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        console.log("Įrašas pridėtas");
        console.log(data);
    });
};
export const userInfo = {
    email: "",
    idToken: "",
    loggedin: false,
};
//paslepiame duomenu sekcija
showLogin();
document.getElementById("loginError").style.display = "none";
loadUser();
loadDataButton.onclick = loadData;
document.getElementById("login").onclick = loginExec;
document.getElementById("register").onclick = registerExec;
