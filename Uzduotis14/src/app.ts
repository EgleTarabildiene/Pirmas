
/*
Panaudodami TypeScript ir API https://nationalize.io/documentation 
sukurkite puslapy kuris išvestų informaciją  pateiktą vardą.
 Reikalavimai projektui:

Turi būti vienas įvedimo laukas(vardui pateikti)

Turi būti mygtukas "Gauti informaciją) kurį paspaudus būtų pateikta 
informacija apie vardą

Visas puslapis turi būti padarytas panaudojant modulius

*/









import { Vardai} from "./vardai.js";
const htmlResult=document.getElementById("result")!;
const nameInp=<HTMLInputElement> document.getElementById("name")!;
const suzinotiBtn=document.getElementById("suzinoti")!;

console.log("Pasileido");

suzinotiBtn.onclick=()=>{



        fetch(`https://api.nationalize.io/?name=${nameInp.value}`)
        .then((response)=>{
            return response.json();
           
            
        })
        .then( (data:Vardai)=>{
           let str ="";
           console.log(data);
           
             data.country.forEach((c) => {
            str+=`Šalies id: ${c.country_id}. Vardo kilmė šalyje: ${c.probability} <br>`;
        });
        htmlResult.innerHTML=str;
        nameInp.innerHTML="";
    });

   
};




    