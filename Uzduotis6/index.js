const ugisInput = document.getElementById("ugis");
const svorisInput = document.getElementById("svoris");
const btn = document.getElementById("btn");
const rez = document.getElementById("rez");

const skaiciuoti = () => {
    const ugis = ugisInput.valueAsNumber;
    const svoris = svorisInput.valueAsNumber;
    const sum = (svoris / ((ugis * ugis) / 10000)).toFixed(2);
    rez.innerHTML = `Jusu KMI yra:  ${sum}`;
}

btn.onclick = skaiciuoti;





