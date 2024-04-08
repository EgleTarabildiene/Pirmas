/*

Sukurkite aplikaciją kuri galėtų parodyti informaciją apie šalis.
Darbui jums reikės šalių API kuris yra čia: 
https://restcountries.com/v3.1/all

Jūsų aplikacijoje turėtų būti galimybė įvesti norimos šalies pavadinimą 
ir aplikacija turėtų išvesti:
1. Šalies pavadinimą,
2. Populiaciją
3. Šalies plotą
4. Valiutą
5. Kalbą
6. Vėliavą
7. Herbą


Papildomas iššūkis
Prie šalies taip pat atvaizduokite ir jos kaimynes(jei tokios yra).Kaimynės turėtų būti atvaizduojamos taip:
Šalies pavadinimas(populiacija)
Šalies pavadinimas(populiacija)

*/

const countryInput = document.getElementById("countryInput");
const searchButton = document.getElementById("searchButton");
const resultContainer = document.getElementById("resultContainer");
const resultInfo = document.getElementById("resultInfo");
const klaidosInfo = document.getElementById("klaidosInfo");



fetch('https://restcountries.com/v3.1/all')
    .then(response => {

        return response.json();
    })
    .then(data => {
        console.log(data);
        data.forEach(country => {
            const option = document.createElement("option");
            option.textContent = country.name.common;
            option.value = country.name.common;
            countryInput.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Klaida gaudant šalių duomenis:', error);
        klaidosInfo.textContent = "Nepavyko gauti šalių duomenų. Patikrinkite interneto ryšį arba bandykite vėliau.";
    });




const gautaSalis = () => {
    const countryName = countryInput.value;

    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Šalis nerasta! Patikrinkite įvestį.");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);

            const country = data[0];
            if (country.succsess !== undefined) {
                let e = new Error("Zanras nerastas");
                e.name = "nerasta"
                // komanda throw kaip ir return nutraukia vygdyma
                throw e;
            }
            resultInfo.innerHTML = `
                <p>Šalies pavadinimas: ${country.name.common}</p>
                <p>Populiacija: ${country.population}</p>
                <p>Plotas: ${country.area} km²</p>
                <p>Valiuta: ${Object.keys(country.currencies)[0]}</p>
                <p>Kalba: ${Object.keys(country.languages)[0]}</p>
                <img src="${country.flags.png}" alt="Šalies vėliava">`;
            resultContainer.style.display = "block";

        })
        .catch((e) => {
            klaidosInfo.textContent = e.message;
            resultContainer.style.display = "block";
        })
};

searchButton.onclick = gautaSalis;