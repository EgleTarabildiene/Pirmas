
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


class Trikampis{
    constructor (   public aTri:number, 
                    public bTri:number, 
                    public cTri:number,
                ){
        
    }
private artinka(a:number, b: number, c:number ) {
    if (a + b > c && b + c > a && a + c > b) {
            return true;
        } else {
            return false;
        }
    }



    // Setteris
     set aaTri(a: number) {
        if (!this.artinka(this.aTri, this.bTri, this.cTri)) {
        this.aTri = a;
        }  
    }

     set bbTri(b: number) {
        if (!this.artinka(this.aTri, this.bTri, this.cTri)) {
        this.bTri = b;
        }   
    }

    set ccTri(c: number) {
        if (!this.artinka(this.aTri, this.bTri, this.cTri)) {
        this.cTri = c;
        }   
    }

      get aaTri(): number {
        return this.aTri;
    }

   

    get bbTri(): number {
        return this.bTri;
    }

    get ccTri(): number {
        return this.cTri;
    }


    public toString(){
       return `Trikampis ${this.aTri}, ${this.bTri}, ${this.cTri}`;
    }

 getPerimeter(): number {
        return this.aTri + this.bTri + this.cTri;
    }

 getArea(): number {
        const { aTri, bTri, cTri } = this;
        const s = (aTri + bTri + cTri) / 2;
        return Math.sqrt(s * (s - aTri) * (s - bTri) * (s - cTri));
    }




    public largerTriangle(t:Trikampis):boolean{  //7uzduotis
        
        if (this.getArea() > t.getArea()){
            return true;
        }else{
            return false;
        }
    }
}


let grupe:Trikampis[]  =[];

grupe.push(new Trikampis(5, 4, 5) );
grupe.push(new Trikampis(2, 3, 3) );
grupe.push(new Trikampis(7, 8, 7) );

let plotis=0;
grupe.forEach((tri)=>{
   
    plotis+=tri.getArea();
})


const nTrikampis = new Trikampis (5, 5, 4,)
console.log("Visu trikampiu plotis", plotis);