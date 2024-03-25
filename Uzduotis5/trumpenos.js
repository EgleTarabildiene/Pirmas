//1. Sukurkime klasę Trupmena, ją turėtų sudaryti trys atributai:
// sveikojiDalis, skaitiklis, daliklis

//2.Sukurkime klasei setter‘ius ir getter‘ius



class Trupmena {
    //Privatus kintamasis
    #sDalis = 0;
    #skaitik = 0;
    #dalik = 0;
    //Konstruktorius
    constructor(sDalis, skaitik, dalik) {
        this.#sDalis = sDalis;
        this.#skaitik = skaitik;
        this.#dalik = dalik;
    }
    //geteriai ir seteriai
    set sDalis(sDalis) {
        this.#sDalis = sDalis;
    }
    get sDalis() {
        return this.#sDalis;
    }
    set skaitik(skaitik) {
        this.#skaitik = skaitik;
    }
    get skaitik() {
        return this.#skaitik;
    }
    set dalik(dalik) {
        this.#dalik = dalik;
    }
    get dalik() {
        return this.#dalik;
    }

    //3.Klasei Trupmena sukurkime metodą toString kuris gražintų trupmeną 
    //tokiu formatu: sveikojiDalis skaitiklis / daliklis(pvz.: 1 2/5)

    toString() {
        return `${this.#sDalis} ${this.#skaitik}/${this.#dalik}`;
    }


    //4. Ištestuokime programinį kodą sukurdami objektą,
    //suteikime kintamiesiems reikšmes ir išveskime rezultatą.

    isvesti() {
        return `Sveikoji dalis: ${this.#sDalis}, skaitiklis: ${this.#skaitik} daliklis: ${this.#dalik}`;
    }


    //5.Sukurkime metodą: pridetiInt(sveikasisSkaicius) kuris 
    //pridėtų sveikąjį skaičių prie trupmenos, 
    //ištestuokime pakoreguotą kodą.

    pridetiInt(dx) {
        return `${this.#sDalis + dx} ${this.#skaitik}/${this.#dalik}`
    }


    //6. Sukurkite dar vieną papildomą metodą:
    //prideti(sveikasisSkaicius, skaitiklis, vardiklis).
    //Nepamirškite jog pridedant skaičių reikia subendravardiklinti).

    prideti(e, f, g) {
        return ((this.sDalis + e) + ' ' + (this.skaitik * g + this.dalik * f) + '/' + (this.dalik * g));
    }


    //7.Sukurkime metodą pridetiTrupmena(x), šis metodas turės
    //prie esamos trupmenos pridėti paduotą trupmeną.
    //Nepamirškite jog taip pat po šio veiksmo reikės suprastinti trupmeną.
    pridetiTrupmena(x) {
        return ((this.sDalis + x.sDalis) + ' ' + (this.skaitik * x.dalik + this.dalik * x.skaitik) + '/' + (this.dalik * x.dalik));
    }


    //8.Sukurkime metodą toDouble() kuris grąžintų esamą trupmenos
    //reikšmę realiuoju skaičiumi(per kablelį).
    toDouble() {
        return (this.#sDalis) + (this.#skaitik / this.#dalik);
    }

    prastinti() {
        for (let i = 1; i < 10; i++) {
            console.log(i);
            if (this.skaitik % i === 0 && this.dalik % i === 0) {
                let skaicius = i;
                this.skaitik = this.skaitik / skaicius;
                this.dalik = this.dalik / skaicius;
            }
        }
        return `${this.sDalis} ${this.skaitik}/${this.dalik}`;
    }

}


const a = new Trupmena(1, 2, 5);

const b = new Trupmena(1, 4, 5);


console.log(a.toString());
console.log(b.toString());

console.log(a.isvesti());

console.log(a.pridetiInt(6));
console.log(b.toDouble());

const c = new Trupmena(2, 1, 5);
const d = new Trupmena(1, 2, 5);
const y = new Trupmena(2, 15, 25);


console.log(`Sudetis su c ir d: ${c.pridetiTrupmena(d)}`);
console.log(`Sudetis su a ir skaiciais: ${a.prideti(1, 2, 5)}`);

console.log(y.prastinti());


/*
Papildomai padarykite:
Sukurkime metodą prastinti(), jis turėtų suprastinti trupmeną.Metodą padarykime matomą tik pačiam objektui(jis turi būti nepasiekiamas iš išorės).
Padarykime jog po kiekvieno seterio ir po pridėjimo metodų 
įvykdymo būtų iškviečiamas prastinimo metodas
*/
