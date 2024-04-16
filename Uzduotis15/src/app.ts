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


const loadDataButton=<HTMLButtonElement>document.getElementById("loadData");
const dataTableBody=<HTMLElement>document.getElementById("dataTableBody");

const dataTable=<HTMLElement>document.getElementById("dataTable");
const editForm=<HTMLElement>document.getElementById("editForm");

let registrationData:VaikuStovykla[];

const vArmInput: string = vyrasInput.checked ? 'vyras' : 'moteris';

addRegistrationButton.onclick=()=>{
    
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

const showData=()=>{
    dataTableBody.innerHTML="";
    registrationData.forEach((reg)=>{
        /*
        dataTableBody.innerHTML+=`
        <tr>
            <td>${reg.mark}</td>
            <td>${reg.model}</td>
            <td>${reg.regNumber}</td>
            <td></td>
        </tr>
        `;
        */
        const tr=document.createElement("tr");
        
        const tdVardas=document.createElement("td");
        tdVardas.innerHTML=reg.vardas;
        
        const tdPavarde=document.createElement("td");
        tdPavarde.innerHTML=reg.pavarde;
        
        const tdNo=document.createElement("td");
        tdNo.innerHTML=reg.email;

        const tdV=document.createElement("td");
       
        tr.appendChild(tdVardas);
        tr.appendChild(tdPavarde);
        tr.appendChild(tdNo);
        tr.appendChild(tdV);

        dataTableBody.appendChild(tr);

        tr.onclick=()=>{
            dataTable.style.display="none";
            editForm.style.display="block";
            (<HTMLInputElement>document.getElementById("vardasEdit")).value=reg.vardas;
            (<HTMLInputElement>document.getElementById("pavardeEdit")).value=reg.pavarde;
            (<HTMLInputElement>document.getElementById("emailEdit")).value=reg.email;
            (<HTMLInputElement>document.getElementById("yearEdit")).value=reg.gimimoMetai.toString();
            (<HTMLInputElement>document.getElementById("phoneEdit")).value=reg.phone;
            (<HTMLButtonElement>document.getElementById("updateRegistration")).onclick=()=>{
                const upReg:VaikuStovykla={
                    vardas:(<HTMLInputElement>document.getElementById("vardasEdit")).value,
                    pavarde:(<HTMLInputElement>document.getElementById("pavardeEdit")).value,
                    gimimoMetai:(<HTMLInputElement>document.getElementById("yearEdit")).valueAsNumber,
                    lytis:vArmInput,
                    email:(<HTMLInputElement>document.getElementById("emailEdit")).value,
                    phone:(<HTMLInputElement>document.getElementById("phoneEdit")).value,
                }
                fetch(`https://vasaros-stovykla-default-rtdb.europe-west1.firebasedatabase.app/vaikustovykla/${reg.id}.json`,{
                    method:"PUT",
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(upReg)
                })
                .then((response)=>{
                    return response.json();
                })
                .then((data)=>{
                    console.log("Įrašas atnaujintas");
                    console.log(data);
                    dataTable.style.display="block";
                    editForm.style.display="none";
                    loadData();
                })

            }
        }
        
    })

}

const loadData=()=>{
    fetch("https://vasaros-stovykla-default-rtdb.europe-west1.firebasedatabase.app/vaikustovykla.json",{
        method:"GET",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
    })
    .then((response)=>{
        return response.json();
    })
    .then((data: {[key:string]:VaikuStovykla})=>{
        // Object.keys(data) - gražina objekto raktų masyvą

        //Masyvas su duomenimis
        registrationData=[];

        //Sukame ciklą per visus objekto raktus
        Object.keys(data).forEach((k)=>{
            //Kiekvieną registraciją įkeliame į registrationData masyvą
           // data[k].id=k; id -priskirimas
           // {id:k , ... data[k]}  - paimame visus atributus iš objekto data[k] ir pridedame atributą id kurio reikšmė k
            registrationData.push({id:k,...data[k]});
        })

        showData();
        console.log(registrationData);
    });
}

loadDataButton.onclick=loadData;