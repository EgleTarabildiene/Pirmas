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
const vardasInput = document.getElementById("vardas");
const pavardeInput = document.getElementById("pavarde");
const yearInput = document.getElementById("year");
const emailInput = document.getElementById("email");
const vyrasInput = document.getElementById("vyras");
const moterisInput = document.getElementById("moteris");
const phoneInput = document.getElementById("phone");
const addRegistrationButton = document.getElementById("addRegistration");
addRegistrationButton.onclick = () => {
    const vArmInput = vyrasInput.checked ? 'vyras' : 'moteris';
    const reg = {
        vardas: vardasInput.value,
        pavarde: pavardeInput.value,
        gimimoMetai: yearInput.valueAsNumber,
        lytis: vArmInput,
        email: emailInput.value,
        phone: phoneInput.value
    };
    fetch("https://vasaros-stovykla-default-rtdb.europe-west1.firebasedatabase.app/vaikustovykla.json", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reg)
    })
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        console.log("Įrašas pridėtas");
        console.log(data);
    });
};
export {};
