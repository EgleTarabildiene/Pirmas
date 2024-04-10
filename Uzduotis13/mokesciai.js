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
var vardasInput = document.getElementById("vardas");
var pavardeInput = document.getElementById("pavarde");
var atlyginimasInput = document.getElementById("atliginimas");
var skaiciuotiBtn = document.getElementById("skaiciuoti");
var rezultatasDiv = document.getElementById("rezultatas");
var Darbuotojas = /** @class */ (function () {
    function Darbuotojas(_vardas, _pavarde, _atlyginimas) {
        this._vardas = _vardas;
        this._pavarde = _pavarde;
        this._atlyginimas = _atlyginimas;
    }
    Object.defineProperty(Darbuotojas.prototype, "vardas", {
        get: function () {
            return this._vardas;
        },
        set: function (vardas) {
            this._vardas = vardas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Darbuotojas.prototype, "pavarde", {
        get: function () {
            return this._pavarde;
        },
        set: function (pavarde) {
            this._pavarde = pavarde;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Darbuotojas.prototype, "atlyginimas", {
        get: function () {
            return this._atlyginimas;
        },
        set: function (atlyginimas) {
            this._atlyginimas = atlyginimas;
        },
        enumerable: false,
        configurable: true
    });
    Darbuotojas.prototype.gpm = function () {
        return this._atlyginimas * 0.20;
    };
    Darbuotojas.prototype.psd = function () {
        return this._atlyginimas * 6.98 / 100;
    };
    Darbuotojas.prototype.vsd = function () {
        return this._atlyginimas * 12.52 / 100;
    };
    return Darbuotojas;
}());
var darbuotojai = [];
skaiciuotiBtn.onclick = function () {
    var vardas = vardasInput.value;
    var pavarde = pavardeInput.value;
    var atlyginimas = parseFloat(atlyginimasInput.value);
    var naujasDarbuotojas = new Darbuotojas(vardas, pavarde, atlyginimas);
    darbuotojai.push(naujasDarbuotojas);
    rezultatasDiv.innerHTML = '';
    darbuotojai.forEach(function (darbuotojas) {
        var div = document.createElement('div');
        div.innerHTML = "".concat(darbuotojas.vardas, " ").concat(darbuotojas.pavarde, " - Atlyginimas: ").concat(darbuotojas.atlyginimas, " EUR, GPM: ").concat(darbuotojas.gpm(), " EUR, PSD: ").concat(darbuotojas.psd(), " EUR, VSD: ").concat(darbuotojas.vsd(), " EUR");
        rezultatasDiv.appendChild(div);
    });
    vardasInput.value = '';
    pavardeInput.value = '';
    atlyginimasInput.value = '';
};
