/*
1. Sukurkite klasę Darbuotojas, kurioje būtų saugomas jo vardas, 
pavardė, atlyginimas.
2. Sukurkite konstruktorių, get'erius ir set'erius.
3. Klasėje sukurkite tris metodus:
gpm - grąžina gyventojo pajamų mokestį (paprastumo dėlei 
    imkime 20% nuo pajamų)
psd - grąžina privalomąjį sveikatos draudimą (6,98%)
vsd - grąžina valstybinį socialinį draudimą (12.52%)
4. Klasė turi būti atskirame faile nei vykdomasis programinis kodas. 
Sukurkite masyvą, kuriame patalpintumėte bent tris Darbuotojas klasės
objektus ir atspausdinkite visus sukurtus žmones.
5. Padarykite tinklapį kuriame būtų atvaizduojami darbuotojai 
ir jų atlyginimai (gpm, psd, vsd).
6. Padarykite tinklapyje galimybę į tą masyvą įdėti darbuotojus. 
Juos turėtų rodyti bendrame sąraše. 

Papildomas iššūkis:
Padarykite galimybę ištrinti darbuotojus iš masyvo

*/







const vardasInput=<HTMLInputElement>document.getElementById("vardas");
const pavardeInput=<HTMLInputElement>document.getElementById("pavarde");
const atlyginimasInput=<HTMLInputElement>document.getElementById("atliginimas");

const skaiciuotiBtn=document.getElementById("skaiciuoti")!;
const rezultatasDiv=document.getElementById("rezultatas")!;



class Darbuotojas {
  constructor (private _vardas:string, private _pavarde:string, private _atlyginimas:number ){

  }

  

    public set vardas(vardas: string) {
        this._vardas = vardas;
    }
    public set pavarde(pavarde: string) {
        this._pavarde = pavarde;
    }

    public set atlyginimas(atlyginimas: number) {
        this._atlyginimas = atlyginimas;
    }

 public get vardas(): string {
        return this._vardas;
    }

    public get pavarde(): string {
        return this._pavarde;
    }

   

    public get atlyginimas(): number {
        return this._atlyginimas;
    }

   
    public gpm(): number {
        return this._atlyginimas * 0.20;
    }

    public psd(): number {
        return this._atlyginimas * 6.98 / 100;
    }

    public vsd(): number {
        return this._atlyginimas * 12.52 / 100;
    }
}

const darbuotojai: Darbuotojas[] = [];

skaiciuotiBtn.onclick = () => {
    const vardas = vardasInput.value;
    const pavarde = pavardeInput.value;
    const atlyginimas = parseFloat(atlyginimasInput.value);

    const naujasDarbuotojas = new Darbuotojas(vardas, pavarde, atlyginimas);
    darbuotojai.push(naujasDarbuotojas);

    rezultatasDiv.innerHTML = '';
    darbuotojai.forEach((darbuotojas) => {
        const div = document.createElement('div');
        div.innerHTML = `${darbuotojas.vardas} ${darbuotojas.pavarde} - Atlyginimas: ${darbuotojas.atlyginimas} EUR, GPM: ${darbuotojas.gpm()} EUR, PSD: ${darbuotojas.psd()} EUR, VSD: ${darbuotojas.vsd()} EUR`;
        rezultatasDiv.appendChild(div);
       
    });
    vardasInput.value = '';
    pavardeInput.value = '';
    atlyginimasInput.value = '';
     
}
