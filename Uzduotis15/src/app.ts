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

import { fetchRegistrations } from "./fetchData.js";
import { VaikuStovykla } from "./vaikuStovykla.js";
import { showData} from "./showData.js";
import { loadData} from "./loadData.js";

const vardasInput=<HTMLInputElement>document.getElementById("vardas");
const pavardeInput=<HTMLInputElement>document.getElementById("pavarde");
const yearInput=<HTMLInputElement>document.getElementById("year");
const emailInput=<HTMLInputElement>document.getElementById("email");
const vyrasInput=<HTMLInputElement>document.getElementById("vyras")!;
const moterisInput=<HTMLInputElement>document.getElementById("moteris")!;
const phoneInput=<HTMLInputElement>document.getElementById("phone");
const addRegistrationButton=<HTMLButtonElement>document.getElementById("addRegistration");


const loadDataButton=<HTMLButtonElement>document.getElementById("loadData");


export const registrationData:VaikuStovykla[]=[];




addRegistrationButton.onclick=()=>{
    const gender = <HTMLInputElement | null>document.querySelector('input[name="gender"]:checked');
    let reg:VaikuStovykla;
    if (gender!=null){
    reg={
        vardas:vardasInput.value,
        pavarde:pavardeInput.value,
        gimimoMetai:yearInput.valueAsNumber,
        gender:gender.value,
        email:emailInput.value,
        phone:phoneInput.value
    }
    } else {
        reg={
          vardas:vardasInput.value,
        pavarde:pavardeInput.value,
        gimimoMetai:yearInput.valueAsNumber, 
        email:emailInput.value,
        phone:phoneInput.value  
        }
    }


 
    fetchRegistrations('vaikustovykla','POST', reg)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log("Įrašas pridėtas");
        console.log(data);
    })

};





loadDataButton.onclick=loadData;

loadData();