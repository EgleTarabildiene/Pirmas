
/*

Sukurkite chronometro aplikaciją.Aplikacija turi turėti 
tris mygtukus: Pradėti, Stabdyti ir Pradėti iš naujo.

Papildoma užduotis
Padarykite dar vieną mygtuką: Fiksuoti laiką kurį 
paspaudus chronometras nebūtų sustabdytas, 
bet laikas būtų užfiksuotas ir išvestas į ekraną.
*/




const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const dtime = document.getElementById("dtime");



//let i = 0;
let timerId = null;

let [milis, sec, min, hours] = [0, 0, 0, 0];




let stopTimer = () => {
    clearInterval(timerId)
}

let resetTimer = () => {
    clearInterval(timerId);
    [milis, sec, min, hours] = [0, 0, 0, 0];
    dtime.innerHTML = "00:00:00:00";
}


let clock = () => {
    milis++;
    if (milis > 99) {

        sec++;
        milis = 0;
        if (sec == 60) {
            sec = 0;
            min++;
            if (min == 60) {
                min = 0;
                hours++;

            }
        }
    }
    let hR = hours;
    let minR = min;
    let secR = sec;
    let milisR = milis;


    if (hours < 10) {
        hR += "0";
    }

    if (min < 10) {
        minR = "0" + minR;
    }

    if (sec < 10) {
        secR = "0" + secR;
    }
    if (milis < 10) {
        milisR = "0" + milisR;
    }



    dtime.innerHTML = hR + ":" + minR + ":" + secR + ":" + milisR;

}


function startWatch() {
    if (timerId != null) {

        clearInterval(timerId)
    }
    timerId = setInterval(clock, 10);
}


start.onclick = startWatch;
stop.onclick = stopTimer;
reset.onclick = resetTimer;


//dtime.innerHTML = `${min}:${sec < 10 ? '0' : ''}${sec}`;


/*
const clockDOM = document.getElementById('clock');

clockDOM.innerText = '0:00';

// daugkartine
let i = 0;
setInterval(() => {
    i++;
    const s = i % 60;
    const m = (i - s) / 60;

    clockDOM.innerHTML = `${m}:${s < 10 ? '0' : ''}${s}`;
}, 1000);


  let hR = hours < 10 ? "0" + hours : hours;
    let minR = min < 10 ? "0" + min : min;
    let secR = min < 10 ? "0" + sec : sec;


*/
