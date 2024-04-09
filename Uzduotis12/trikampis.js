"use strict";
/*
Panaudodami TypeScript sukurkite klasę Triangle kuri būtų skirta
darbui su trikampiais. Klasė turi turėti:
1. konstruktorių su trimis parametrais, kraštinėmis A, B, C
2. set'erius ir get'erius
3. privačią funkciją kuri patikrintų ar iš paduotų kraštinių
įmanoma sudaryti trikampį (dviejų kraštinių suma didesnė už trečiąją)
4. bandant pakeisti kraštinės reikšmę per set'erius turi būti
iškviečiamas patikrinimo metodas ir turėtų neleisti pakeisti reikšmių
5. Sukurkite metodą toString() kuris gražintų trikampį
string formatu (atspausdinimui)
5. Sukurkite metodą getPerimeter() kuri suskaičiuotų ir
grąžintų trikampio perimetrą
6. Sukurkite metodą getArea() kuri suskaičiuotų ir
grąžintų trikampio plotą
7. Sukurkite metodą largerTriangle(t:Triangle):boolean
kuris palygintų du trikampius ir grąžintų true
jei kviečiamasis trikampis yra mažesnis arba
lygus (plotu) ir true jei paduotas trikampis į funkciją yra didesnis
8. Sukurkite masyvą su trimis trikampiais ir
parašykite programinį kodą kuris suskaičiuotų visų šių
trikampių plotų sumą

Papildomas iššūkis
Sukurkite metodą getType() kuris grąžintų kokio tipo yra trikampis:
lygiakraštis, lygiašonis, statusis ar įprastinis.
*/
class Trikampis {
    constructor(aTri, bTri, cTri) {
        this.aTri = aTri;
        this.bTri = bTri;
        this.cTri = cTri;
    }
    artinka(a, b, c) {
        if (a + b > c && b + c > a && a + c > b) {
            return true;
        }
        else {
            return false;
        }
    }
    // Setteris
    set aaTri(a) {
        if (!this.artinka(this.aTri, this.bTri, this.cTri)) {
            this.aTri = a;
        }
    }
    set bbTri(b) {
        if (!this.artinka(this.aTri, this.bTri, this.cTri)) {
            this.bTri = b;
        }
    }
    set ccTri(c) {
        if (!this.artinka(this.aTri, this.bTri, this.cTri)) {
            this.cTri = c;
        }
    }
    get aaTri() {
        return this.aTri;
    }
    get bbTri() {
        return this.bTri;
    }
    get ccTri() {
        return this.cTri;
    }
    toString() {
        return `Trikampis ${this.aTri}, ${this.bTri}, ${this.cTri}`;
    }
    getPerimeter() {
        return this.aTri + this.bTri + this.cTri;
    }
    getArea() {
        const { aTri, bTri, cTri } = this;
        const s = (aTri + bTri + cTri) / 2;
        return Math.sqrt(s * (s - aTri) * (s - bTri) * (s - cTri));
    }
    largerTriangle(t) {
        if (this.getArea() > t.getArea()) {
            return true;
        }
        else {
            return false;
        }
    }
}
let grupe = [];
grupe.push(new Trikampis(5, 4, 5));
grupe.push(new Trikampis(2, 3, 3));
grupe.push(new Trikampis(7, 8, 7));
let plotis = 0;
grupe.forEach((tri) => {
    plotis += tri.getArea();
});
const nTrikampis = new Trikampis(5, 5, 4);
console.log("Visu trikampiu plotis", plotis);
