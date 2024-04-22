
import { fetchRegistrations } from "./fetchData.js";
import { loadData } from "./loadData.js";
import { VaikuStovykla } from "./vaikuStovykla.js";



export const showData=(registrationData:VaikuStovykla[])=>{
    let dataTableBody=<HTMLElement>document.getElementById("dataTableBody");
    dataTableBody.innerHTML="";
    registrationData.forEach((reg)=>{
    
        const tr=document.createElement("tr");
        
        const tdVardas=document.createElement("td");
        tdVardas.innerHTML=reg.vardas;
        
        const tdPavarde=document.createElement("td");
        tdPavarde.innerHTML=reg.pavarde;
        
        const tdNo=document.createElement("td");
        tdNo.innerHTML=reg.email;

      
       
        tr.appendChild(tdVardas);
        tr.appendChild(tdPavarde);
        tr.appendChild(tdNo);
      

        dataTableBody.appendChild(tr);

        tr.onclick=()=>{
            (<HTMLElement>document.getElementById("dataTable")).style.display="none";
            (<HTMLElement>document.getElementById("editForm")).style.display="block";
            (<HTMLInputElement>document.getElementById("vardasEdit")).value=reg.vardas;
            (<HTMLInputElement>document.getElementById("pavardeEdit")).value=reg.pavarde;
            (<HTMLInputElement>document.getElementById("emailEdit")).value=reg.email;
            (<HTMLInputElement>document.getElementById("yearEdit")).value=reg.gimimoMetai.toString();
            (<HTMLInputElement>document.getElementById("phoneEdit")).value=reg.phone;

        if (reg.gender === 'Vyras') {
             (<HTMLInputElement>document.getElementById('vyrasEdit')).checked=true;
             (<HTMLInputElement>document.getElementById('vyrasEdit')).checked=false;
            }  else {
          (<HTMLInputElement>document.getElementById('moterisEdit')).checked=true;
          (<HTMLInputElement>document.getElementById('moterisEdit')).checked=false;
            }

            (<HTMLButtonElement>document.getElementById("updateRegistration")).onclick=()=>{
                const upReg:VaikuStovykla={
                    vardas:(<HTMLInputElement>document.getElementById("vardasEdit")).value,
                    pavarde:(<HTMLInputElement>document.getElementById("pavardeEdit")).value,
                    gimimoMetai:(<HTMLInputElement>document.getElementById("yearEdit")).valueAsNumber,
                    gender: (<HTMLInputElement>document.querySelector('input[name="genderEdit"]:checked')).value,
                    email:(<HTMLInputElement>document.getElementById("emailEdit")).value,
                    phone:(<HTMLInputElement>document.getElementById("phoneEdit")).value,
                }
        
                fetchRegistrations(`vaikustovykla/${reg.id}`, "PUT", upReg)
                .then((response)=>{
                    return response.json();
                })
                .then((data)=>{
                    (<HTMLElement>document.getElementById("dataTable")).style.display="block";
                    (<HTMLElement>document.getElementById("editForm")).style.display="none";
                    loadData();
                })
 
            }
  (<HTMLButtonElement>document.getElementById("deleteRegistration")).onclick=()=>{

                fetchRegistrations(`vaikustovykla/${reg.id}`, "DELETE", null)
                .then((response)=>{
                    return response.json();
                })
                .then((data)=>{
                    (<HTMLElement>document.getElementById("dataTable")).style.display="block";
                    (<HTMLElement>document.getElementById("editForm")).style.display="none";
                    loadData();
                });
            };

        }
        
    })

}