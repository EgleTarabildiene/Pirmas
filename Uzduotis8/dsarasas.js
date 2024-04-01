//Papildoma užduotys savarankiškam darbui

//1. Užduotis
//Sukurkite aplikaciją kuri būtų skirta darbuotojų sąrašui išsaugoti.
//Kiekvieno darbuotojo įrašą turi sudaryti tokie duomenys:
//vardas, pavardė atlyginimas.

//Padarykite aplikaciją kurioje galėtumėme įvesti vardą, 
//pavardę ir atlyginimą.Pridėjus įrašą jis turėtų būti atvaizduojamas 
//sąraše dešinėje.Padarykite galimybę ištrinti vieną įrašą ir visus
// įrašus vienu metu.Išsaugokite duomenis į localstorage ir atvaizduokite 
//tinklapyje.

//    Papildomai
//Suskaičiuokite visų atlyginimų sumą ir vidurkį ir išveskite žemiau, 
//po sąrašu. 






//Pasiimam elementus iš HTML
const nameInp = document.getElementById("name");
const surnameInp = document.getElementById("surname");
const algaInp = document.getElementById("alga");
const sumaInp = document.getElementById("suma");
const vidurkisInp = document.getElementById("vidurkis");
const addBtn = document.getElementById("add");
const resultList = document.getElementById("result");
const clearBtn = document.getElementById("clear");

let people = [];
let suma = 0;
const saveProducts = () => {
    localStorage.setItem("people", JSON.stringify(people));
}

const loadProducts = () => {
    const lsProducts = localStorage.getItem("people");
    if (lsProducts != null) {
        people = JSON.parse(lsProducts);
        showProducts();
    }
}

const showProducts = () => {
    resultList.innerHTML = "";
    people.forEach((p, i) => {
        const productLi = document.createElement("li");
        productLi.className = "list-group-item";
        productLi.textContent = `${p.name} ${p.surname} ${Number(p.alga)}`;
        resultList.appendChild(productLi);
        suma += Number(p.alga);
        sumaInp.textContent = ` Iš viso skirta darbuotoju atlyginimams: ${Number(suma)} EUR `;
        vidurkisInp.textContent = `Darbuotoju atlyginimo vidurkis: ${Number(suma) / people.length} EUR`;

        //sukuriam HTML button elementa
        const deleteBtn = document.createElement("button")

        //priskiriam atributa textConent
        deleteBtn.textContent = "Ištrinti";

        //stilizuojame migtuka
        deleteBtn.className = "btn btn-info float-end btn-sm";

        deleteBtn.onclick = () => {
            people.splice(i, 1);
            saveProducts();
            showProducts();
        };


        //migtuka priskiriame li (productLI) elementui
        productLi.appendChild(deleteBtn);

    });
}

const addProduct = () => {
    //Paimame reiksmes is laukeliu
    const name = nameInp.value;
    const surname = surnameInp.value;
    const alga = Number(algaInp.value);
    nameInp.value = "";
    surnameInp.value = "";
    algaInp.value = "";
    people.push({
        name: name,
        surname: surname,
        alga: alga,
    });
    showProducts();
    saveProducts();
}

const clear = () => {
    people = [];
    saveProducts();
    showProducts();
}

addBtn.onclick = addProduct;
clearBtn.onclick = clear;

loadProducts();