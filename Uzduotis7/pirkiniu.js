const prekeInput = document.getElementById("preke");
const svorisInput = document.getElementById("kiekis");
const list = document.getElementById("tasks_list");

const addBtn = document.getElementById("add_task");
const clearTasks = document.getElementById("clear_tasks");



let tasks = [];

const showTasks = () => {

    list.innerHTML = "";

    tasks.forEach((t) => {

        const newTask = document.createElement("li");

        newTask.className = "list-group-item";
        newTask.textContent = `${t.pavadinimas} ${t.kiekis}`;
        list.appendChild(newTask);
    });
}



const addTask = () => {
    const preke = prekeInput.value;
    const svoris = svorisInput.value;
    tasks.push({
        pavadinimas: preke,
        kiekis: svoris,

    });
    prekeInput.value = "";
    svorisInput.value = "";

    showTasks();
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

const clearList = () => {

    tasks = [];
    localStorage.removeItem("tasks");

    showTasks();
}


addBtn.onclick = addTask;
clearTasks.onclick = clearList;


const lsTasks = localStorage.getItem("tasks");


if (lsTasks != null) {
    tasks = JSON.parse(lsTasks);
    showTasks();
}