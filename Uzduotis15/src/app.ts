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

import { VaikuStovykla } from "./vaikuStovykla";

const vardasInput=<HTMLInputElement>document.getElementById("vardas");
const pavardeInput=<HTMLInputElement>document.getElementById("pavarde");
const yearInput=<HTMLInputElement>document.getElementById("year");
const emailInput=<HTMLInputElement>document.getElementById("email");
const vyrasInput=<HTMLInputElement>document.getElementById("vyras")!;
const moterisInput=<HTMLInputElement>document.getElementById("moteris")!;
const phoneInput=<HTMLInputElement>document.getElementById("phone");
const addRegistrationButton=<HTMLButtonElement>document.getElementById("addRegistration");





addRegistrationButton.onclick=()=>{
    const vArmInput: string = vyrasInput.checked ? 'vyras' : 'moteris';
    const reg:VaikuStovykla={
        vardas:vardasInput.value,
        pavarde:pavardeInput.value,
        gimimoMetai:yearInput.valueAsNumber,
        lytis:vArmInput,
        email:emailInput.value,
        phone:phoneInput.value
    }
    fetch("https://vasaros-stovykla-default-rtdb.europe-west1.firebasedatabase.app/vaikustovykla.json",{
        method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(reg)
    })
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log("Įrašas pridėtas");
        console.log(data);
    })

};

